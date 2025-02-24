import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper components
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination"; // Pagination styles
import { Pagination, Autoplay } from "swiper/modules";

import heroImage from '../../../assets/heroImage.jpg'
import image2 from '../../../assets/image2.JPG'
import image3 from '../../../assets/image3.JPG'
import image4 from '../../../assets/image4.JPG'

const Hero = () => {
  const images = [heroImage, image2, image3, image4];

  return (
    <div className="min-h-screen">
      <section className="relative h-screen flex items-center justify-center text-white">
        {/* Swiper Image Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide every 3s
          pagination={{ clickable: true }}
          className="absolute inset-0 w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">GYABS FOOTWEAR</h1>
          <p className="text-xl md:text-2xl mb-8">Happy Feet and More...</p>
          
          {/* ✅ Proper Button for "Shop Now" */}
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all shadow-lg">
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Hero;
