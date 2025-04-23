import React from "react";
import { useLoaderData, useParams } from "react-router";
import { useNavigate } from "react-router";
import { FaRegRegistered } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";

import icon from "../assets/Frame.png";
import { addLawyer } from "../Utils";
import LawyerError from "../Pages/LawyerError";

const LawyerDetails = () => {
  let navigate = useNavigate();

  const { license } = useParams();
  const { lawyers } = useLoaderData();

  const details = lawyers.find((lawyer) => lawyer.licenseNumber === license);

  if (!details) {
    return <LawyerError></LawyerError>;
  }

  const {
    description,
    name,
    experience,
    image,
    speciality,
    licenseNumber,
    availability,
    fee,
  } = details;

  const handleClick = () => {
    const nav = addLawyer(licenseNumber, name);
    if (nav) {
      navigate("/bookings");
    }
  };

  return (
    <div className="px-[2%] md:px-[5%] mulish mt-3 space-y-7">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="p-3 md:p-10 lg:p-16 rounded-2xl bg-[rgba(15,15,15,0.05)] border border-[rgba(15,15,15,0.15)] text-center space-y-4">
        <h1 className="text-[#141414] text-3xl font-extrabold">
          Lawyer’s Profile Details
        </h1>

        <p className="text-[rgba(20,20,20,0.70)] font-medium">{description}</p>
      </div>

      {/* 2nd block  */}
      <div className="p-4 md:p-7 rounded-2xl border border-[rgba(20,20,20,0.15)] flex flex-col  md:grid  md:grid-cols-4 gap-6 items-center">
        <div>
          <img
            className="h-72 w-full md:h-64 md:w-64 rounded-2xl object-cover"
            src={image}
            alt=""
          />
        </div>

        <div className="md:col-span-3 space-y-4">
          <button className="py-1.5 px-3.5 rounded-[99px] bg-[rgba(23,106,229,0.10)] text-[#176AE5] font-medium text-center">
            {experience}+ Years Experience
          </button>
          <h1 className="text-[#141414] text-3xl font-extrabold ">{name}</h1>

          <div className="text-[rgb(20,20,20)] font-medium flex items-center gap-10">
            <p className="opacity-60">{speciality}</p>

            <div className="opacity-70 flex items-center gap-2">
              <FaRegRegistered />
              <p>License No: {licenseNumber}</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <p className="text-[rgba(20,20,20,0.70)] font-bold">Availability</p>

            {availability.map((available, idx) => (
              <button
                className="plus-jakarta-sans py-1 px-2 rounded-[99px] border border-[rgba(255,160,0,0.20)] bg-[rgba(255,160,0,0.10)] text-[#FFA000] font-medium text-[14px]"
                key={idx}
              >
                {available}
              </button>
            ))}
          </div>
          <div>
            <p className="text-[rgba(20,20,20,0.70)] font-bold">
              Consultation Fee:{" "}
              <span className="text-[#0EA106] font-extrabold">{`Taka : ${fee}`}</span>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* 3rd block  */}

      <div className="rounded-2xl border border-[rgba(20,20,20,0.15)] p-3.5 md:p-7  text-center">
        <h2 className="text-[#141414] text-2xl font-bold border-b border-[rgba(20,20,20,0.20)] border-dashed pb-4">
          Book an Appointment
        </h2>

        <div className="flex justify-between items-center my-3">
          <p className="text-[141414] font-bold text-lg">Availability</p>
          <button className="py-1.5 px-3 rounded-[99px] border border-[rgba(9,152,47,0.20)] bg-[rgba(9,152,47,0.10)] text-[#09982F] text-sm font-medium">
            Lawyer Available Today
          </button>
        </div>
        <hr className="text-[rgba(20,20,20,0.10)]" />

        <button className="flex items-center gap-2 py-2 px-4  rounded-md md:rounded-[99px] bg-[rgba(255,160,0,0.10)] text-[#FFA000] font-medium  mt-4 mb-7">
          <img className="object-cover h-5 w-5" src={icon} alt="" />
          Due to high patient volume, we are currently accepting appointments
          for today only. We appreciate your understanding and cooperation.{" "}
        </button>

        <button
          onClick={handleClick}
          className="py-3 px-4.5  rounded-[99px] bg-[#0EA106] text-white text-xl font-bold w-full"
        >
          Book Appointment Now
        </button>
      </div>
    </div>
  );
};

export default LawyerDetails;
