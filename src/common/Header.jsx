import React from "react";
import { HeaderLogo } from "../assets/Logos";
import Button from "../components/Button";
import "../App.css"
const Header = () => {
  return (
    <>
      <header className=" header px-[25px] bg-[#FFFFFF] h-[79px] flex justify-between items-center">
        <div className="logo py-[10px]">
          <HeaderLogo />
        </div>
        <div className=" center bg-white">
          <ul className=" flex space-x-[48.2px]">
            <li className=" text-[#4A5568] font-[500] text-[16px] leading-[25px]">About Us</li>
            <li className=" text-[#4A5568] font-[500] text-[16px] leading-[25px]">Services</li>
            <li className=" text-[#4A5568] font-[500] text-[16px] leading-[25px]">
              Case Studies
            </li>
            <li className=" text-[#4A5568] font-[500] text-[16px] leading-[25px]">Blog</li>
            <li className=" text-[#4A5568] font-[500] text-[16px] leading-[25px]">
              How It Works
            </li>
            <li className=" text-[#4A5568] font-[500] text-[16px]">Hire</li>
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
