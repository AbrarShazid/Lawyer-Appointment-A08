import React from "react";
import { FaRegRegistered } from "react-icons/fa6";
import { Link } from "react-router";

const LawyerCard = ({ lawyer }) => {
  const { image, name, experience, speciality, licenseNumber } = lawyer;

  return (
    <div className="grid grid-cols-3 p-3 md:p-6 rounded-2xl  border border-[rgba(15,15,15,0.15)] items-center gap-1.5 ">
      <div>
        <img className="h-44 w-40 object-cover rounded-xl" src={image} alt="" />
      </div>

      <div className="col-span-2 ">
        <div className="flex gap-2">
          <button className="py-[5px] px-3 rounded-[99px] bg-[rgba(9,152,47,0.10)] text-[#09982F] text-[12px] font-medium">
            Available
          </button>
          <button className="py-[5px] px-2.5 rounded-[99px] bg-[rgba(23,106,229,0.10)] text-[#176AE5] text-[12px] font-medium">
            {experience}+ Years Experience
          </button>
        </div>

        <div>
          <h2 className="text-[#0F0F0F] text-xl md:text-2xl font-extrabold mt-2 mb-1">
            {name}
          </h2>
          <p className="text-[rgba(15,15,15,0.60)] text-lg font-medium">
            {speciality}
          </p>
        </div>

        <div className="text-[rgba(15,15,15,0.70)] flex items-center gap-2 mt-1 mb-2 md:mb-4">
          <FaRegRegistered className="w-5 h-5" />
          <p className="font-medium ">License No: {licenseNumber}</p>
        </div>

        <Link to={`/lawyerDetails/${licenseNumber}`}>
          <button className="py-1.5 px-3.5 rounded-[99px] border border-[rgba(23,106,229,0.20)] text-[#176AE5] font-bold w-full hover:bg-[#176AE5] hover:text-white cursor-pointer">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LawyerCard;
