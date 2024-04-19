import React from "react";
// import { ComputerGuy, Eclips } from "../assets/Logos";
import StartedButton from "../components/StartedButton";
import { Eclips } from "../assets/Logos";

const TopFront = () => {
  return (
    <>
      <div className=" relative">
        <div className=" md:mt-[69px] mt-[20px] ml-[60px] sm:flex">
          <div className=" max-w-[531px] md:my-[103px] my-[70px]">
            <div>
              <p className=" lg:text-[45px] md:text-[30px] sm:text-[25px] text-[20px] font-[300] lg:leading-[71px] md:leading-[51px] leading-[30px] font-inter">
                Great <span className=" text-[#ae387e]">software</span> is
              </p>
              <p className=" sm:font-[800] font-[600] lg:text-[53px] md:text-[33px] text-[25px] lg:leading-[71px] md:leading-[40px] font-inter">
                built by great
                <span className="text-[#ae387e]"> teams</span>
              </p>
            </div>
            <div className=" md:mt-[28px] mt-[15px]">
              <p className=" font-inter md:font-[400] font-[300] lg:text-[18px] text-[12px] md:text-[14px] lg:leading-[36px] md:leading-[26px] text-[#4A5568]">
                We help build and manage a team of world-class developers to
                bring your vision to life
              </p>
            </div>
            <div className=" lg:mt-[75px] md:mt-8">
              <StartedButton />
            </div>
          </div>
          <div>
            <img src="/images/pc-guy.png" alt="pc-guy" />
          </div>
        </div>
        <div className=" mt-[51px] sm:ml-[483px] mb:ml-[50px] absolute bottom-[-35.5px] ">
          <Eclips />
        </div>
      </div>
    </>
  );
};

export default TopFront;
