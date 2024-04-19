import React, { useState } from "react";
import { HeaderLogo } from "../assets/Logos";
import Button from "../components/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "../App.css";
import { Hidden } from "@mui/material";
const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <>
      <header
        className={`header px-[25px] bg-[#FFFFFF]  md:flex justify-between items-center ${
          !showNav ? "flex" : ""
        }`}
      >
        <div className="logo lg:py-[10px] md:py-[8px]">
          <HeaderLogo />
        </div>

        {/* toggle button */}
        <button
          onClick={() => setShowNav(!showNav)}
          className={`${
            showNav ? "absolute right-6 top-5 md:hidden" : " md:hidden"
          }`}
        >
          {!showNav ? <MenuIcon /> : <CloseIcon />}
        </button>

        <div
          className={`${
            showNav ? "block" : " center bg-white hidden md:block "
          }`}
        >
          <ul className=" xl: md:flex lg:space-x-[48.2px] md:space-x-4">
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
        <div className={`contact ${showNav ? " block" : " hidden md:block "}`}>
          <Button />
        </div>
      </header>
    </>
  );
};

export default Header;
