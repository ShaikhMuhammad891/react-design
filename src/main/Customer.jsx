import React from "react";
import {
  ArrowBack,
  ArrowForward,
  Line,
  QuoteEnd,
  QuoteStart,
} from "../assets/Logos";

const Customer = () => {
  return (
    <>
      <div className=" max-w-[1280px] relative">
        <div className=" flex justify-between absolute min-w-[1280px] h-fit inset-0 my-auto">
          <div>
            <ArrowBack />
          </div>
          <div>
            <ArrowForward color="red" />
          </div>
        </div>
        <div className=" mt-[124px] flex justify-center">
          <Line />
        </div>
        <p className=" mt-[20px] text-[#1A202C] text-[35px] leading-[55px] font-inter font-[400] text-center">
          Why cutomers love
          <span className=" font-[700]">
            <br />
            working with us
          </span>
        </p>

        <div className=" mt-[63px]  max-w-[727px] mx-auto relative">
          <div className=" absolute top-1">
            <QuoteStart />
          </div>

          <p className=" text-center text-[#718096] text-[18px] leading-[36px]  font-[400] font-inter max-w-[535px] mx-auto">
            Without any doubt I recommend Alcaline Solutions as one of the best
            web design and digital marketing agencies. One of the best agencies
            I’ve came across so far. Wouldn’t be hesitated to introduce their
            work to someone else.
          </p>
          <div className=" absolute  right-0 bottom-1">
            <QuoteEnd />
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
