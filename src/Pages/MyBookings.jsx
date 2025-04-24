import React, { useState } from "react";
import { getLawyer, removeLawyer } from "../Utils";
import { NavLink, useLoaderData } from "react-router";
import { Toaster } from "react-hot-toast";

import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Helmet } from "react-helmet";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  }
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const MyBookings = () => {
  const { lawyers } = useLoaderData();
  const [appointment, setAppointment] = useState(getLawyer());

  const details = lawyers.filter((lawyer) =>
    appointment.includes(lawyer.licenseNumber)
  );

  const handleCancel = (licenseNumber, name) => {
    removeLawyer(licenseNumber, name);
    setAppointment(getLawyer());
  };

  return (
    <div className="px-[2%] md:px-[5%] plus-jakarta-sans border-t border-[rgba(15,15,15,0.15)] pt-4">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Law.BD | Bookings</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <Toaster position="top-right" reverseOrder={false} />

      {/* chart  */}

      {details.length > 0 && (
        <div className="p-2 md:p-6 lg:p-8 xl:p-10 rounded-2xl border border-[rgba(88,82,82,0.15)]">
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={details}
              margin={{
                top: 20,
                right: 20,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="name"
                angle={-45}
                textAnchor="end"
                interval={0}
                tick={{ fontSize: 10 }}
                tickFormatter={(name) => name.split(" ")[0]} // Split name and show the first part
              />
              <YAxis angle={-45} tick={{ fontSize: 10 }} />
              <Tooltip />

              <Bar dataKey="fee" fill="#8884d8" shape={<TriangleBar />}>
                {details.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {/* content  */}

      {details.length > 0 ? (
        <div className="space-y-12 mt-[40px] md:mt-[80px]">
          <div>
            <h1 className="text-[#0F0F0F] text-center font-extrabold  text-2xl md:text-3xl lg:text-4xl">
              My Today Appointments
            </h1>
            <p className="mt-4 text-[#0F0F0F] text-center opacity-80">
              Our platform connects you with verified, experienced Lawyers
              across various specialties — all at your convenience.
            </p>
          </div>

          {details.map((singleLawyer, idx) => {
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl  border border-[rgba(20,20,20,0.15)]"
              >
                <h3 className="text-[#141414] text-xl font-bold">
                  {singleLawyer.name}
                </h3>
                <div className="md:flex justify-between border-b border-dashed border-[rgba(15,15,15,0.20)] text-[rgba(20,20,20,0.60)] md:text-lg font-medium pb-3 mt-2 mb-4">
                  <p>{singleLawyer.speciality}</p>
                  <p>Appointment Fee : {singleLawyer.fee} Taka</p>
                </div>
                <button
                  onClick={() =>
                    handleCancel(singleLawyer.licenseNumber, singleLawyer.name)
                  }
                  className="w-full py-2 px-3.5 rounded-[99px]  border border-[#F00] text-[#F00] text-lg font-semibold"
                >
                  Cancel Appointment
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-[#0F0F0F] text-center font-extrabold  text-2xl md:text-3xl lg:text-4xl">
            No Appointments Taken for Today
          </h1>

          <NavLink to={"/"}>
            <button className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">Go Home</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
