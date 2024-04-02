import React from "react";

const TeamCard = (props) => {
  return (
    <div class="md:w-1/4 w-1/2 p-4 mx-auto max-w-60 min-w-36 ">
      <div class="py-8 px-4 w-full h-full text-center rounded-lg border-grey-200 border-2  hover:bg-white hover:scale-105 hover:delay-80 hover:text-gray-800 ">
        <img
          alt="testimonial"
          class="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
          src={props.im}
        />
        <h2 class="text-indigo-500 font-medium title-font tracking-wider text-sm">
          {props.name}
        </h2>
        <p class="text-indigo-500">{props.designation}</p>
        <span class="inline-block h-0.5 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
        <p class="leading-relaxed">{props.intro}</p>
      </div>
    </div>
  );
};

export default TeamCard;
