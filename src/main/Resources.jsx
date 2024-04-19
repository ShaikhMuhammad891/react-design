import React from "react";
import { Line, PurpleLogo } from "../assets/Logos";

const Resources = () => {
  return (
    <>
      <div className=" lg:mt-[96px]">
        <div className=" lg:mt-[93px] md:mt-[73px] mt-[53px]">
          <div className=" flex justify-center">
            <Line />
          </div>
          <p className=" lg:text-[35px] md:text-[28px] text-[25px]  font-inter font-[400] text-center lg:lg:leading-[55px] md:leading-[45px] leading-[35px] mt-[20px] text-[#1A202C]">
            Featured
            <span className=" font-[700]">
              <br /> Resources
            </span>
          </p>
        </div>

        <div className=" flex max-w-[1440px] mx-auto w-full overflow-x-auto  lg:gap-[60px] md:gap-[40px] lg:mt-[66px] md:mt-[46px] mt-[30px] gap-[30px]">
          {data.map((e, i) => {
            return (
              <>
                <div className="md:min-w-[254px] min-w-[200px]">
                  <div>
                    <img
                      src={e.image}
                      alt=""
                      className=" md:min-w-[254px] md:max-h-[175px] max-h-[137px] min-w-[200px]"
                    />
                  </div>
                  <p className=" text-[#2D3748] md:text-[16px] text-[12px] font-inter font-[500] lg:leading-[25px] md:leading-[22px] leading-[18px] mt-[20px]">
                    {e.description}
                  </p>

                  <div className=" flex justify-end md:gap-[19px] gap-[14px] items-center md:mt-[20px] mt-[15px] mr-2">
                    <p className=" text-[#57007B] md:text-[16px] text-[14px] font-inter font-[500] leading-[25px]">
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
          className=" max-w-[1230px] w-full  md:mt-[90px] mt-[70px] mx-auto rounded-[15px] lg:py-[88px]   py-[44px] px-4"
        >
          <div className=" max-w-[1062px] w-full mx-auto flex justify-between items-center relative">
            <div className=" absolute lg:right-[60.54px] md:right-[38px] right-5 ">
              <img
                src="/images/beam.png"
                alt=""
                className=" md:max-h-[150px] lg:max-h-max max-h-[110px]"
              />
            </div>
            <p
              style={{
                color: "linear-gradient(225deg, #29272E 0%, #27272E 100%)",
              }}
              className=" max-w-[531px] font-inter lg:text-[35px] md:text-[28px] text-[20px] font-[700] lg:leading-[55px] md:leading-[45px]"
            >
              Hire the best developers and designers around!
            </p>

            <div>
              <p
                style={{
                  background:
                    "linear-gradient(225deg, #FFC656 0%, #F16063 100%)",
                }}
                className=" lg:px-[43px] lg:py-[17.5px] md:px-[33px] md:py-[14.5px] px-3 py-2 text-[12px]  font-inter font-[700] md:text-[12px] text-[#FAFAFA] tracking-tighter lg:leading-[21.78px] md:leading-[15px]"
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
