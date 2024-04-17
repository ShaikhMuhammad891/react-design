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
          <p className=" text-[35px] font-inter font-[400] text-center leading-[55px] mt-[20px] text-[#1A202C]">
            Featured
            <span className=" font-[700]">
              <br /> Resources
            </span>
          </p>
        </div>

        <div className=" flex max-w-[1440px] mx-auto w-full overflow-x-auto gap-[60px] mt-[66px] overflow-x-hidden">
          {data.map((e, i) => {
            return (
              <>
                <div className="min-w-[254px]">
                  <div>
                    <img src={e.image} alt="" />
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
          className=" max-w-[1230px] w-full  mt-[90px] mx-auto rounded-[15px] py-[88px]"
        >
          <div className=" max-w-[1062px] w-full mx-auto flex justify-between items-center relative">
            <div className=" absolute right-[60.54px] ">
              <img src="/images/beam.png" alt="" />
            </div>
            <p
              style={{
                color: "linear-gradient(225deg, #29272E 0%, #27272E 100%)",
              }}
              className=" max-w-[531px] font-inter text-[35px] font-[700] leading-[55px]"
            >
              Hire the best developers and designers around!
            </p>

            <div>
              <p
                style={{
                  background:
                    "linear-gradient(225deg, #FFC656 0%, #F16063 100%)",
                }}
                className=" px-[43px] py-[17.5px] font-inter font-[700] text-[#FAFAFA] tracking-tighter leading-[21.78px]"
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
