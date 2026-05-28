import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { FaLongArrowAltRight } from "react-icons/fa";

const Herosection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "OWN THE LOOK",
      maintext: "PRECIS_LUXE COMFORT IN EVERY MOVE.",
      subtext: "Premium hoodies and joggers designed for everyday lifestyle.",
      img: "/images/hoodle1.jpg",
    },
    {
      id: 2,
      title: "RUN THE LOOK",
      maintext: "Built for precision Made to stand out.",
      subtext: "Ties directly to your slogan, High energy, streetwear feel.",
      img: "/images/hoodie2.jpg",
    },
    {
      id: 3,
      title: "SET THE STANDARD",
      maintext: "Minimal design Maximum impact.",
      subtext: "Positions Precis Luxe as the brand others follow.",
      img: "/images/hoodie3.jpg",
    },
    {
      id: 4,
      title: "CRAFTED FOR PRECISION",
      maintext: "Every stitch, every cut, intentional.",
      subtext: "More premium, product-focused Works well on an About section.",
      img: "/images/hoodie4.jpg",
    },
    {
      id: 5,
      title: "NOT MADE TO FOLLOW",
      maintext: "Designed for the ones who lead.",
      subtext: "Edgy, rebellious tone Good for limited drops and campaigns.",
      img: "/images/hoodie5.jpg",
    },
  ];
  return (
    <div className="w-full h-screen ">
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        effect="fade"
        // pagination={{clickable: true}}
        autoplay={{ delay: 5000 }}
        transition={{ duration: 1000 }}
        loop={true}
        onSlideChange={(Swiper) => {
          setActiveIndex(Swiper.realIndex);
        }}
        className="h-full "
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="">
            <div
              className="relative w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/50"></div>

              <div className="contain relative z-10 flex items-center h-full ">
                <div className="text-white lg:w-[60%] ">
                  <motion.span
                    initial={{ opacity: 0, y: 80 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 1 }}
                    className="font-semibold border-b-3 pb-1  "
                  >
                    {slide.title}
                  </motion.span>
                  <motion.h1
                    initial={{ opacity: 0, y: 80 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 1.3 }}
                    className="text-4xl lg:text-7xl md:text-6xl font-bold uppercase mt-1 "
                  >
                    {slide.maintext}
                  </motion.h1>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ delay: 1.1 }}
                    className="py-3"
                  >
                    {slide.subtext}
                  </motion.h1>
                  <div className="flex gap-4">
                    <motion.button
                      initial={{ opacity: 0, y: 80 }}
                      animate={
                        activeIndex === index
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 80 }
                      }
                      transition={{ duration: 1.6 }}
                      className="bg-white text-black py-3 px-3 rounded text-sm font-semibold flex items-center justify-center"
                    >
                      SHOP HOODIES
                      <FaLongArrowAltRight size={22} className="ml-4" />
                    </motion.button>

                    <motion.button
                      initial={{ opacity: 0, y: 80 }}
                      animate={
                        activeIndex === index
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 80 }
                      }
                      transition={{ duration: 1.6 }}
                      className="border border-white py-3 px-3 rounded text-sm font-semibold flex items-center justify-center"
                    >
                      SHOP JOGGERS
                      <FaLongArrowAltRight size={22} className="ml-4"  />
                    </motion.button>

                    <button className="custom-prev absolute top-1/2 z-50 lg:-left-10 -left-4 md:-left-8 w-10 h-10  rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center duration-200 hover:bg-white/5 ">
                      <MdOutlineKeyboardDoubleArrowLeft />
                    </button>
                    <button className="custom-next absolute top-1/2 lg:-right-10 -right-4 md:-right-8 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center duration-200 hover:bg-white/5  ">
                      <MdOutlineKeyboardDoubleArrowRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Herosection;
