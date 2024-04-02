import React from "react";

const GalleryCard = (props) => {
  return (
    <div className="md:w-1/3 sm:w-1/2 p-4 mb-[10px] ">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute insert-0 h-full w-full object-left-top object-cover rounded-lg"
          src={props.l}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-80 ">
          <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
            {props.name}
          </h1>
          <p className="leading-relaxed">{props.para}</p>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
