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
      <section className="w-screen h-screen relative overflow-hidden">

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
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-70"></div>

              {/* Overlay Content on Image */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#F5DEB3] drop-shadow-lg">
                  GYABS FOOTWEAR
                </h1>
                <p className="text-xl md:text-2xl mb-12 text-[#F5DEB3] drop-shadow-md pb-20">
                  Happy Feet and More...
                </p>

                {/* Glowing Shop Now Button */}
                <a href="#shop" className="inline-block mt-20">
                  <button className="bg-yellow-400 hover:bg-yellow-600 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-xl transform hover:scale-105 active:scale-95 animate-pulse">
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
