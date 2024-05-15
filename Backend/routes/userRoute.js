import express from "express";
import {
  Login,
  Logout,
  Register,
  verifyOTP,
  resendOTP,
} from "../controllers/user.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/verify").post(verifyOTP);
router.route("/resendOTP").post(resendOTP);

export default router;
