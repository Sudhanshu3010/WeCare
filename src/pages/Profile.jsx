import React, { useState } from "react";
import dnimg1 from "../assets/dn-img-1.jpeg";
import dnimg2 from "../assets/dn-img-2.jpeg";
import dnimg3 from "../assets/dn-img-3.jpeg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Accordion } from "../components/Faq";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const user = useSelector((store) => store.app.user);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="profile-page my-[70px] md:mx-[100px] ">
      <div className="md:flex">
        <ul className="flex-column space-y space-y-4 text-lg font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0">
          <li>
            <Link
              href="#"
              className={`nav-link inline-flex items-center px-11 py-3 rounded-lg ${
                activeTab === "profile"
                  ? "text-white bg-orange-500"
                  : "text-gray-500 dark:text-gray-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick("profile")}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`nav-link inline-flex items-center text-center  px-3 py-3 rounded-lg ${
                activeTab === "act-donation"
                  ? "text-white bg-orange-500"
                  : "text-gray-500 dark:text-gray-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick("act-donation")}
            >
              Active Donations
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`nav-link inline-flex items-center px-3 py-3 text-center rounded-lg ${
                activeTab === "his-donation"
                  ? "text-white bg-orange-500"
                  : "text-gray-500 dark:text-gray-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick("his-donation")}
            >
              Donation History
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`nav-link inline-flex items-center px-12 py-3 rounded-lg ${
                activeTab === "FAQs"
                  ? "text-white bg-orange-500"
                  : "text-gray-500 dark:text-gray-400 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
              }`}
              onClick={() => handleTabClick("FAQs")}
            >
              FAQs
            </Link>
          </li>
          {/* Add similar code for other navigation links */}
        </ul>
        <div
          id="profile-tab"
          className={`tab-content p-6 bg-gray-100 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full ${
            activeTab === "profile" ? "block" : "hidden"
          }`}
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Profile Tab
          </h3>
          {user && (
            <p className="mb-2 text-3xl">
              {user.FName} {user.LName}
            </p>
          )}
          {!user && <p className="mb-2 text-3xl">Welcome User</p>}
          <p>
            This is the profile section where you can get your information on
            previous donations
          </p>

          <div className="value-tabs flex flex-wrap justify-between gap-3 mt-[30px]">
            <div className="flex-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg
                className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5.109,8.392H4.249c-0.238,0-0.43,0.193-0.43,0.431c0,0.238,0.192,0.431,0.43,0.431h0.861c0.238,0,0.43-0.193,0.43-0.431C5.54,8.585,5.347,8.392,5.109,8.392 M4.249,4.088h11.19c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H4.249c-0.238,0-0.43,0.192-0.43,0.431C3.818,3.896,4.011,4.088,4.249,4.088 M2.527,5.81H17.16c0.238,0,0.431-0.192,0.431-0.43c0-0.238-0.192-0.431-0.431-0.431H2.527c-0.238,0-0.43,0.192-0.43,0.431C2.097,5.617,2.289,5.81,2.527,5.81 M18.452,6.67H1.236c-0.476,0-0.861,0.385-0.861,0.861v8.608c0,0.475,0.385,0.86,0.861,0.86h17.216c0.475,0,0.86-0.386,0.86-0.86V7.531C19.312,7.056,18.927,6.67,18.452,6.67 M1.666,7.531c0.238,0,0.431,0.192,0.431,0.431c0,0.238-0.192,0.43-0.431,0.43c-0.238,0-0.43-0.192-0.43-0.43C1.236,7.724,1.428,7.531,1.666,7.531 M1.666,16.14c-0.238,0-0.43-0.192-0.43-0.431c0-0.237,0.192-0.431,0.43-0.431c0.238,0,0.431,0.193,0.431,0.431C2.097,15.947,1.904,16.14,1.666,16.14 M18.021,16.14c-0.238,0-0.431-0.192-0.431-0.431c0-0.237,0.192-0.431,0.431-0.431s0.431,0.193,0.431,0.431C18.452,15.947,18.26,16.14,18.021,16.14 M18.452,14.496c-0.136-0.048-0.279-0.078-0.431-0.078c-0.714,0-1.291,0.578-1.291,1.291c0,0.151,0.03,0.295,0.078,0.431H2.878c0.048-0.136,0.079-0.279,0.079-0.431c0-0.713-0.579-1.291-1.292-1.291c-0.151,0-0.295,0.03-0.43,0.078V9.174c0.135,0.048,0.279,0.079,0.43,0.079c0.713,0,1.292-0.578,1.292-1.291c0-0.152-0.031-0.295-0.079-0.431h13.93C16.761,7.667,16.73,7.81,16.73,7.962c0,0.713,0.577,1.291,1.291,1.291c0.151,0,0.295-0.031,0.431-0.079V14.496z M18.021,8.392c-0.238,0-0.431-0.192-0.431-0.43c0-0.238,0.192-0.431,0.431-0.431s0.431,0.192,0.431,0.431C18.452,8.2,18.26,8.392,18.021,8.392 M15.438,14.418h-0.86c-0.238,0-0.431,0.192-0.431,0.43c0,0.238,0.192,0.431,0.431,0.431h0.86c0.238,0,0.431-0.192,0.431-0.431C15.869,14.61,15.677,14.418,15.438,14.418 M9.844,8.392c-1.901,0-3.443,1.542-3.443,3.443s1.542,3.443,3.443,3.443s3.443-1.542,3.443-3.443S11.745,8.392,9.844,8.392 M11.233,13.271c-0.071,0.162-0.169,0.297-0.292,0.403c-0.124,0.108-0.268,0.189-0.434,0.246c-0.166,0.058-0.295,0.089-0.488,0.097v0.4H9.673v-0.4c-0.208-0.004-0.35-0.037-0.522-0.099c-0.174-0.063-0.322-0.151-0.445-0.267s-0.219-0.257-0.286-0.424c-0.067-0.168-0.099-0.361-0.095-0.579h0.659c-0.003,0.256,0.052,0.459,0.168,0.608c0.115,0.147,0.257,0.226,0.522,0.233v-1.417c-0.158-0.042-0.265-0.094-0.422-0.154c-0.156-0.061-0.297-0.139-0.422-0.234c-0.125-0.095-0.226-0.215-0.303-0.36c-0.077-0.144-0.115-0.323-0.115-0.538c0-0.187,0.035-0.352,0.106-0.494c0.072-0.143,0.168-0.261,0.289-0.357c0.121-0.096,0.261-0.168,0.419-0.22C9.383,9.665,9.5,9.64,9.673,9.64V9.256h0.348V9.64c0.173,0,0.287,0.023,0.441,0.07c0.154,0.047,0.288,0.117,0.401,0.211c0.114,0.093,0.204,0.212,0.272,0.356c0.067,0.145,0.101,0.312,0.101,0.503h-0.659c-0.008-0.199-0.059-0.351-0.153-0.457c-0.095-0.105-0.197-0.158-0.404-0.158V11.4c0.173,0.048,0.293,0.103,0.459,0.165c0.166,0.062,0.312,0.142,0.439,0.239c0.127,0.098,0.229,0.219,0.306,0.363c0.077,0.144,0.116,0.321,0.116,0.532C11.341,12.919,11.305,13.109,11.233,13.271M10.458,12.332c-0.067-0.051-0.143-0.092-0.228-0.123c-0.085-0.031-0.123-0.06-0.21-0.082v1.363c0.208-0.016,0.329-0.076,0.462-0.185c0.133-0.107,0.199-0.277,0.199-0.512c0-0.109-0.02-0.2-0.061-0.275C10.581,12.444,10.526,12.383,10.458,12.332 M9.069,10.74c0,0.094,0.019,0.174,0.058,0.241c0.039,0.066,0.087,0.122,0.148,0.169c0.06,0.047,0.128,0.085,0.208,0.114s0.109,0.054,0.19,0.073v-1.171c-0.208,0-0.32,0.044-0.434,0.132C9.126,10.386,9.069,10.533,9.069,10.74" />
              </svg>
              <Link href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Donation Value
                </h5>
              </Link>
              <p className="mb-3 text-3xl font-normal text-gray-500 dark:text-gray-400">
                $0
              </p>
            </div>

            <div className="flex-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg
                className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
              </svg>
              <Link href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Meals Donated
                </h5>
              </Link>
              <p className="mb-3 text-3xl font-normal text-gray-500 dark:text-gray-400">
                0
              </p>
            </div>

            <div className="flex-auto max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <svg
                className="w-10 h-10 text-gray-500 dark:text-gray-400 mb-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z" />
              </svg>
              <Link href="#">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  No. of Charities
                </h5>
              </Link>
              <p className="mb-3 font-normal text-3xl text-gray-500 dark:text-gray-400">
                0
              </p>
            </div>
          </div>
        </div>
        <div
          id="act-donation-tab"
          className={`tab-content p-6 bg-gray-100 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full ${
            activeTab === "act-donation" ? "block" : "hidden"
          }`}
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Active Donation Tab
          </h3>
          <p className="mb-2">
            This is some placeholder content for the Dashboard tab's associated
            content.
          </p>
          <div className="flex">
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl mb-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={dnimg1}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Wedding Food
                </h5>

                <div className="flex">
                  <div className="block">
                    <p class=" font-bold text-gray-700 dark:text-gray-400">
                      Pickup Date & Time
                    </p>
                    <p>Monday, April 22, 10:18 AM</p>
                  </div>
                  <div class="vl"></div>
                  <div className="block">
                    <p class=" font-bold text-gray-700 dark:text-gray-400">
                      Pickup Location
                    </p>
                    <p>
                      Shivaji Lawn, Shahu Nagar,Besa rd.
                      <br /> Nagpur - 440034
                    </p>
                  </div>
                  <div className="vl m-0"></div>
                  <div className="block">
                    <p class=" font-bold text-gray-700 dark:text-gray-400">
                      Specific Instructions
                    </p>
                    <p>Na</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block ms-2 mt-2">
              <button
                type="button"
                class="text-white  bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Accept
              </button>
              <button
                type="button"
                class="text-white   bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Decline
              </button>
            </div>
          </div>

          <div className="flex">
            <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-3xl mb-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img
                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                src={dnimg2}
                alt=""
              />
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Food Donation Box
                </h5>

                <div className="flex">
                  <div className="block">
                    <p class=" font-bold text-gray-700 dark:text-gray-400">
                      Pickup Date & Time
                    </p>
                    <p>Monday, April 22, 11:30 AM</p>
                  </div>
                  <div class="vl"></div>
                  <div className="block">
                    <p class=" font-bold text-gray-700 dark:text-gray-400">
                      Pickup Location
                    </p>
                    <p>
                      Happy Foods, Bajaj Nagar,Besa rd.
                      <br /> Nagpur - 440027
                    </p>
                  </div>
                  <div className="vl m-0"></div>
                  <div className="block">
                    <p class=" font-bold text-gray-700 dark:text-gray-400">
                      Specific Instructions
                    </p>
                    <p>Few items (fruits) Likely to expire in 1 day</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="block ms-2 mt-2">
              <button
                type="button"
                class="text-white  bg-orange-500 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Accept
              </button>
              <button
                type="button"
                class="text-white   bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
        <div
          id="his-donation-tab"
          className={`tab-content p-6 bg-gray-100 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full ${
            activeTab === "his-donation" ? "block" : "hidden"
          }`}
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            Donation History Tab
          </h3>
          <p className="mb-2">
            This is some placeholder content for the Dashboard tab's associated
            content.
          </p>
          <div class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl mb-3 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
              src={dnimg3}
              alt=""
            />
            <div class="flex flex-col justify-between p-4 leading-normal">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Party Food Donation
              </h5>

              <div className="flex">
                <div className="block">
                  <p class=" font-bold text-gray-700 dark:text-gray-400">
                    Pickup Date & Time
                  </p>
                  <p>Monday, April 22, 10:18 AM</p>
                </div>
                <div class="vl"></div>
                <div className="block">
                  <p class=" font-bold text-gray-700 dark:text-gray-400">
                    Pickup Location
                  </p>
                  <p>
                    Shivaji Lawn, Shahu Nagar,Besa rd. Nagpur - 440034
                  </p>
                </div>
                <div className="vl m-0"></div>
                <div className="block">
                  <p class=" font-bold text-gray-700 dark:text-gray-400">
                    Specific Instructions
                  </p>
                  <p>Na</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="FAQs-tab"
          className={`tab-content p-6 bg-gray-100 text-medium text-gray-500 dark:text-gray-400 dark:bg-gray-800 rounded-lg w-full ${
            activeTab === "FAQs" ? "block" : "hidden"
          }`}
        >
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            FAQs Tab
          </h3>
          <hr></hr>
          <p className="my-2">What are you looking for?</p>
          <Accordion></Accordion>
        </div>
        {/* Add similar code for other tab contents */}
      </div>
    </div>
  );
};

export default Profile;
