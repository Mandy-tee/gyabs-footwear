import React from "react";
import image4 from "../../../assets/image4.JPG";

const AboutInnovator = () => {
  return (
    <section id="about" className="py-20 bg-gray-200 flex justify-center">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
        
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 pb-20 text-gray-950">
          Meet Fredrick Gyabeng, CEO of Gyabs Footwear
        </h2>

        {/* Centered Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-lg">
          
          {/* Image Section - Centered */}
          <div className="flex justify-center">
            <img
              src={image4}
              alt="Fredrick Gyabeng"
              className="w-full max-w-md h-96 object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Text Section - Centered */}
          <div className="text-center md:text-left">
            <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
              Fredrick is a creative entrepreneur who specializes in upcycling waste materials into 
              unique and functional footwear. He collects discarded leather bags, jeans, and other 
              clothing items from local markets and transforms them into stylish and eco-friendly shoes.
            </p>

            <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
            <div className="text-left">
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Uses waste leather bags and clothing items as primary materials</li>
                <li>Sources materials from local markets</li>
                <li>Creates handmade, upcycled footwear for sale</li>
                <li>Promotes sustainability and reduces waste through innovative design</li>
              </ul>
            </div>
       </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInnovator;
