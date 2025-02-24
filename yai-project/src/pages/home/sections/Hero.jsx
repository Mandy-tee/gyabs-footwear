import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import heroImage from '../../../assets/heroImage.jpg';
import image2 from '../../../assets/image2.JPG';
import image3 from '../../../assets/image3.JPG';
import image4 from '../../../assets/image4.JPG';

const Hero = () => {
  const images = [heroImage, image2, image3, image4];

  return (
    <div className="w-full">
      <section className="relative w-full h-screen">

        {/* Swiper Image Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="relative w-full h-[85vh] md:h-[80vh]">
              <img src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black opacity-30"></div>

              {/* Overlay Content on Image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#F5DEB3] text-center px-4">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#F5DEB3]">GYABS FOOTWEAR</h1>
                <p className="text-xl md:text-2xl mb-8 text-[#F5DEB3]">Happy Feet and More...</p>

                {/* ✅ Button Over Images */}
                <a href="#shop" className="inline-block">
                  <button className="bg-gray-900 hover:bg-gray-700 text-[#F5DEB3] px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-lg transform hover:scale-110 active:scale-95 animate-pulse">
                    Shop Now
                  </button>

                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </section>
    </div>
  );
};

export default Hero;
