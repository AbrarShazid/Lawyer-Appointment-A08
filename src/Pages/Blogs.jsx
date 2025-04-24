import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router";

const Blogs = () => {
  const { reactQuestions } = useLoaderData();

  return (
    <div className="mulish  px-[2%] md:px-[5%]">
       <Helmet>
                <meta charSet="utf-8" />
                <title>Law.BD | Blogs</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className="text-center space-y-2 mb-[40px]">
        <h1 className="text-2xl lg:text-4xl font-bold">Blogs</h1>
        <p className="opacity-70">
          Let's explore some basic question that make you a good developer
        </p>
      </div>

      {reactQuestions.map((question, idx) => {
        return (
          <div key={idx}>
            <div className="rounded-sm p-3 space-y-2 bg-base-100 border border-base-300 mb-3  bg-gray-200">
              <div className="font-semibold text-xl border-b border-dashed border-base-400 pb-3">
                {question.question}
              </div>

              <div className=" text-lg opacity-80">
                <button className="text-blue-500 font-bold">Ans:</button>{" "}
                {question.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Blogs;
