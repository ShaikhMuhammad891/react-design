import React from "react";
import {
  ArrowBack,
  ArrowForward,
  Eclips,
  Line,
  Smartpath,
} from "../assets/Logos";
import "./Services.css";

const Trust = () => {
  return (
    <>
      <div className=" relative">
        <div className=" absolute left-[105px] top-[-185px] z-[-1]">
          <Eclips />
        </div>
        <div className=" ml-[105px]">
          <div className="xl:flex mt-[149px] gap-[96px]">
            <div className=" text-area max-w-[535px] ">
              <Line />
              <p className=" text-[35px] text-[#1A202C] leading-[55px] font-inter font-[400] mt-[20px]">
                Leading companies trust us{" "}
                <span className=" font-[700]">
                  <br />
                  to develop software
                </span>
              </p>
              <p className=" text-[18px] leading-[36px] font-inter font-[400] text-[#718096] mt-[30px]">
                We <span className=" grad-text">add development capacity</span>{" "}
                to tech teams. Our value isn’t limited to building teams but is
                equally distributed across the project lifecycle. We are a
                custom software development company that guarantees the
                successful delivery of your project.
              </p>

              <div className=" flex gap-[15px] mt-[51px]">
                <p className=" text-[#57007B] text-[16px] font-inter font-[500] leading-[25px]">
                  See more Informations
                </p>
                <ArrowForward color="#57007B" />
              </div>
            </div>
            <div className=" video-section relative sm:mt-4">
              {/* <img
                src="/images/video-image.png"
                alt="video"
                className=" w-[601px]"
              />
              <img
                src="./images/play-button.png"
                alt="play"
                className=" absolute lg:left-[27%] xl:left-[44%] lg:top-[43%]"
              /> */}
              <img src="images/about.png" alt="" />
            </div>
          </div>
        </div>
        <div className=" mt-[201px] ml-[105px] w-[412px] ">
          <Line />
          <p className=" lg:text-[35px] md:text-[30px] lg:leading-[55px] md:leading-[45px] font-inter font-[400] text-[#1A202C] mt-[20px]">
            Meet the People
            <span className=" font-[700]">
              <br />
              We are Working With
            </span>
          </p>
        </div>
        <div className=" flex gap-[22px] justify-end mr-[81px] mb-[32px]">
          <div className=" py-[15.5px] px-[15px] border-[2px] border-[#57007B] rounded-full">
            <ArrowBack />
          </div>
          <div className=" md:py-[15.5px] md:px-[15px] bg-[#57007B]  rounded-full">
            <ArrowForward color="white" />
          </div>
        </div>

        <div className=" absolute right-[553px] bottom-[-65px]">
          <Eclips />
        </div>
      </div>
      <div className=" example bg-[#F7F7FA]  relative xl:flex xl:gap-x-[54px] items-center py-[60px] border border-y-[#E7DAED] xl:overflow-x-scroll grid md:grid-rows-2 md:grid-flow-col md:px-[20px] ">
        <img src="/images/smartpath.png" alt="" />
        <img src="/images/logo5.png" alt="" />
        <img src="/images/Logo-6.png" alt="" />
        <img src="/images/Logo-7.png" alt="" />
        <img src="/images/logo8.png" alt="" />
        <img src="/images/logo9.png" alt="" />
      </div>
    </>
  );
};

export default Trust;
