import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { API_END_POINT } from "../utils/constant.js";

const Verify = () => {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();
  const userOTP = useSelector((store) => store.app.userOTP);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!userOTP || !userOTP.user) {
      toast.error("Invalid user OTP");
      return;
    }

    console.log("Submitting form...");

    const UserID = { user: userOTP.user, otp };

    try {
      const response = await axios.post(`${API_END_POINT}/verify`, UserID);

      console.log("Response:", response);

      if (response.data.success) {
        toast.success( response.data.message );
        
        navigate("/login");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      toast.error("Error verifying OTP. Please try again.");
    }
  };

  const handleResendOTP = async () => {
    console.log("Resending OTP...");

    if (!userOTP || !userOTP.user) {
      toast.error("Invalid user OTP");
      return;
    }

    try {
      const response = await axios.post(`${API_END_POINT}/resendOTP`, {
        userID: userOTP.user,
        Email: userOTP.user,
      });

      console.log("Response:", response);

      if (response.data.success) {
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error resending OTP:", error);
      toast.error("Error resending OTP. Please try again.");
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
      <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
        <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
          <div className="flex flex-col items-center justify-center text-center space-y-2">
            <div className="font-semibold text-3xl">
              <p>Email Verification</p>
            </div>
            <div className="flex flex-row text-sm font-medium text-gray-400">
              {userOTP && userOTP.user ? (
                <p>We have sent a code to your email {userOTP.user}</p>
              ) : (
                <p>We have sent a code to your email.</p>
              )}
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col space-y-4">
                <div className="grid place-content-center">
                  <input
                    className="text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    value={otp}
                    onChange={(e) => setOTP(e.target.value)}
                    type="text"
                    placeholder="Enter OTP"
                  />
                </div>

                <div className="flex flex-col p-8 space-y-2">
                  <div>
                    <button className="grid place-content-center text-center w-full border rounded-xl outline-none py-5 bg-orange-500  border-none text-white text-sm shadow-sm">
                      Verify Account
                    </button>
                  </div>

                  <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                    <p>Didn't receive code?</p>{" "}
                    <button
                      className="flex flex-row items-center text-blue-600"
                      onClick={handleResendOTP}
                    >
                      Resend
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;
