// import React, { useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const Services = () => {
//   // const sliderRef = useRef(null);

//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     focusOnSelect: true,
//   };

//   // const handleSlideClick = (index) => {
//   //   if (sliderRef.current) {
//   //     sliderRef.current.slickGoTo(index);
//   //   }
//   // };
//   return (
//     <>
//       <div className=" bg-[#F9F9FF] border border-[#E7DAED] h-[602.34px] relative">
//         <p className=" text-[#1A202C] text-[35px] font-[700] leading-[55px] mt-[45px] font-inter text-center">
//           Services we offer
//         </p>
//         <div>
//           <Slider  {...settings}>
//             {data.map((element, index) => (
//               <>
//                 <div>
//                   <div>
//                     <img src={element.img} alt="" />
//                   </div>
//                   <div>
//                     <p>{element.title}</p>
//                     <p>{element.description}</p>
//                   </div>
//                 </div>
//               </>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Services;

// const data = [
//   {
//     title: "Mobile App Development",
//     img: "/images/mobile-logo.png",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "Web Development",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "Software Testing",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "SaaS",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
//   {
//     title: "IT Services",
//     description:
//       "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
//   },
// ];
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Services.css"; // Import your custom CSS file for Services component
import { Eclips } from "../assets/Logos";

const Services = () => {
  const [selectedSlideIndex, setSelectedSlideIndex] = useState(null); // State to track the index of the selected slide

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  return (
    <div className="bg-[#F9F9FF] border-y border-[#E7DAED] lg:pb-[150px] md:pb-[100px] pb-[50px] relative">
      <p className="text-[#1A202C] lg:text-[35px] md:text-[28px] text-[18px] md:font-[700] font-[500] mt-[20px] lg:leading-[55px] md:leading-[40px] lg:mt-[45px] md:mt-[35px] font-inter text-center">
        Services we offer
      </p>
      {/* <Slider {...settings}> */}
      <div className=" example flex lg:gap-[39px] md:gap-[25px] overflow-x-scroll max-w-[1440px] w-full lg:mt-[63px] md:mt-[43px] mt-[20px] gap-4 relative">
        {data.map((element, index) => (
          <div
            key={index + "services"}
            className={` border border-red-400 p-2 lg:min-w-[333px] md:min-w-[233px] min-w-[200px] w-full rounded-[7px] lg:pl-[16px] md:pl-[12px] lg:py-[38.5px] md:py-[20px]`}
          >
            <div className="slide-content">
              <img
                src={element.img}
                alt="img"
                className="border border-[#F76680] rounded-full md:p-2 p-1  logo "
              />
              <div>
                <p
                  className={` lg:text-[20px] md:text-[16px] text-[12px] mt-2 font-inter font-[600] lg:leading-[27.3px] md:leading-[21px] lg:mt-[15px] md:mt-[10px] ${
                    index === 0 ? "text-red-500" : ""
                  } `}
                >
                  {element.title}
                </p>
                <p className=" lg:mt-[20px]  mt-2 text-[10px] font-[300] md:mt-[15px] font-inter md:font-[400] lg:text-[14px] leading-3 md:lg:leading-[22.68px] md:leading-4 text-[#4A5568] max-w-[301px]">
                  {element.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* </Slider> */}
    </div>
  );
};

export default Services;

const data = [
  {
    title: "Mobile App Development",
    img: "/images/mobile-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Web Design & Development",
    img: "/images/web-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Software Testing Service",
    img: "/images/dashboard.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Mobile App Development",
    img: "/images/mobile-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Mobile App Development",
    img: "/images/mobile-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Mobile App Development",
    img: "/images/mobile-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Mobile App Development",
    img: "/images/mobile-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  {
    title: "Mobile App Development",
    img: "/images/mobile-logo.png",
    description:
      "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
  },
  // Add more data as needed
];
