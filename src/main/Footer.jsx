import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" mt-[133px] max-w-[1230px] mx-auto">
        <div className=" flex relative pb-[81px] border-b border-[#CBD5E0]">
          <div className=" max-w-[372px]">
            <div>
              <img src="/images/main-logo.png" alt="" />
            </div>
            <p className=" mt-[14px] text-[18px] text-[#718096] font-[400] font-inter leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <img src="/images/footer-left.png" alt="" className=" mt-[36px]" />
          </div>
          <div className=" ml-[78px] max-w-[133px] w-full">
            <p className=" font-inter font-[700] text-[18px] text-[#4A5568] leading-[21.78px] tracking-tighter">
              Links
            </p>
            <ul className=" mt-[19px]">
              <li className=" text-[#718096] font-inter font-[400] text-[16px] leading-[37.81px]">
                About Us
              </li>
              <li className=" text-[#718096] font-inter font-[400] text-[16px] leading-[37.81px]">
                Servives
              </li>
              <li className=" text-[#718096] font-inter font-[400] text-[16px] leading-[37.81px]">
                Case Studies
              </li>
              <li className=" text-[#718096] font-inter font-[400] text-[16px] leading-[37.81px]">
                How it works
              </li>
              <li className=" text-[#718096] font-inter font-[400] text-[16px] leading-[37.81px]">
                Blog
              </li>
              <li className=" text-[#718096] font-inter font-[400] text-[16px] leading-[37.81px]">
                Careers
              </li>
              <li className=" text-[#718096] font-inter font-[400] text-[16px] leading-[37.81px]">
                Areas We Serves
              </li>
            </ul>
          </div>
          <div className=" ml-[87px] max-w-[306px] w-full">
            <p className=" font-inter font-[700] text-[18px] text-[#4A5568] leading-[21.78px] tracking-tighter">
              Contact us
            </p>
            <p className=" mt-[24px] text-[18px] text-[#718096] font-[400] font-inter leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className=" mt-[20px] text-[18px] text-[#718096] font-[400] font-inter leading-[30px] ">
              +908 89097 890
            </p>
          </div>

          <div className=" flex  max-w-[184px] ml-[70px] items-end">
            {data.map((e, i) => {
              return (
                <>
                  <div className="">
                    <img src={e.logo} alt="" className=" " />
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <p className=" text-center text-[14px] leading-[10px] font-inter font-[400] text-[#4A5568] mt-[35px] pb-[42px] tracking-tighter">
          © 2023 Copyright by Agency Solutions. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;

const data = [
  {
    logo: "/images/fb.png",
  },
  {
    logo: "/images/insta.png",
  },
  {
    logo: "/images/twitter.png",
  },
  {
    logo: "/images/linkedin.png",
  },
];
