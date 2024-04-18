import React from "react";
import {
  ArrowBack,
  ArrowForward,
  Line,
  QuoteEnd,
  QuoteStart,
} from "../assets/Logos";

import "./Services.css";

const Customer = () => {
  return (
    <>
      <div className=" max-w-[1280px] relative mx-auto">
        <div className=" flex justify-between absolute inset-0 h-fit my-auto">
          <div>
            <ArrowBack />
          </div>
          <div>
            <ArrowForward color="red" />
          </div>
        </div>
        <div className=" lg:mt-[124px] md:mt-[80px] flex justify-center">
          <Line />
        </div>
        <p className=" mt-[20px] text-[#1A202C] lg:text-[35px] md:text-[28px] lg:leading-[55px] md:leading-[45px] font-inter font-[400] text-center">
          Why cutomers love
          <span className=" font-[700]">
            <br />
            working with us
          </span>
        </p>

        <div className=" lg:mt-[63px] md:mt-[45px]  lg:max-w-[727px] md:max-w-[650px] mx-auto relative">
          <div className=" absolute top-1">
            <QuoteStart />
          </div>

          <p className=" text-center text-[#718096] lg:text-[18px] md:text-[16px] lg:leading-[36px] md:leading-[26px]  font-[400] font-inter max-w-[535px] mx-auto">
            Without any doubt I recommend Alcaline Solutions as one of the best
            web design and digital marketing agencies. One of the best agencies
            I’ve came across so far. Wouldn’t be hesitated to introduce their
            work to someone else.
          </p>
          <div className=" absolute  right-0 bottom-1">
            <QuoteEnd />
          </div>
        </div>
        <div className=" flex justify-center items-center lg:gap-[76px] md:gap-[60px] mt-[70px] mb-[140px] overflow-x-scroll example">
          {data.map((e, i) => (
            <>
              <div
                key={i}
                className={`${
                  i === 2 ? " opacity-100 transform scale-110" : " opacity-60"
                }`}
              >
                <div className=" flex justify-center items-center">
                  <img src={e.img} alt="" className=" w-[85px] h-[85px] " />
                </div>
                <div className=" flex items-center justify-center lg:gap-[5.48px] md:gap-[2px] mt-[15px]">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={e.rating}
                      alt=""
                      className=" w-[20px] h-[20px]"
                    />
                  ))}
                </div>

                <p
                  className={` ${
                    i === 2
                      ? " text-[#57007B] mt-[15px] text-[18px] text-center font-inter font-[700] leading-[21.78px]"
                      : "  text-[16px] leading-[25px] font-inter font-[500] text-center text-[#A0AEC0] mt-[15px]"
                  }`}
                >
                  {e.name}
                </p>
                <p
                  className={`${
                    i === 2
                      ? " font-inter font-[400] text-black text-[12px] text-center"
                      : "font-inter font-[400] text-[11px] text-[#E2E8F0] text-center"
                  }`}
                >
                  {e.shop}
                </p>
              </div>
            </>
          ))}
        </div>
        <div className="  w-full mx-auto flex justify-center">
          <div className=" flex justify-between absolute max-w-[1063px] w-full mt-[-100px]">
            <div>
              <img src="/images/deco-up.png" alt="" />
            </div>
            <div>
              <img src="/images/deco-down.png" alt="" />
            </div>
          </div>
        </div>

        {/* <div className=" flex items-center justify-center">
          {data.map((e, i) => (
            <>
              <div key={i} className={``}>
                <p
                  className={`text-center text-[#718096] text-[18px] leading-[36px]  font-[400] font-inter max-w-[535px] mx-auto ${
                    i === 1 ? "" : " hidden"
                  }`}
                >
                  {e.feedback}
                </p>
                <div className=" flex justify-center items-center">
                  <img src={e.img} alt="pic" className="" />
                </div>
              </div>
            </>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Customer;

const data = [
  {
    feedback:
      "hey there Without any doubt I recommend Alcaline Solutions as one of the bestweb design and digital marketing agencies. One of the best agenciesI’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    img: "/images/feedback-mid.png",
    rating: "/images/star.png",
    name: "Rahat",
    shop: "Janet Cosmetics",
  },
  {
    feedback:
      "hey there Without any doubt I recommend Alcaline Solutions as one of the bestweb design and digital marketing agencies. One of the best agenciesI’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    img: "/images/feedback-mid.png",
    rating: "/images/star.png",
    name: "Rahat",
    shop: "Janet Cosmetics",
  },
  {
    feedback:
      "hey there Without any doubt I recommend Alcaline Solutions as one of the bestweb design and digital marketing agencies. One of the best agenciesI’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    img: "/images/feedback-mid.png",
    rating: "/images/star.png",
    name: "Rahat",
    shop: "Janet Cosmetics",
  },
  {
    feedback:
      "hey there Without any doubt I recommend Alcaline Solutions as one of the bestweb design and digital marketing agencies. One of the best agenciesI’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    img: "/images/feedback-mid.png",
    rating: "/images/star.png",
    name: "Rahat",
    shop: "Janet Cosmetics",
  },
  {
    feedback:
      "hey there Without any doubt I recommend Alcaline Solutions as one of the bestweb design and digital marketing agencies. One of the best agenciesI’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
    img: "/images/feedback-mid.png",
    rating: "/images/star.png",
    name: "Rahat",
    shop: "Janet Cosmetics",
  },
];
