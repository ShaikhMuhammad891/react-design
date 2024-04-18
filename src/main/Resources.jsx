import React from "react";
import { Line, PurpleLogo } from "../assets/Logos";

const Resources = () => {
  return (
    <>
      <div className=" mt-[96px]">
        <div className=" mt-[93px]">
          <div className=" flex justify-center">
            <Line />
          </div>
          <p className=" lg:text-[35px] md:text-[25px]  font-inter font-[400] text-center lg:leading-[55px] md:leading-[45px] mt-[20px] text-[#1A202C]">
            Featured
            <span className=" font-[700]">
              <br /> Resources
            </span>
          </p>
        </div>

        <div className=" flex max-w-[1440px] mx-auto w-full overflow-x-auto  lg:gap-[60px] md:gap-[40px] lg:mt-[66px] md:mt-[46px]">
          {data.map((e, i) => {
            return (
              <>
                <div className="min-w-[254px]">
                  <div>
                    <img
                      src={e.image}
                      alt=""
                      className=" min-w-[254px] max-h-[175px]"
                    />
                  </div>
                  <p className=" text-[#2D3748] text-[16px] font-inter font-[500] leading-[25px] mt-[20px]">
                    {e.description}
                  </p>

                  <div className=" flex justify-end gap-[19px] items-center mt-[20px]">
                    <p className=" text-[#57007B] text-[16px] font-inter font-[500] leading-[25px]">
                      Read more
                    </p>
                    <div>
                      <PurpleLogo />
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div
          style={{
            background: "linear-gradient(225deg, #F1F1F5 0%, #E4ECF7 100%)",
          }}
          className=" max-w-[1230px] w-full  mt-[90px] mx-auto rounded-[15px] lg:py-[88px] md:py-[44px] md:px-4"
        >
          <div className=" max-w-[1062px] w-full mx-auto flex justify-between items-center relative">
            <div className=" absolute lg:right-[60.54px] md:right-[38px] ">
              <img src="/images/beam.png" alt="" className=" max-h-[150px]" />
            </div>
            <p
              style={{
                color: "linear-gradient(225deg, #29272E 0%, #27272E 100%)",
              }}
              className=" max-w-[531px] font-inter lg:text-[35px] md:text-[28px] font-[700] lg:leading-[55px] md:leading-[45px]"
            >
              Hire the best developers and designers around!
            </p>

            <div>
              <p
                style={{
                  background:
                    "linear-gradient(225deg, #FFC656 0%, #F16063 100%)",
                }}
                className=" lg:px-[43px] lg:py-[17.5px] md:px-[33px] md:py-[14.5px]  font-inter font-[700] md:text-[12px] text-[#FAFAFA] tracking-tighter lg:leading-[21.78px] md:leading-[15px]"
              >
                Hire Top Developers
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;

const data = [
  {
    image: "/images/rone.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rtwo.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rthree.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rfour.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rfive.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rone.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rtwo.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rtwo.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
  {
    image: "/images/rtwo.png",
    description:
      "How to Build a Scalable Application up to 1 Million Users on AWS",
  },
];
