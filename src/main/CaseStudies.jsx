import React from "react";
import { ArrowForward, Line, ReadMore } from "../assets/Logos";
import "./Services.css";

const CaseStudies = () => {
  return (
    <>
      <div className=" border border-[#E7DAED] mt-2 pt-[89px]">
        <div className="">
          <div className=" flex justify-center">
            <Line />
          </div>
          <p className=" text-[#1A202C] text-[35px] leading-[55px] font-[400] font-inter text-center mt-[20px]">
            Our recent
            <span className=" font-[700]">
              <br />
              Case studies
            </span>
          </p>
        </div>

        <div className=" max-w-[1232px] mx-auto flex mt-[81px] bg-[#F1F2FF] border rounded-[15px]">
          <div>
            <img
              src="/images/theme-one.png"
              alt=""
              className=" max-w-[601px]"
            />
          </div>
          <div className=" pt-[66px] px-[51px] max-w-[540px] inset-0">
            <p className=" text-[28px] text-[#2D3748] font-inter font-[600] leading-[38.3px]">
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
            <div className=" flex justify-end items-center gap-2 mt-[60px]">
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

        <div className=" max-w-[1232px] mx-auto flex mt-[35px] bg-[#F0FFF7] border rounded-[15px]">
          <div>
            <img src="/images/theme-two.png" alt="" className="w-[601px]" />
          </div>
          <div className=" pt-[66px] px-[51px] max-w-[540px] inset-0">
            <p className=" text-[28px] text-[#2D3748] font-inter font-[600] leading-[38.3px]">
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
            <div className=" flex justify-end items-center gap-2 mt-[60px]">
              <p className=" text-color text-[14px] font-inter font-[600] leading-[14px]">
                Read more
              </p>
              <div className=" mt-[3px]">
                <ReadMore />
              </div>
            </div>
          </div>
        </div>

        <div className=" max-w-[1232px] mx-auto flex mt-[35px] bg-[#E7DAED] border rounded-[15px]">
          <div>
            <img
              src="/images/theme-three.png"
              alt=""
              className=" max-w-[601px]"
            />
          </div>
          <div className=" pt-[66px] px-[51px] max-w-[540px] inset-0">
            <p className=" text-[28px] text-[#2D3748] font-inter font-[600] leading-[38.3px]">
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
            <div className=" flex justify-end items-center gap-2 mt-[60px]">
              <p className=" text-color text-[14px] font-inter font-[600] leading-[14px]">
                Read more
              </p>
              <div className=" mt-[3px]">
                <ReadMore />
              </div>
            </div>
          </div>
        </div>

        <div className=" flex justify-end items-center gap-2 mt-[60px] w-[1240px] mx-auto">
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
