import React from "react";
import banner from "../assets/banner-img-1.png";

const Banner = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[500px] rounded-3xl "
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Gradient Overlay */}
        <div className="rounded-3xl absolute inset-0 bg-gradient-to-t md:bg-gradient-to-b from-black/80 via-transparent to-black/80"></div>

        {/* Content */}
        <div className="mulish text-center relative  text-white gap-4 flex flex-col items-center justify-center h-full">
          <h1 className="w-[95%] md:w-[65%] font-bold md:font-extrabold text-2xl md:text-[40px]">
            It avoids subjective claims or exaggeration that might raise red
            flags legally
          </h1>
          <p className="w-[95%] md:w-[85%] font-medium opacity-80">
            Our platform connects you with verified, experienced doctors across
            various specialties — all at your convenience. Whether it's a
            routine checkup or urgent consultation, book appointments in minutes
            and receive quality care you can trust.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
