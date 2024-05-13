import React, { useState } from "react";
import donateimg from "../assets/donate-img.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { API_END_POINT } from "../utils/constant.js";
import toast from "react-hot-toast";

const SignUpDonor = () => {
  const [FName, setFirstName] = useState("");
  const [LName, setLastName] = useState("");
  const [Phoneno, setPhoneNumber] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!FName.trim()) {
      errors.firstName = "First name is required";
      isValid = false;
    }

    if (!LName.trim()) {
      errors.lastName = "Last name is required";
      isValid = false;
    }

    if (!Phoneno.trim()) {
      errors.phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(Phoneno.trim())) {
      errors.phone = "Phone number should be 10 digits long";
      isValid = false;
    }

    if (!Email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(Email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!Password.trim()) {
      errors.password = "Password is required";
      isValid = false;
    } else if (Password.trim().length < 6) {
      errors.password = "Password must be at least 6 characters long";
      isValid = false;
    }

    if (Password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const getInputData = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const user = { FName, LName, Phoneno, Email, Password };

    try {
      const res = await axios.post(`${API_END_POINT}/register`, user);
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }

    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors({});
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center items-center space-x-0 sm:space-x-4">
        <img
          className="md:block hidden"
          src={donateimg}
          alt={donateimg}
          width={"500px"}
        ></img>

        <form
          className="bg-white p-8 rounded-lg w-[400px] shadow-md"
          onSubmit={getInputData}
        >
          <h1 className="font-bold mb-4 text-orange-500">Donor Sign Up</h1>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter First Name"
              value={FName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter Last Name"
              value={LName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Phone</label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter Phone Number"
              value={Phoneno}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword}</p>
            )}
          </div>
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Up
          </button>

          <p className="mt-2 text-grey-400">
            Already have an account?
            <NavLink to="/login" className="text-orange-500">
              {" "}
              Log in{" "}
            </NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default SignUpDonor;
