import React from "react";
// import { ComputerGuy, Eclips } from "../assets/Logos";
import StartedButton from "../components/StartedButton";
import { Eclips } from "../assets/Logos";

const TopFront = () => {
  return (
    <>
      <div className=" relative">
        <div className=" mt-[69px] ml-[104px] flex">
          <div className=" w-[531px] my-[103px]">
            <div>
              <p className=" text-[45px] font-[300] leading-[71px] font-inter">
                Great <span className=" text-[#ae387e]">software</span> is
              </p>
              <p className=" font-[800] text-[53px] leading-[71px] font-inter">
                built by great
                <span className="text-[#ae387e]"> teams</span>
              </p>
            </div>
            <div className=" mt-[28px]">
              <p className=" font-inter font-[400] text-[18px] leading-[36px] text-[#4A5568]">
                We help build and manage a team of world-class developers to
                bring your vision to life
              </p>
            </div>
            <div className=" mt-[75px]">
              <StartedButton />
            </div>
          </div>
          <div>
            <img src="/images/pc-guy.png" alt="pc-guy" />
          </div>
        </div>
        <div className=" mt-[51px] ml-[483px] absolute bottom-[-35.5px]">
          <Eclips />
        </div>
      </div>
    </>
  );
};

export default TopFront;
