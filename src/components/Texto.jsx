import React from "react";
// import { ReactTyped } from "react-typed";
const Texto = () => {
  return (
    <div class="w-full h-auto flex flex-wrap flex-col items-center">
      <p class="text-[#FF7918] font-bold text-xl md:text-2xl text-center">
        "How WeCare Works.."
      </p>

      <div class="w-36 h-1 border-b-4 border-yellow-200 mt-2 rounded-2xl md:mt-4 mb-12"></div>
      <p className="text-center">
        WeCare platform is a web app, allowing food donors to schedule <br />
        pick-up services in a few clicks. Our data-driven technology provides{" "}
        <br />
        detailed metrics on the impact of those contributions.
      </p>
    </div>
  );
};

export default Texto;
