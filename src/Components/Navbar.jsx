import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100  mulish px-[1%] md:px-[5%]">
      <div className="navbar-start flex items-center gap-2">
        <div className="dropdown ">
          <div tabIndex={0} className=" lg:hidden  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-1 w-32 p-2 shadow text-[rgba(15,15,15,0.70)] text-lg font-medium"
          >
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#0ea106] font-bold" : ""
              }
              to={"/"}
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#0ea106] font-bold" : ""
              }
              to={"/bookings"}
            >
              My-Bookings
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#0ea106] font-bold" : ""
              }
              to={"/blogs"}
            >
              Blogs
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-[#0ea106] font-bold" : ""
              }
              to={"/contact"}
            >
              Contact Us
            </NavLink>
          </ul>
        </div>

        <div className="flex  gap-1 md:gap-3 items-center">
          <img
            className="h-6 w-6 md:h-8 md:w-8 lg:h-12 lg:w-12"
            src={logo}
            alt=""
          />

          <a className=" font-extrabold text-2xl md:text-[26px] lg:text-3xl plus-jakarta-sans text-[rgba(15,15,15,0.80)]">
            Law.BD
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-10 text-[rgba(15,15,15,0.70)] text-lg font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[rgba(15,15,15,1)] font-bold border-b-2" : ""
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[rgba(15,15,15,1)] font-bold border-b-2" : ""
            }
            to={"/bookings"}
          >
            My-Bookings
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[rgba(15,15,15,1)] font-bold border-b-2" : ""
            }
            to={"/blogs"}
          >
            Blogs
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-[rgba(15,15,15,1)] font-bold border-b-2" : ""
            }
            to={"/contact"}
          >
            Contact Us
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="bg-[#0ea106] rounded-[99px] py-2 px-3  md:py-3 md:px-6 text-[#FFF] font-medium md:font-bold md:text-xl">
          Contact Now
        </button>
      </div>
    </div>
  );
};

export default Navbar;
