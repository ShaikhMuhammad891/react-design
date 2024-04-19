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
          <p className=" lg:text-[35px] md:text-[28px] text-[25px] font-inter font-[400] text-center lg:leading-[55px] md:leading-[45px] leading-[35px] mt-[20px] text-[#1A202C]">
            Our design and
            <span className=" font-[700]">
              <br /> development approach
            </span>
          </p>
        </div>

        {/* map the data */}
        <div className="grid xl:grid-rows-3 grid-flow-col gap-[25px] lg:mt-[80px] md:mt-[70px] mt-[40px] xl:max-w-[1233px] mb-[98px] lg:grid-rows-6 lg:max-w-[610px] mx-auto md:grid-rows-6 md:max-w-[550px] grid-rows-6 sm:max-w-[450px] ">
          {data.map((e, i) => {
            return (
              <>
                <div className=" lg:w-[550px] flex border border-[#E7DAED] md:pt-[39px] md:pl-[14px] bg-[#FAFAFA] md:pb-[58px] px-3 py-3 ">
                  <div
                    style={{ background: e.bg }}
                    className={` w-[59px] h-[56px] px-[10px] py-[10px] rounded-lg`}
                  >
                    <img src={e.logo} alt="" className=" w-[35px] h-[35px]" />
                  </div>
                  <div className=" md:max-w-[453px] max-w-[300px] md:ml-[25px] ml-[15px]">
                    <p className=" font-inter font-[600] md:text-[20px] text-[15px] md:leading-[27.5px] leading-[20px] text-[#1A202C]">
                      {e.title}
                    </p>
                    <p className=" md:font-[400] font-[300] font-inter md:text-[14px] text-[12px] md:leading-[22.68px] leading-[15px] text-[#4A5568] mt-[10px]">
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
