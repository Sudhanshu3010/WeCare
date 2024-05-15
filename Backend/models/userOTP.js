import mongoose from "mongoose";

const userOTPSchema = new mongoose.Schema({
  user: String,
  otp: String,
  createdAt: Date,
  expiresAt: Date,
});

export const UserOTP = mongoose.model("UserOTP", userOTPSchema);
