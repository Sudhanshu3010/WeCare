import { User } from "../models/userModel.js";
import { UserOTP } from "../models/userOTP.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export const Login = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    // console.log("Received request:", req.body);

    if (!Email || !Password) {
      // console.log("Invalid Data: Email or Password is missing.");
      return res.status(401).json({
        message: "Invalid Data",
        success: false,
      });
    }

    const user = await User.findOne({ Email });
    // console.log("User found:", user);

    if (!user) {
      // console.log("User not found for email:", Email);
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const isMatch = await bcryptjs.compare(Password, user.Password);
    // console.log("Password comparison result:", isMatch);

    if (!isMatch) {
      // console.log("Password does not match for user:", user._id);
      return res.status(401).json({
        message: "Invalid email or password",
        success: false,
      });
    }

    const tokenData = {
      id: user._id,
    };
    const token = await jwt.sign(tokenData, "awdadsadawawcawcawd", {
      expiresIn: "1d",
    });
    // console.log("Token generated successfully for user:", user._id);

    return res
      .status(200)
      .cookie("token", token)
      .json({
        message: `Welcome back ${user.FName}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const Logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "User logged out successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error",
      success: false,
    });
  }
};

export const Register = async (req, res) => {
  try {
    const { FName, LName, Email, Phoneno, Password } = req.body;
    console.log("FName:", FName);
    console.log("LName:", LName);
    console.log("Email:", Email);
    console.log("Phoneno:", Phoneno);
    console.log("Password:", Password);

    if (!FName || !LName || !Phoneno || !Email || !Password) {
      console.log("Invalid data");
      return res.status(401).json({
        message: "Invalid data",
        success: false,
      });
    }
    const user = await User.findOne({ Email });
    console.log("User:", user);

    if (user) {
      console.log("This email is already in use");
      return res.status(401).json({
        message: "This email is already in use",
        success: false,
      });
    }

    const hashPassword = await bcryptjs.hash(Password, 16);
    console.log("Hashed Password:", hashPassword);

    await User.create({
      FName,
      LName,
      Email,
      Phoneno,
      Password: hashPassword,
      Verified: false,
    });

    // Send OTP email and await the response
    await sentOTPEmail(Email, res);

    // return res.status(201).json({
    //   message: "Account Created Successfully.",
    //   success: true,
    // });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Internal Server Error while registration",
      success: false,
    });
  }
};

const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  auth: {
    user: "wilburn.gislason@ethereal.email",
    pass: "yTdu626r3g7xqJQZ9H",
  },
});

const sentOTPEmail = async (Email, res) => {
  try {
    if (!Email || !Email.trim()) {
      console.log("Email is required");
      return res
        .status(400)
        .json({ message: "Email is required", success: false });
    }

    const otp = `${1000 + Math.floor(Math.random() * 9000)}`;

    const mailOptions = {
      from: "tejasspam15@gmail.com",
      to: Email,
      subject: "Verify your email",
      html: `<p>Enter your OTP ${otp} in the wecare app to verify your email.</p><p>This OTP is valid for the next <b>10 minutes</b>.</p>`,
    };

    // Save OTP to the database
    const userOTP = await UserOTP.create({
      user: Email,
      otp,
      createdAt: Date.now(),
      expiresAt: Date.now() + 600000, // Expiry set to 10 minutes
    });

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(201).json({
      status: "Pending",
      message: "Verification otp sent on email.",
      userOTP,
      success: true,
    });
  } catch (error) {
    console.error("Error sending OTP email:", error);
    res.status(500).json({
      message: "Error while OTP sending",
      success: false,
    });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    console.log("Starting OTP verification...");
    const { user, otp } = req.body;
    console.log("Received user:", user);
    console.log("Received OTP:", otp);

    // Validation
    if (!user || !otp) {
      console.error("User ID and OTP are required");
      return res
        .status(400)
        .json({ message: "User ID and OTP are required", success: false });
    }

    // Find user's OTP
    const userOTP = await UserOTP.findOne({ user });

    if (!userOTP) {
      console.error("Invalid User ID");
      return res
        .status(401)
        .json({ message: "Invalid User ID", success: false });
    }

    const { expiresAt, otp: userOTPValue } = userOTP;

    if (expiresAt < Date.now()) {
      await UserOTP.deleteMany({ user });
      console.error("OTP expired");
      return res.status(401).json({ message: "OTP expired", success: false });
    }

    if (userOTPValue !== otp) {
      console.error("Invalid OTP");
      return res.status(401).json({ message: "Invalid OTP", success: false });
    }

    // OTP verified successfully
    await User.updateOne({ Email: user }, { Verified: true });
    await UserOTP.deleteMany({ user });
    console.log("OTP verified, Account Created Successfully.");
    return res.status(200).json({
      message: "OTP verified, Account Created Successfully.",
      success: true,
    });
  } catch (error) {
    console.error("Error verifying OTP:", error);
    return res
      .status(500)
      .json({ message: "Internal Server Error", success: false });
  }
};

export const resendOTP = async (req, res) => {
  try {
    const { user } = req.body.app.userOTP;

    console.log("user:", user);
    if (!user) {
      console.log("User ID and Email are required");
      return res
        .status(400)
        .json({ message: "User ID and Email are required", success: false });
    }

    await UserOTP.deleteMany({ user });
    await sentOTPEmail(user, res);
  } catch (error) {
    console.error("Error resending OTP:", error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
};
