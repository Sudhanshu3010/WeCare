import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import weblg from "../assets/weblg.png";
const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] px-4 mx-auto text-black">
      {/* <h1 className="w-full text-3xl text-indigo-500 font-bold"> React...</h1> */}
      <img className="w-[120px] h-[110px]  " src={weblg} alt="Logo" />
      <ul className="hidden md:flex uppercase">
        <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
          Home
        </li>
        <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
          Donation
        </li>
        <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
          About
        </li>
        <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
          Services
        </li>
        <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-800 bg-[#72A0C1] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <img className="w-[110px] " src={weblg} alt={weblg} />
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
            Home
          </li>
          <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
            Donation
          </li>
          <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
            About
          </li>
          <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
            Services
          </li>
          <li className="p-4 border-b border-gray-800 hover:bg-[#D3D3D3] transition-colors duration-300 cursor-pointer sm:hover:bg-gray-300 md:hover:bg-gray-400 lg:hover:font-2xl">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
