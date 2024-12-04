// import React, { useContext } from "react";
// import bannerImg from "../../assets/banner.png";
// import { FaSearch } from "react-icons/fa";
// import { ThemeContext } from "../../context/ThemeContext";
// import { BsMoon, BsSun } from "react-icons/bs";
// import BasicToolTip from "../../components/BasicToolTip";
// import TooltipButton from "../../components/TooltipButton";
// import BgImg from "../../assets/hero.jpg";

// const Hero = () => {
//   const { isDarkMode, toggleTheme } = useContext(ThemeContext);

//   return (
//     <section
//       className={`relative h-screen bg-cover bg-center text-black`}
//       style={{ backgroundImage: `url(${BgImg})` }}
//     >
// {/* Main content */}
// <div className="relative pt-18 sm:pt-30 md:pt-40 px-4 text-center md:w-1/2 mx-auto space-y-8 flex flex-col justify-center h-full">
//   <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-snug">
//     Make your interior more minimalistic & modern
//   </h1>
//   <p className="text-lg sm:text-xl md:text-2xl lg:w-2/3 mx-auto">
//     Turn your room with KENWUD into a lot more minimalist and modern with ease and speed
//   </p>
// </div>

//       {/* Overlay with small bottom blur effect */}
//       <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>

// {/* Tooltip buttons */}
// <div className="hidden xl:block absolute bottom-40 left-24">
//   <TooltipButton position="bottom" />
// </div>
// <div className="hidden xl:block absolute bottom-52 left-96">
//   <TooltipButton position="bottom" />
// </div>
// <div className="hidden xl:block absolute bottom-24 right-[820px]">
//   <TooltipButton position="bottom" />
// </div>

// {/* Dark and Light Mode toggle */}
// <div className="absolute bottom-16 right-16 z-40">
//   <button
//     onClick={toggleTheme}
//     className="focus:outline-none font-bold text-lg bg-black text-white p-4 md:p-5 rounded-full"
//   >
//     {isDarkMode ? <BsSun className="text-yellow-300" /> : <BsMoon />}
//   </button>
// </div>
//     </section>
//   );
// };

// export default Hero;

import React, { useState, useEffect, useRef, useContext } from "react";
import bannerImg from "../../assets/banner.png";
import { FaSearch } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { BsMoon, BsSun } from "react-icons/bs";
import BasicToolTip from "../../components/BasicToolTip";
import TooltipButton from "../../components/TooltipButton";
import BgImg from "../../assets/hero.jpg";

const Hero = () => {
  // State to track the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  // Ref to store the carousel container and individual slides
  const carouselRef = useRef(null);
  const slideRefs = useRef([]);

  // Array of slide images and content
  const slides = [
    {
      id: 1,
      image:
        "https://png.pngtree.com/thumb_back/fh260/background/20230713/pngtree-empty-living-room-mockup-furniture-and-interior-design-with-white-wall-image_3868759.jpg",
      alt: "Slide 1",
      bgColor: "bg-blue-600",
    },
    {
      id: 2,
      image:
        "https://img.freepik.com/premium-photo/white-sofa-pristine-white-wall_961875-85528.jpg",
      alt: "Slide 2",
      bgColor: "bg-green-600",
    },
    {
      id: 3,
      image:
        "https://img.freepik.com/premium-vector/simple-living-room-interior-with-gray-sofa-pillows-plaid_755228-2455.jpg",
      alt: "Slide 3",
      bgColor: "bg-red-600",
    },
    {
      id: 4,
      image:
        "https://img.freepik.com/premium-photo/bright-cozy-modern-living-room-interior-have-sofa-lamp-with-white-wall_974729-1630.jpg",
      alt: "Slide 4",
      bgColor: "bg-purple-600",
    },
    {
      id: 5,
      image:
        "https://img.freepik.com/premium-photo/living-room-with-white-couch-lamp_951949-226.jpg",
    },
  ];

  // Change slide every 3 seconds (3000ms)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length); // Loop through the slides
    }, 3000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    if (carouselRef.current) {
      // Ensure the container width is set to the total width of all slides
      const slideWidth = slideRefs.current[0]?.offsetWidth;
      if (slideWidth) {
        carouselRef.current.style.transform = `translateX(-${
          currentSlide * slideWidth
        }px)`;
      }
    }
  }, [currentSlide, slides.length]);

  return (
    <div className="relative w-full h-screen bg-gray-800">
      {/* Container for Hero Section */}
      <div className="absolute inset-0 flex items-center justify-center  bg-opacity-50 z-10">
        {/* Main content */}
        <div className="relative pt-18 sm:pt-30 md:pt-30 px-4 text-center md:w-1/2 mx-auto space-y-8 flex flex-col justify-center h-full ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-snug">
            Make your interior more minimalistic & modern
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:w-2/3 mx-auto">
            Turn your room with KENWUD into a lot more minimalist and modern
            with ease and speed
          </p>
        </div>
      </div>

      {/* Tooltip buttons */}
      <div className="hidden xl:block absolute bottom-40 left-24 z-20">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-52 left-96 z-20">
        <TooltipButton position="bottom" />
      </div>
      <div className="hidden xl:block absolute bottom-24 right-[820px] z-20">
        <TooltipButton position="bottom" />
      </div>

      {/* Dark and Light Mode toggle */}
      <div className="absolute bottom-16 right-16 z-40">
        <button
          onClick={toggleTheme}
          className="focus:outline-none font-bold text-lg bg-black text-white p-4 md:p-5 rounded-full"
        >
          {isDarkMode ? <BsSun className="text-yellow-300" /> : <BsMoon />}
        </button>
      </div>

      {/* Carousel Container */}
      <div className="overflow-hidden w-full h-full relative">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ display: "flex" }}
        >
          {/* Slide items */}
          {slides.map((slide, index) => (
            <div
              ref={(el) => (slideRefs.current[index] = el)}
              key={slide.id}
              className="min-w-full h-full relative"
              style={{ backgroundColor: slide.bgColor }}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className=" object-center w-full  h-screen bg-cover bg-center "
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
