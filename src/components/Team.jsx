import React from "react";
import TeamCard from "./TeamCard";
import tejass from "../assets/tejass.jpg";
import tejasm from "../assets/tejasm.jpg";
import sudhanshu from "../assets/sudhanshu.jpg";
import sanskriti from "../assets/sanskriti.jpg";

const Team = () => {
  return (
    <section class="text-white body-font bg-gray-800 m-2 ">
      <div class="container px-24 py-24 mx-auto m-[-1px]">
        <div class="text-center mb-8">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-white mb-4">
            Our Team
          </h1>
          <div class="flex mt-6 justify-center">
            <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>
        <div class="container p-5 mx-auto">
          <div class="flex flex-wrap mx-2 md:mx-12 my-4 ">
            <TeamCard 
              name="Sanskriti Satpute"
              designation="Full Stack Developer"
              intro="Sanskriti Satpute, our Full Stack Developer, plays a pivotal role in crafting and optimizing our projects with her expertise."
              im={sanskriti}
            />
            <TeamCard
              name="Tejas Mete"
              designation="Full Stack Developer"
              intro="Tejas Mete, our Full Stack Developer, plays a pivotal role in crafting and optimizing our projects with her expertise."
              im={tejasm}
            />
            <TeamCard
              name="Sudhanshu Sonare"
              designation="Full Stack Developer"
              intro="Sudhanshu Sonare, our Full Stack Developer, plays a pivotal role in crafting and optimizing our projects with her expertise."
              im={sudhanshu}
            />

            <TeamCard
              name="Tejas Shilare"
              designation="Full Stack Developer"
              intro="Tejas Shilare, our Full Stack Developer, plays a pivotal role in crafting and optimizing our projects with her expertise."
              im={tejass}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
