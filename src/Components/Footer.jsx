import React from "react";
import logo from "../assets/logo-footer.png";
import { NavLink } from "react-router";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedin } from "react-icons/bi";
import { ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <div className="bg-[#0F0F0F] mulish  flex flex-col items-center py-[50px] md:py-[80px] mt-[40px] md:mt-[80px]">
      <div className="flex  gap-4 items-center mb-7">
        <img className="h-12 w-12" src={logo} alt="" />
        <h2 className="text-white plus-jakarta-sans text-3xl font-extrabold ">
          Law.BD
        </h2>
      </div>

      <div className="w-[90%] border-b border-dashed border-[rgba(255,255,255,0.20)] mb-7">
        <div className=" pb-7 text-[rgba(255,255,255,0.70)] text-lg font-medium flex flex-col md:flex-row items-center  justify-center gap-3 md:gap-10 py-2">
          <NavLink
            className={({ isActive }) =>
              isActive ? " font-bold border-b-2" : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? " font-bold border-b-2" : ""
            }
            to={"/bookings"}
          >
            My-Bookings
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? " font-bold border-b-2" : ""
            }
            to={"/blogs"}
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? " font-bold border-b-2" : ""
            }
            to={"/contact"}
          >
            Contact Us
          </NavLink>
        </div>
      </div>

      <div className="flex  gap-6 ">
        <a target="blank" href="https://www.facebook.com/AbrarShazid16/">
          <FaFacebook className="w-9 h-9  text-[#00B2FF] " />
        </a>

        <a target="blank" href="https://github.com/abrarshazid/">
          <FaXTwitter className="w-9 h-9 text-white" />
        </a>

        <a target="blank" href="https://www.linkedin.com/in/abrar-shazid/">
          <BiLogoLinkedin className="w-9 h-9  rounded-full p-1 bg-[#2489BE]" />
        </a>

        <a target="blank" href="https://www.youtube.com/@AbrarShazid">
          <ImYoutube className="w-9 h-9 p-[6px] rounded-full bg-[#B71C1C] text-white" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
