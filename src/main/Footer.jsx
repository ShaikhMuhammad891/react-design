import React from "react";

const Footer = () => {
  return (
    <>
      <div className=" lg:mt-[133px] md:mt-[100px] mt-[70px] max-w-[1230px] mx-auto">
        <div className=" lg:flex relative lg:pb-[81px] pb-[40px] border-b border-[#CBD5E0] grid grid-cols-2 gap-6">
          <div className=" max-w-[372px] lg:inset-0 md:ml-4">
            <div>
              <img src="/images/main-logo.png" alt="" />
            </div>
            <p className=" md:mt-[14px] mt-[10px] md:text-[18px] sm:text-[16px] text-[#718096] md:font-[400] font-[300] font-inter leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.{" "}
            </p>
            <img src="/images/footer-left.png" alt="" className=" mt-[36px]" />
          </div>
          <div className=" sm:ml-[78px] max-w-[133px] w-full">
            <p className=" font-inter md:font-[700] font-[500] text-[18px] text-[#4A5568] leading-[21.78px] tracking-tighter">
              Links
            </p>
            <ul className=" mt-[19px]">
              <li className=" text-[#718096] font-inter md:font-[400] font-[300] text-[16px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25.81px]">
                About Us
              </li>
              <li className=" text-[#718096] font-inter md:font-[400] font-[300] text-[16px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25.81px]">
                Servives
              </li>
              <li className=" text-[#718096] font-inter md:font-[400] font-[300] text-[16px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25.81px]">
                Case Studies
              </li>
              <li className=" text-[#718096] font-inter md:font-[400] font-[300] text-[16px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25.81px]">
                How it works
              </li>
              <li className=" text-[#718096] font-inter md:font-[400] font-[300] text-[16px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25.81px]">
                Blog
              </li>
              <li className=" text-[#718096] font-inter md:font-[400] font-[300] text-[16px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25.81px]">
                Careers
              </li>
              <li className=" text-[#718096] font-inter md:font-[400] font-[300] text-[16px] lg:leading-[37.81px] md:leading-[30.81px] sm:leading-[25.81px]">
                Areas We Serves
              </li>
            </ul>
          </div>
          <div className=" lg:ml-[87px] max-w-[306px] md:ml-4 w-full">
            <p className=" font-inter md:font-[700] font-[500] text-[18px] text-[#4A5568] leading-[21.78px] tracking-tighter">
              Contact us
            </p>
            <p className=" mt-[24px] md:text-[18px] sm:text-[16px] text-[#718096] md:font-[400] font-[300] font-inter leading-[30px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p className=" mt-[20px] md:text-[18px] sm:text-[16px] text-[#718096] md:font-[400] font-[300] font-inter leading-[30px] ">
              +908 89097 890
            </p>
          </div>

          <div className=" flex  max-w-[184px] sm:ml-[70px] items-end">
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
