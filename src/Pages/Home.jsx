import React from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";
import AllLawyers from "../Components/AllLawyers";
import Counting from "../Components/Counting";

const Home = () => {
  const allData = useLoaderData();

  return (
    <div className=" px-[2%] md:px-[5%] space-y-20 mt-3 min-h-[100vh]
">
      <Banner></Banner>
      <AllLawyers allData={allData}></AllLawyers>
      <Counting></Counting>
    </div>
  );
};

export default Home;
