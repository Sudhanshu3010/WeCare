import React from "react";
import banner_image from "../assets/banner_image.png";

const BannerSection = () => {
  return (
    <section className="text-gray-600 body-font m-8">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font  sm:text-6xl text-3xl mb-4 font-medium text-gray-900">
            Donating
            <br className="hidden  lg:inline-block" />
            Surplus Food & utilities.
          </h1>
          <p className="mb-8 leading-relaxed">
            Helping others with surplus food and utilities ensures everyone has
            enough to eat and essential services.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-6 focus:outline-black hover:bg-green-600 rounded-full text-md">
              Donate
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-black hover:bg-gray-200 rounded-full text-md">
              Recieve
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="banner_Image"
            src={banner_image}
          />
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
