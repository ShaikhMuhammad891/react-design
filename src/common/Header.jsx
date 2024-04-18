import React from "react";
import { HeaderLogo } from "../assets/Logos";
import Button from "../components/Button";
import "../App.css";
const Header = () => {
  return (
    <>
      <header className=" header px-[25px] bg-[#FFFFFF]  flex justify-between items-center">
        <div className="logo lg:py-[10px] md:py-[8px]">
          <HeaderLogo />
        </div>
        <div className=" center bg-white">
          <ul className=" xl: flex lg:space-x-[48.2px] md:space-x-4">
            <li className=" text-[#4A5568] font-[500] lg:text-[16px] md:text-[12px] lg:leading-[25px] md:leading-[20px]">
              About Us
            </li>
            <li className=" text-[#4A5568] font-[500] lg:text-[16px] md:text-[12px] lg:leading-[25px] md:leading-[20px]">
              Services
            </li>
            <li className=" text-[#4A5568] font-[500] lg:text-[16px] md:text-[12px] lg:leading-[25px] md:leading-[20px]">
              Case Studies
            </li>
            <li className=" text-[#4A5568] font-[500] lg:text-[16px] md:text-[12px] lg:leading-[25px] md:leading-[20px]">
              Blog
            </li>
            <li className=" text-[#4A5568] font-[500] lg:text-[16px] md:text-[12px] lg:leading-[25px] md:leading-[20px]">
              How It Works
            </li>
            <li className=" text-[#4A5568] font-[500] lg:text-[16px] md:text-[12px] lg:leading-[25px] md:leading-[20px]">
              Hire
            </li>
          </ul>
        </div>
        <div className=" contatct">
          <Button />
        </div>
      </header>
    </>
  );
};

export default Header;
