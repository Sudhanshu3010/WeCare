import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    console.log("Start of getInputData function");
    const user = { Email, Password };
    console.log("User object:", user);
    try {
      console.log("Api call started");
      const res = await axios.post(`${API_END_POINT}/login`, user, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      if (res.data.success) {
        toast.success(res.data.message);
      }
      console.log("Login response:", res);
      console.log(res.data.user);
      dispatch(setUser(res.data.user));
      setIsLogin(true);
      navigate("/profile");
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
      if (error.response.status === 401) {
        const redirectToAnotherPage = window.confirm(
          "Invalid credentials. Click to create a new account"
        );
        console.log("Redirect confirmation:", redirectToAnotherPage);
        if (redirectToAnotherPage) {
          navigate("/Signup");
        }
      } else {
        navigate("/Home");
      }
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <section className="gradient-form h-full bg-neutral-200">
        <div className="container h-full p-10 login-container">
          <div className="flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div className="g-0 lg:flex lg:flex-wrap">
                  {/* Left column container */}
                  <div className="px-4 md:px-0 lg:w-6/12">
                    <div className="md:mx-6 md:p-12">
                      {/* Logo */}
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                          alt="logo"
                        />
                        <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Welcome to We Care
                        </h4>
                      </div>

                      <form onSubmit={getInputData}>
                        <p className="mb-4">Please login to your account</p>
                        {/* Username input */}
                        <div
                          className="relative mb-4"
                          data-twe-input-wrapper-init
                        >
                          <label
                            htmlFor="exampleFormControlInput1"
                            className="text-white ms-3"
                          >
                            Username
                          </label>
                          <input
                            value={Email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary placeholder-opacity-50 dark:text-white dark:placeholder-text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
                            id="exampleFormControlInput1"
                            placeholder="Enter Username"
                          />
                        </div>

                        {/* Password input */}
                        <div
                          className="relative mb-4"
                          data-twe-input-wrapper-init
                        >
                          <label
                            htmlFor="exampleFormControlInput11"
                            className="text-white ms-3"
                          >
                            {" "}
                            Enter Password
                          </label>
                          <input
                            value={Password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary placeholder-opacity-50 dark:text-white dark:placeholder-text-neutral-300 dark:autofill:shadow-autofill dark:peer-focus:text-primary"
                            id="exampleFormControlInput11"
                            placeholder="Password"
                          />
                        </div>

                        {/* Submit button */}
                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-dark-3 transition duration-150 ease-in-out hover:shadow-dark-2 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:shadow-dark-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                            type="submit"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            style={{
                              background:
                                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                            }}
                          >
                            Log in
                          </button>
                          {/* Forgot password link */}
                          <a href="#!">Forgot password?</a>
                        </div>

                        {/* Register button */}
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 me-2">Don't have an account?</p>
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-50/50 hover:text-danger-600 focus:border-danger-600 focus:bg-danger-50/50 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-rose-950 dark:focus:bg-rose-950"
                            data-twe-ripple-init
                            data-twe-ripple-color="light"
                            onClick={loginHandler}
                          >
                            <NavLink to="/signup" className="text-white-500">
                              {" "}
                              Register{" "}
                            </NavLink>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* Right column container with background and description */}
                  <div
                    className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-e-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        Great to see you again! Ready to dive back into the
                        WeCare Community?
                      </h4>
                      <p className="text-sm"></p>
                      <ul>
                        <li className="flex">
                          <img
                            className="me-3 filter grayscale"
                            src={
                              "https://replate-storage.s3.us-west-1.amazonaws.com/assets/icons/signup_page/02_support.svg"
                            }
                            alt=""
                            width={"30px"}
                          />
                          Support your local community with food donation
                        </li>
                        <li className="flex mt-3">
                          <img
                            className="me-3 filter grayscale"
                            src={
                              "https://replate-storage.s3.us-west-1.amazonaws.com/assets/icons/signup_page/03_schedule.svg"
                            }
                            alt="s"
                            width={"30px"}
                          />
                          Schedule a surplus food pickup in seconds
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
