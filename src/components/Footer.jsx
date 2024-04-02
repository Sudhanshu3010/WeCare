import React from "react";
import weblg from "../assets/weblg.png";

const Footer = () => {
  return (
    <div
      className="w-full px-[100px] pb-[20px] bg-gray-900 px-4 text-white pt-8
    flex flex-col md:flex-row flex-wrap justify-between "
    >
      <div className="p-[20px] ">
        <img className="w-40" src={weblg} alt={weblg} />
        <p className="my-4 font-light">Email us: support@wecare.com</p>
        <p className="font-light">
          Our paper is sourced from FSC-
          <br />
          certified mills. We plant enough trees to more than <br />
          double our paper usage.
        </p>
      </div>

      <div className="p-[20px]">
        <h2 className="font-bold text-xl mt-4">WeCare</h2>
        <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
        <div>
          <p>About us</p>
          <p>Donation</p>
          <p>Contact</p>
        </div>
      </div>

      <div className="p-[20px]">
        <div className="mt-12 ">
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>

      <div className="p-[20px]">
        <h2 className="font-bold text-xl mt-4">Links</h2>
        <div className="w-32 h-1 border-b-2 border-yellow-400 rounded-2xl my-2"></div>
        <div>
          <p> support@wecare.com</p>
          <p> </p>
          <p>Designed with ❤️ ️ by our team in Nagpur.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
