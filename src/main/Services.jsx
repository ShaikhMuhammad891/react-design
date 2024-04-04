import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Services = () => {
  return (
    <>
      <div className=" bg-[#F9F9FF] border border-[#E7DAED] h-[602.34px]">
        <p className=" text-[#1A202C] text-[35px] font-[700] leading-[55px] mt-[45px] font-inter text-center">Services we offer</p>
        <div>
        <Carousel>
                <div className=" w-[200px] h-[200px]">
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
      </div>
    </>
  );
};

export default Services;
