import React from "react";
import { Line } from "../assets/Logos";
import "./Services.css"

const TechStack = () => {
  return (
    <>
      <div>
        <div className=" mt-[80px]">
          <div className=" flex justify-center">
            <Line />
          </div>
          <p className=" mt-[20px] text-[#1A202C] text-[35px] leading-[55px] font-inter font-[400] text-center">
            Our <span className=" font-[700]"> <br /> Tech Stack</span>
          </p>
          <ul className=" flex justify-center mt-[38px] gap-x-[60px]">
            <l className = " text-[18px] font-inter font-[600] leading-[30px] text-color"> Backend </l>
            <l className = " text-[18px] font-inter font-[400] leading-[30px] text-[#1A202C] ">Frontend</l>
            <l className = " text-[18px] font-inter font-[400] leading-[30px] text-[#1A202C] ">Database</l>
            <l className = " text-[18px] font-inter font-[400] leading-[30px] text-[#1A202C] ">CMS</l>
            <l className = " text-[18px] font-inter font-[400] leading-[30px] text-[#1A202C] ">CloudTesting</l>
            <l className = " text-[18px] font-inter font-[400] leading-[30px] text-[#1A202C] ">DevOps</l>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TechStack;
