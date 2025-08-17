import React from "react";
import Img1 from "../assets/componets-bg/Saurabh.jpg";
import Img2 from "../assets/componets-bg/Sumant.jpg";

const ImageCard = ({ src, alt, name, title }) => {
  return (
    <div className="relative border-4 border-black w-full md:w-[400px] h-[600px] overflow-hidden">
      {/* Image */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {/* Static gradient + text */}
      <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white to-transparent px-4 py-6 text-center">
        <p
          className="text-3xl font-bold"
          style={{ fontFamily: "'Bebas Neue', cursive" }}
        >
          {name}
        </p>
        <p className="text-lg text-red-600">{title}</p>
      </div>
    </div>
  );
};

const WhatWeDo = () => {
  return (
    <section className="bg-[#f5f5f5] px-4 py-12 text-center">
      {/* Small heading */}
      <p
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "28px", // increased size
          letterSpacing: "1px",
        }}
        className="text-black mb-4"
      >
        WHAT WE DO
      </p>

      {/* Main heading */}
      <h2
        style={{ fontFamily: "'Bebas Neue', cursive" }}
        className="text-3xl md:text-4xl max-w-5xl mx-auto leading-snug"
      >
        <span className="font-normal">WE DON’T JUST</span>{" "}
        <span className="font-bold">
          DETAIL VEHICLES. WE RESTORE PRIDE, PRESERVE VALUE, AND PROTECT PASSION
          — ONE MACHINE AT A TIME.
        </span>
      </h2>

      {/* Image section */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center">
        <ImageCard
          src={Img1}
          alt="Saurabh"
          name="SAURABH"
          title="Co-founder, OCD Detail Studio"
        />
        <div className="-ml-[4px]">
          <ImageCard
            src={Img2}
            alt="Sumant"
            name="SUMANT"
            title="Co-founder, OCD Detail Studio"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
