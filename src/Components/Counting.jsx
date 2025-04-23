import React from "react";
import firstImg from "../assets/success-doctor.png";
import secImg from "../assets/success-review.png";
import thirdImg from "../assets/success-patients.png";
import fourthImg from "../assets/success-staffs.png";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CountingCard = ({ img, end, label, duration }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      ref={ref}
      className="rounded-2xl bg-[rgba(15,15,15,0.05)] border border-[rgba(15,15,15,0.15)] px-5 py-4 md:px-10 md:py-8"
    >
      <img className="h-16 w-16 mb-1" src={img} alt="" />
      {
        <CountUp start={0} end={end} duration={duration}>
          {({ countUpRef }) => (
            <div className="flex text-[#0F0F0F] text-[40px] font-extrabold items-center">
              <span ref={countUpRef} />
              <p>+</p>
            </div>
          )}
        </CountUp>
      }
      <p className="text-[rgba(15,15,15,0.60)] text-xl font-medium">{label}</p>
    </div>
  );
};

const Counting = () => {
  const data = [
    { img: firstImg, end: 199, label: "Total Lawyer", duration: 3 },
    { img: secImg, end: 467, label: "Total Reviews", duration: 5 },
    { img: thirdImg, end: 1900, label: "Cases Initiated", duration: 7 },
    { img: fourthImg, end: 300, label: "Total Stuffs", duration: 4 },
  ];

  return (
    <div className="mulish">
      <div className="text-center space-y-4">
        <h2 className="text-[#0F0F0F] text-4xl font-extrabold">
          We Provide Best Law Services
        </h2>
        <p className="text-[#0F0F0F] opacity-80">
          Our platform connects you with verified, experienced Lawyers across
          various specialities — all at your convenience.
        </p>
      </div>

      <div className="mt-4 md:mt-8 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {data.map((item, i) => (
          <CountingCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Counting;
