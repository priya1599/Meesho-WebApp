import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import bannerImageTwo from "../assets/carousalImages/bannerImgTwo.jpg";
import bannerimgOne from '../assets/carousalImages/bannerimgOne.jpg'
import bannerimgthree from '../assets/carousalImages/bannerimgthree.jpg'
import bannerimgfour from '../assets/carousalImages/bannerimgfour.jpg'
import bannerimgfive from '../assets/carousalImages/bannerimgfive.jpg'
function Carousel() {
  return (
    <div className="xl:h-[350px] h-[200px] mt-10 ">
      <Swiper
        loop={true}
        spaceBetween={0}
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
          delay: 4500,
        }}
        className="h-[100%]"
      >
        <SwiperSlide>
          <img src={bannerImageTwo} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={bannerimgfour} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide className="bg-white">
          <img  src={bannerimgOne} alt="Carousel POR" />
           </SwiperSlide>
        <SwiperSlide>
          <img  src={bannerimgthree} alt="Carousel POR" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={bannerimgfive} alt="Carousel POR" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Carousel
