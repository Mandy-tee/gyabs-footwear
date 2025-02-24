import React from "react";
import image4 from '../../../assets/image4.JPG'

const AboutInnovator = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center mb-12">
          Meet Fredrick Gyabeng, CEO of Gyabs Footwear
        </h2>

        {/* Content Grid - Image Left, Text Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 rounded-lg shadow-lg">
          
          {/* Image Section - Left Side */}
          <div className="flex justify-center md:justify-start">
            <img
              src={image4}
              alt="Fredrick Gyabeng"
              className="w-full h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Section - Right Side */}
          <div className="text-left">
            <p className="text-lg text-gray-700 mb-6">
              Fredrick is a creative entrepreneur who specializes in upcycling waste materials into 
              unique and functional footwear. He collects discarded leather bags, jeans, and other 
              clothing items from local markets and transforms them into stylish and eco-friendly shoes.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Uses waste leather bags and clothing items as primary materials</li>
              <li>Sources materials from local markets</li>
              <li>Creates handmade, upcycled footwear for sale</li>
              <li>Promotes sustainability and reduces waste through innovative design</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
