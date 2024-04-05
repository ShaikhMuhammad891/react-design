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
    <div className="bg-[#F9F9FF] border border-[#E7DAED] relative">
      <p className="text-[#1A202C] text-[35px] font-[700] leading-[55px] mt-[45px] font-inter text-center">
        Services we offer
      </p>
      <Slider {...settings}>
        {data.map((element, index) => (
          <div key={index} className={` border border-red-400 px-[16px] py-[38.5px] gap-x-[39px] mb-[45px]`}>
            <div className="slide-content">
              <img
                src={element.img}
                alt="img"
                className="border border-[#F76680] rounded-full p-2 logo mt-6"
              />
              <div>
                <p
                  className={` text-[20px] font-inter font-[600] leading-[27.3px] ${
                    index === 0 ? "text-red-500" : ""
                  } `}
                >
                  {element.title}
                </p>
                <p className=" mt-[20px] font-inter font-[400] text-[14px] leading-[22.68px] text-[#4A5568]">
                  {element.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
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
  // Add more data as needed
];
