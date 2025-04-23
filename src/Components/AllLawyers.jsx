import React, { useEffect, useState } from "react";
import LawyerCard from "./LawyerCard";

const AllLawyers = ({ allData }) => {
  const { lawyers } = allData;

  const [lawyerShow, setLawyerShow] = useState([]);
  const [allShow, setAllShow] = useState(false);

  const handleClick = () => {
    setAllShow((prev) => !prev);
  };

  useEffect(() => {
    if (allShow) {
      setLawyerShow(lawyers);
    } else {
      const sixLawyer = lawyers.slice(0, 6);
      setLawyerShow(sixLawyer);
    }
  }, [allShow]);

  return (
    <div className="mulish ">
      <div className="text-center space-y-4">
        <h2 className="text-[#0F0F0F] text-4xl font-extrabold">
          Our Best Lawyers
        </h2>
        <p className="text-[rgba(15,15,15,0.80)]">
          Our platform connects you with verified, experienced Lawyers across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      <div className="mt-8 grid lg:grid-cols-2 gap-12 ">
        {lawyerShow.map((lawyer, idx) => (
          <LawyerCard key={idx} lawyer={lawyer}></LawyerCard>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={handleClick}
          className=" py-3 px-6 rounded-[99px] bg-[#0EA106] text-white text-xl font-bold "
        >
          {allShow ? "Show Less Lawyer" : "Show All Lawyer"}
        </button>
      </div>
    </div>
  );
};

export default AllLawyers;
