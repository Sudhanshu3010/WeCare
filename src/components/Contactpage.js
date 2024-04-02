
import React from 'react';
import ContactPageImg from "../assets/ContactPageImg.png";
import { LinkProps } from 'react-router-dom';

function Contactpage() {
  return (
      <>
      <div className="flex flex-col items-center justify-center m-[110px]">
       <h1 className="text-5xl mb-4 text-orange-500 font-semibold  ">Contact Us</h1>
       <p className="text-center text-2xl text-gray-500 ">Any Questions or Remarks? Just write us a message!!</p>
      </div>

    <div className="h-full bg-white mb-4">
      
      <div className="mx-auto">
        <div className="flex justify-center px-6 py-12">
          
          <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          
            <div className="w-full h-auto bg-gray-400 dark:bg-gray-800 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
              <img src={ContactPageImg} alt="img" className="w-full h-full object-cover rounded" />
            </div>
            
            <div className="w-full lg:w-7/12 bg-white dark:bg-gray-700 p-5 rounded-lg lg:rounded-l-none">
              <h3 className="py-4 text-2xl text-center text-gray-800 dark:text-white">Contact Us!</h3>
              <form className="px-8 pt-6 pb-8 mb-4 bg-white dark:bg-gray-800 rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="firstName">
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="lastName">
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="number">
                      Number
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white  rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="number"
                      type="number"
                      placeholder=" "
                    />
                  </div>
                 
                </div>

                <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700 dark:text-white" htmlFor="message">
                      Message
                    </label>
                    <input
                      className="w-full h-[100px] px-3 py-2 mb-3 text-sm leading-tight text-gray-700 dark:text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="mess"
                      type="text"
                      placeholder="your message"
                    />
                  </div>
               
                <hr className="mb-6 border-t" />
                <div className="mb-6 text-center">
                  <button
                    className=" px-4 py-2 font-bold text-white bg-orange-500 rounded-full hover:bg-blue-700 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-900 focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Send Message
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contactpage;




