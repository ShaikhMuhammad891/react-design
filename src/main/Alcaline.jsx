import React from "react";
import { Line, LongLine, VerticleMini } from "../assets/Logos";
import "./Services.css";

const Alcline = () => {
  return (
    <>
      <div className=" mt-[91px] border-t border-[#E7DAED]">
        <div className=" mt-[93px]">
          <div className=" flex justify-center">
            <Line />
          </div>
          <p className=" text-[35px] font-inter font-[400] text-center leading-[55px] mt-[20px] text-[#1A202C]">
            How development
            <span className=" font-[700]">
              <br /> through Alcaline works
            </span>
          </p>
        </div>

        <div className=" max-w-[1040px] w-full  mx-auto mt-[88px] grid grid-rows-1 grid-flow-col gap-[71px]">
          {data.map((e, i) => {
            return (
              <>
                <div>
                  <div className=" max-w-[299px] pt-[22px] pb-[26px] pl-[22px] pr-[26px] border border-[#E7DAED] rounded-[9px]">
                    <div className=" flex gap-[10px]">
                      <p className=" text-color font-inter font-[700] text-[18px] leading-[21.78px] text-[#1A202C] tracking-tighter">
                        {e.number}
                      </p>
                      <p className=" font-inter text-[18px] font-[700] leading-[21.78px] tracking-tighter">
                        {e.title}
                      </p>
                    </div>
                    <p className=" mt-[15px] tracking-tighter text-[14px] font-inter font-[400] leading-[20px] text-[#718096] max-w-[215px]">
                      {e.description}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className=" max-w-[1230px] ml-[170px] mt-[20px]">
          <img src="/images/trophy.png" alt="" />
        </div>

        <div className=" max-w-[1040px] w-full  mt-[20px] grid grid-rows-1 grid-flow-col gap-[71px] ml-[265px] ">
          {data2.map((e, i) => {
            return (
              <>
                <div>
                  <div className=" max-w-[299px] pt-[22px] pb-[26px] pl-[22px] pr-[26px] border border-[#E7DAED] rounded-[9px]">
                    <div className=" flex gap-[10px]">
                      <p className=" text-color font-inter font-[700] text-[18px] leading-[21.78px] text-[#1A202C] tracking-tighter">
                        {e.number}
                      </p>
                      <p className=" font-inter text-[18px] font-[700] leading-[21.78px] tracking-tighter">
                        {e.title}
                      </p>
                    </div>
                    <p className=" mt-[15px] tracking-tighter text-[14px] font-inter font-[400] leading-[20px] text-[#718096] max-w-[215px]">
                      {e.description}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Alcline;

const data = [
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#1",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },

  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#3",
    title: "Tech architecture",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },

  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#5",
    title: "Code reviews",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
];

const data2 = [
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#2",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#4",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
  {
    color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
    number: "#6",
    title: "Assemble the right team",
    description:
      "We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do",
  },
];
