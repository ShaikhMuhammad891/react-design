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

        <div className=" sm:hidden xl:max-w-[1040px] w-full  mx-auto mt-[88px]  lg:grid lg:grid-rows-1 grid-flow-col xl:gap-[71px] lg:gap-[31px] lg:max-w-[750px] ">
          {data.map((e, i) => {
            return (
              <>
                <div>
                  <div className=" xl:max-w-[299px] xl:pt-[22px] xl:pb-[26px] xl:pl-[22px] xl:pr-[26px] border border-[#E7DAED] rounded-[9px] lg:max-w-[230px] lg:pt-[16px] lg:pl-[16px] pb-[19px] pr-[20px]">
                    <div className=" flex gap-[10px]">
                      <p className=" text-color font-inter font-[700] text-[18px] leading-[21.78px] text-[#1A202C] tracking-tighter">
                        {e.number}
                      </p>
                      <p className=" font-inter xl:text-[18px] font-[700] leading-[21.78px] tracking-tighter lg:text-[14px]">
                        {e.title}
                      </p>
                    </div>
                    <p className=" mt-[15px] tracking-tighter xl:text-[14px] lg:text-[12px] font-inter font-[400] leading-[20px] text-[#718096] max-w-[215px]">
                      {e.description}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className=" xl:max-w-[1230px] xl:ml-[170px] mt-[20px] lg:max-w-[1000px] hidden xl:block">
          <img src="/images/trophy.png" alt="" />
        </div>

        <div className=" sm:hidden lg:grid xl:max-w-[1040px] w-full  mx-auto xl:mt-[88px] lg:mt-[24px] grid grid-rows-1 grid-flow-col xl:gap-[71px] lg:gap-[31px] lg:max-w-[750px] xl:ml-[235px]  ">
          {data2.map((e, i) => {
            return (
              <>
                <div>
                  <div className=" xl:max-w-[299px] xl:pt-[22px] xl:pb-[26px] xl:pl-[22px] xl:pr-[26px] border border-[#E7DAED] rounded-[9px] lg:max-w-[230px] lg:pt-[16px] lg:pl-[16px] pb-[19px] pr-[20px]">
                    <div className=" flex gap-[10px]">
                      <p className=" text-color font-inter font-[700] text-[18px] leading-[21.78px] text-[#1A202C] tracking-tighter">
                        {e.number}
                      </p>
                      <p className=" font-inter xl:text-[18px] font-[700] leading-[21.78px] tracking-tighter lg:text-[14px]">
                        {e.title}
                      </p>
                    </div>
                    <p className=" mt-[15px] tracking-tighter xl:text-[14px] lg:text-[12px] font-inter font-[400] leading-[20px] text-[#718096] max-w-[215px]">
                      {e.description}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className=" lg:hidden grid grid-rows-3 grid-flow-col mx-auto max-w-[600px] gap-4">
          {dataAll.map((e, i) => {
            return (
              <>
                <div>
                  <div className=" xl:max-w-[299px] xl:pt-[22px] xl:pb-[26px] xl:pl-[22px] xl:pr-[26px] border border-[#E7DAED] rounded-[9px] lg:max-w-[230px] lg:pt-[16px] lg:pl-[12px] md:pt-[12px] md:pl-[12px] pb-[19px] pr-[20px] ">
                    <div className=" flex gap-[10px]">
                      <p className=" text-color font-inter font-[700] text-[18px] leading-[21.78px] text-[#1A202C] tracking-tighter">
                        {e.number}
                      </p>
                      <p className=" font-inter xl:text-[18px] font-[700] leading-[21.78px] tracking-tighter lg:text-[14px]">
                        {e.title}
                      </p>
                    </div>
                    <p className=" mt-[15px] tracking-tighter xl:text-[14px] lg:text-[12px] font-inter font-[400] leading-[20px] text-[#718096] max-w-[215px] md:mt-[10px]">
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

const dataAll = [
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
