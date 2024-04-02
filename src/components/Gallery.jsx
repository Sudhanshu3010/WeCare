import React from "react";
import GalleryCard from "./GalleryCard";
import galleryimg1 from "../assets/galleryimg1.webp";
import galleryimg2 from "../assets/galleryimg2.webp";
import galleryimg3 from "../assets/galleryimg3.jpg";
import galleryimg4 from "../assets/galleryimg4.jpg";
import galleryimg5 from "../assets/galleryimg5.jpg";
import galleryimg6 from "../assets/galleryimg6.jpg";

const Gallery = () => {
  return (
    <>
      <section className="text-gray-600 body-font m-3">
        <div className="container px-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Gallery
            </h1>
            <p className="md:w-2/3 mx-auto leading-relaxed text-base">
              Explore images capturing the essence of generosity as surplus
              resources, including food, clothing, educational materials, and
              essential supplies, find their way to those in need. Witness the
              smiles, the gratitude, and the sense of hope these donations bring
              to individuals and communities across India. Each image tells a
              story of compassion and empowerment, illustrating the tangible
              difference that collective action can make in creating a more
              inclusive and sustainable society. Join us in celebrating the
              power of giving and the transformative journey towards a brighter
              future for all.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <GalleryCard
              l={galleryimg2}
              name="Food Donation"
              para="Volunteers making a difference by donating food to those in need."
            />
            <GalleryCard
              l={galleryimg3}
              name="Food Donation"
              para="Volunteers making a difference by donating food to those in need."
            />
            <GalleryCard
              l={galleryimg1}
              name="Food Donation"
              para="Volunteers making a difference by donating food to those in need."
            />
            <GalleryCard
              l={galleryimg5}
              name="Cloths Donation"
              para="Volunteers making a difference by donating cloths to those in need."
            />
            <GalleryCard
              l={galleryimg6}
              name="Cloths Donation"
              para="Volunteers making a difference by donating cloths to those in need."
            />
            <GalleryCard
              l={galleryimg4}
              name="Cloths Donation"
              para="Volunteers making a difference by donating cloths to those in need."
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
