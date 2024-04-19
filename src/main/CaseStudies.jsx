import React from "react";
import { ArrowForward, Line, ReadMore } from "../assets/Logos";
import "./Services.css";

const CaseStudies = () => {
  return (
    <>
      <div className=" border-y border-[#E7DAED] mt-2 md:pt-[89px] pt-[44px] bg-[#f7f7fa] md:pb-[88px] pb-[44px]">
        <div className="">
          <div className=" flex justify-center">
            <Line />
          </div>
          <p className=" text-[#1A202C] lg:text-[35px] text-[25px] lg:leading-[55px] md:leading-[45px] font-[400] font-inter text-center mt-[20px]">
            Our recent
            <span className=" font-[700]">
              <br />
              Case studies
            </span>
          </p>
        </div>

        <div className=" max-w-[1232px] mx-auto lg:flex lg:mt-[81px] md:mt-[61px] mt-[40px] bg-[#F1F2FF] border rounded-[15px]">
          <div className=" md:mx-auto flex justify-center">
            <img
              src="/images/theme-one.png"
              alt=""
              className=" sm:max-w-[601px] max-w-[375px]"
            />
          </div>
          <div className=" pt-[66px] px-[51px] md:max-w-[540px] md:ml-[25px] inset-0">
            <p className=" md:text-[28px] text-[20px] text-[#2D3748] font-inter font-[600] leading-[38.3px]">
              Website Design for SCFC Canada
            </p>
            <p className=" text-[14px] text-[#4A5568] font-inter font-[400] leading-[22.68px] max-w-[529px] mt-[30px]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
            <div className=" flex justify-end items-center gap-2 md:mt-[60px] mb-2">
              <p className=" text-color text-[14px] font-inter font-[600] leading-[14px]">
                Read more
              </p>
              <div className=" mt-[3px]">
                {/* <ArrowForward  color="#F76680" /> */}
                <ReadMore />
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-[1232px] mx-auto lg:flex lg:mt-[81px] md:mt-[61px] bg-[#F1F2FF] border rounded-[15px]">
          <div className=" md:mx-auto flex justify-center">
            <img src="/images/theme-two.png" alt="" className="w-[601px]" />
          </div>
          <div className=" pt-[66px] px-[51px] md:max-w-[540px] md:ml-[25px] inset-0">
            <p className=" md:text-[28px] text-[20px] text-[#2D3748] font-inter font-[600] leading-[38.3px]">
              Website Design for SCFC Canada
            </p>
            <p className=" text-[14px] text-[#4A5568] font-inter font-[400] leading-[22.68px] max-w-[529px] mt-[30px]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
            <div className=" flex justify-end items-center gap-2 mt-[60px] mb-2">
              <p className=" text-color text-[14px] font-inter font-[600] leading-[14px]">
                Read more
              </p>
              <div className=" mt-[3px]">
                <ReadMore />
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-[1232px] mx-auto lg:flex lg:mt-[81px] md:mt-[61px] bg-[#F1F2FF] border rounded-[15px]">
          <div className=" md:mx-auto flex justify-center">
            <img
              src="/images/theme-three.png"
              alt=""
              className=" sm:max-w-[601px] max-w-[375px]"
            />
          </div>
          <div className=" pt-[66px] px-[51px] md:max-w-[540px] md:ml-[25px] inset-0">
            <p className=" md:text-[28px] text-[20px] text-[#2D3748] font-inter font-[600] leading-[38.3px]">
              Website Design for SCFC Canada
            </p>
            <p className=" text-[14px] text-[#4A5568] font-inter font-[400] leading-[22.68px] max-w-[529px] mt-[30px]">
              Born out of a vision, a single-minded objective that puts service
              before anything else, Swift Clearance and Forwarding Corp. surging
              forth to deliver the best services in the shipping and logistics
              scenario. Its meteoric rise stems out of a solid foundation. The
              management boasts of over 20 years of rich and varied experience
              in the shipping and freight forwarding industry.
            </p>
            <div className=" flex justify-end items-center gap-2 lg:mt-[60px] md:mt-[20px] mb-2">
              <p className=" text-color text-[14px] font-inter font-[600] leading-[14px]">
                Read more
              </p>
              <div className=" mt-[3px]">
                <ReadMore />
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-end items-center gap-2 mt-[60px] xl:w-[1240px] mx-auto lg:max-w-[920px] md:max-w-[700px]">
          <p className=" text-color font-inter text-[20px] font-[600] leading-[27.3px]">
            Read more
          </p>
          <div className=" mt-[3px]">
            <ReadMore />
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseStudies;
