"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import { useState } from "react";

const Slider = ({ images = [] }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#6B7280",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={image}
              width={400}
              height={500}
              className="mySwiper2 w-[400px] h-[500px] mx-auto object-cover"
              alt="thumbnail"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper flex gap-4 mt-4"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx}>
            <Image
              src={image}
              width={100}
              height={100}
              className="w-[100px] h-[100px] mx-auto border object-cover"
              alt="product image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Slider;
