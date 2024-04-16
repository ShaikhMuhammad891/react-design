import React from "react";
import { Line } from "../assets/Logos";

const Approach = () => {
  return (
    <>
      <div className="container mx-auto bg-[#F7F7FA] border-y border-[#E7DAED] mt-[119px]">
        <div className=" mt-[71px]">
          <div className=" flex justify-center">
            <Line />
          </div>
          <p className=" text-[35px] font-inter font-[400] text-center leading-[55px] mt-[20px] text-[#1A202C]">
            Our design and
            <span className=" font-[700]">
              <br /> development approach
            </span>
          </p>
        </div>

        {/* map the data */}
        <div className=" ml-[102px] grid grid-rows-3 grid-flow-col gap-[25px] mt-[80px] max-w-[1233px] mb-[98px]">
          {data.map((e, i) => {
            return (
              <>
                <div className=" w-[604px] flex border border-[#E7DAED] pt-[59px] pl-[34px] bg-[#FAFAFA] pb-[78px] ">
                  <div
                    style={{ background: e.bg }}
                    className={` w-[59px] h-[56px] px-[10px] py-[10px] rounded-lg`}
                  >
                    <img src={e.logo} alt="" className=" w-[35px] h-[35px]" />
                  </div>
                  <div className=" max-w-[453px] ml-[25px]">
                    <p className=" font-inter font-[600] text-[2opx] leading-[27.5px] text-[#1A202C]">
                      {e.title}
                    </p>
                    <p className=" font-[400] font-inter text-[14px] leading-[22.68px] text-[#4A5568] mt-[10px]">
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

export default Approach;

const data = [
  {
    logo: "/images/rocket.png",
    bg: " linear-gradient(225deg, #29272E 0%, #27272E 100%)",
    title: "UX Driven Engineering",
    description:
      " Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    logo: "/images/code.png",
    bg: "linear-gradient(225deg, #68DBF2 0.01%, #509CF5 100%)",
    title: "Developing Shared Understanding",
    description:
      " Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    logo: "/images/heart.png",
    title: "Proven Experience and Expertise",
    bg: "linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)",
    description:
      " Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    logo: "/images/shield.png",
    title: "Security & Intellectual Property (IP)",
    bg: "linear-gradient(225deg, #67E9F1 0%, #24E795 100%)    ",
    description:
      " Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    logo: "/images/success.png",
    title: "Code Reviews",
    bg: "linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)    ",
    description:
      " Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
  {
    logo: "/images/lock.png",
    title: "Quality Assurance & Testing",
    bg: " linear-gradient(225deg, #F76680 0%, #57007B 100%)   ",
    description:
      " Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
  },
];
