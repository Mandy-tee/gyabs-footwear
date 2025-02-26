import React from "react";
import image1 from "../../../assets/image1.JPG";
import image2 from "../../../assets/image2.JPG";
import image3 from "../../../assets/image3.JPG";

const AboutProduct = () => {
  return (
    <section id="products" className="py-16 bg-gray-900 text-[#F5DEB3]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        
        <h2 className="text-6xl md:text-5xl font-bold text-center mb-10 pb-20">About Products</h2>

        {/* Responsive Product Grid */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          
          {/* Product 1 */}
          <div className="flex flex-col items-center p-4 max-w-sm">
            <img 
              src={image1} 
              alt="Eco-Friendly Materials" 
              className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-4 pt-4">Eco-Friendly Materials</h3>
            <p className="text-sm sm:text-base mt-2">
              Crafted from waste materials that would otherwise go to waste, each pair tells a story of sustainability.
            </p>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-center p-4 max-w-sm">
            <img 
              src={image2} 
              alt="Sustainable Design" 
              className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-4 pt-4">Sustainable Design</h3>
            <p className="text-sm sm:text-base mt-2">
              Thoughtfully designed for both comfort and durability, reducing our environmental footprint.
            </p>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-center p-4 max-w-sm">
            <img 
              src={image3} 
              alt="Local Craftsmanship" 
              className="w-full h-56 sm:h-64 object-cover rounded-lg shadow-lg"
            />
            <h3 className="text-lg sm:text-xl font-semibold mt-4 pt-4">Local Craftsmanship</h3>
            <p className="text-sm sm:text-base mt-2">
              Each pair is handcrafted locally, supporting our community while delivering quality footwear for school children, PWDS, etc.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
