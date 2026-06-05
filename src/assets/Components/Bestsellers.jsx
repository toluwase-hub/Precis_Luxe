import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { FaLongArrowAltRight } from "react-icons/fa";
const Bestsellers = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoodies = [
    {
      id: 1,
      title: "HOODIES",
      subtext: "OWN THE LOOK",
      shop: "SHOP NOW",
      img: "/images/hoodle1.jpg",
    },
    {
      id: 2,
      title: "HOODIES",
      subtext: "RUN THE LOOK",
      shop: "SHOP NOW",
      img: "/images/hoodie2.jpg",
    },
    {
      id: 3,
      title: "HOODIES",
      subtext: "SET THE STANDARD",
      shop: "SHOP NOW",
      img: "/images/hoodie3.jpg",
    },
  ];

  const joggers = [
    {
      id: 4,
      title: "JOGGERS",
      subtext: "CRAFTED FOR PRECISION",
      shop: "SHOP NOW",
      img: "/images/hoodie4.jpg",
    },
    {
      id: 5,
      title: "JOGGERS",
      subtext: "NOT MADE TO FOLLOW",
      shop: "SHOP NOW",
      img: "/images/hoodie5.jpg",
    },
    {
      id: 6,
      title: "JOGGERS",
      subtext: "CRAFTED FOR PRECISION",
      shop: "SHOP NOW",
      img: "/images/hoodie1.jpg",
    },
  ];

  const shirts = [
    {
      id: 7,
      title: "SHIRT",
      subtext: "RUN THE LOOK",
      shop: "SHOP NOW",
      img: "/images/shirt1.jpg",
    },
    {
      id: 8,
      title: "SHIRT",
      subtext: "NOT MADE TO FOLLOW",
      shop: "SHOP NOW",
      img: "/images/hoodie4.jpg",
    },
    {
      id: 9,
      title: "SHIRT",
      subtext: "CRAFTED FOR PRECISION",
      shop: "SHOP NOW",
      img: "/images/hoodie3.jpg",
    },
  ];

  const newDrops = [
    {
      id: 10,
      title: "NEW DROPS",
      subtext: "SET THE STANDARD",
      shop: "SHOP NOW",
      img: "/images/hoodie4.jpg",
    },
    {
      id: 11,
      title: "NEW DROPS",
      subtext: "CRAFTED FOR PRECISION",
      shop: "SHOP NOW",
      img: "/images/hoodie1.jpg",
    },
    {
      id: 12,
      title: "NEW DROPS",
      subtext: "NOT MADE TO FOLLOW",
      shop: "SHOP NOW",
      img: "/images/hoodie2.jpg",
    },
  ];

  return (
    <div id="Shop" className="contain py-8 scroll-mt-24">
        <div className="flex">
            <h1 className="font-bold text-lg">BEST SELLERS</h1> <span className="bg-red-500 text-white rounded-full items-center justify-center  flex w-10 h-5 text-sm">Hot</span>

        </div>
        
    <div className=" my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        
      <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        // navigation={{
        //   nextEl: ".custom-next",
        //   prevEl: ".custom-prev",
        // }}
        effect="fade"
        // pagination={{clickable: true}}
        autoplay={{ delay: 4000 }}
        transition={{ duration: 1000 }}
        loop={true}
        onSlideChange={(Swiper) => {
          setActiveIndex(Swiper.realIndex);
        }}
        className="w-full transition-all duration-300 rounded group hover:-translate-y-1  "
      >
        {hoodies.map((hoodie, index) => (
          <SwiperSlide key={index} className="">
            <div
              className="relative bg-cover bg-center pb-25 pt-8 "
              style={{ backgroundImage: `url(${hoodie.img})` }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70"></div>

              <div className="contain relative z-10 flex ">
                <div className="text-white flex flex-col items-start gap-3">
                  <motion.h1
                   initial={{ opacity: 0, y: 80 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 1 }}
                  className="font-semibold">{hoodie.title}</motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ delay: 1 }}
                  className="text-sm">{hoodie.subtext}</motion.p>
                  <motion.button 
                   initial={{ opacity: 0, y: 80 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 70 }
                    }
                    transition={{ duration: 1.6 }}
                  className="flex text-sm font-extralight pt-4">{hoodie.shop}  <FaLongArrowAltRight size={22} className="ml-4" /></motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        // navigation={{
        //   nextEl: ".custom-next",
        //   prevEl: ".custom-prev",
        // }}
        effect="fade"
        // pagination={{clickable: true}}
        autoplay={{ delay: 4000 }}
        transition={{ duration: 1000 }}
        loop={true}
        onSlideChange={(Swiper) => {
          setActiveIndex(Swiper.realIndex);
        }}
        className="w-full transition-all duration-300 rounded group hover:-translate-y-1  "
      >
        {joggers.map((jogger, index) => (
          <SwiperSlide key={index} className="">
            <div
              className="relative bg-cover bg-center pb-25 pt-8 "
              style={{ backgroundImage: `url(${jogger.img})` }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70"></div>

              <div className="contain relative z-10 flex ">
                <div className="text-white flex flex-col items-start gap-3">
                  <motion.h1
                   initial={{ opacity: 0, y: 80 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 1 }}
                  className="font-semibold">{jogger.title}</motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ delay: 1 }}
                  className="text-sm">{jogger.subtext}</motion.p>
                  <motion.button 
                   initial={{ opacity: 0, y: 80 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 70 }
                    }
                    transition={{ duration: 1.6 }}
                  className="flex text-sm font-extralight pt-4">{jogger.shop}  <FaLongArrowAltRight size={22} className="ml-4" /></motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        // navigation={{
        //   nextEl: ".custom-next",
        //   prevEl: ".custom-prev",
        // }}
        effect="fade"
        // pagination={{clickable: true}}
        autoplay={{ delay: 4000 }}
        transition={{ duration: 1000 }}
        loop={true}
        onSlideChange={(Swiper) => {
          setActiveIndex(Swiper.realIndex);
        }}
        className="w-full transition-all duration-300 rounded group hover:-translate-y-1 "
      >
        {shirts.map((shirt, index) => (
          <SwiperSlide key={index} className="">
            <div
              className="relative bg-cover bg-center pb-25 pt-8 "
              style={{ backgroundImage: `url(${shirt.img})` }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 "></div>

              <div className="contain relative z-10 flex ">
                <div className="text-white flex flex-col items-start gap-3">
                  <motion.h1
                   initial={{ opacity: 0, y: 80 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 1 }}
                  className="font-semibold">{shirt.title}</motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ delay: 1 }}
                  className="text-sm">{shirt.subtext}</motion.p>
                  <motion.button 
                   initial={{ opacity: 0, y: 80 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 70 }
                    }
                    transition={{ duration: 1.6 }}
                  className="flex text-sm font-extralight pt-4">{shirt.shop}  <FaLongArrowAltRight size={22} className="ml-4" /></motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

       <Swiper
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        // navigation={{
        //   nextEl: ".custom-next",
        //   prevEl: ".custom-prev",
        // }}
        effect="fade"
        // pagination={{clickable: true}}
        autoplay={{ delay: 4000 }}
        transition={{ duration: 1000 }}
        loop={true}
        onSlideChange={(Swiper) => {
          setActiveIndex(Swiper.realIndex);
        }}
        className="w-full transition-all duration-300 rounded group hover:-translate-y-1  "
      >
        {newDrops.map((newDrop, index) => (
          <SwiperSlide key={index} className="">
            <div
              className="relative bg-cover bg-center pb-25 pt-8 "
              style={{ backgroundImage: `url(${newDrop.img})` }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70"></div>

              <div className="contain relative z-10 flex ">
                <div className="text-white flex flex-col items-start gap-3">
                  <motion.h1
                   initial={{ opacity: 0, y: 80 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ duration: 1 }}
                  className="font-semibold">{newDrop.title}</motion.h1>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 80 }
                    }
                    transition={{ delay: 1 }}
                  className="text-sm">{newDrop.subtext}</motion.p>
                  <motion.button 
                   initial={{ opacity: 0, y: 80 }}
                    animate={
                      activeIndex === index
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 70 }
                    }
                    transition={{ duration: 1.6 }}
                  className="flex text-sm font-extralight pt-4">{newDrop.shop}  <FaLongArrowAltRight size={22} className="ml-4" /></motion.button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Bestsellers;
