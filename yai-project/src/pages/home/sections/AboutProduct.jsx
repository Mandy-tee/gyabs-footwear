import React from "react";
import image1 from "../../../assets/image1.JPG";
import image2 from "../../../assets/image2.JPG";
import image3 from "../../../assets/image3.JPG";

const AboutProduct = () => {
  return (
    <div>
      <section id="products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">About Products</h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            
            {/* Product 1 */}
            <div>
              <img src={image1} alt="Eco-Friendly Materials" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <h3 className="text-xl font-semibold mt-4">Eco-Friendly Materials</h3>
              <p className="text-gray-600 mt-2">
                Crafted from waste materials that would otherwise go to waste, each pair tells a story of sustainability.
              </p>
            </div>

            {/* Product 2 */}
            <div>
              <img src={image2} alt="Sustainable Design" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <h3 className="text-xl font-semibold mt-4">Sustainable Design</h3>
              <p className="text-gray-600 mt-2">
                Thoughtfully designed for both comfort and durability, reducing our environmental footprint.
              </p>
            </div>

            {/* Product 3 */}
            <div>
              <img src={image3} alt="Local Craftsmanship" className="w-full h-64 object-cover rounded-lg shadow-lg" />
              <h3 className="text-xl font-semibold mt-4">Local Craftsmanship</h3>
              <p className="text-gray-600 mt-2">
                Each pair is handcrafted locally, supporting our community while delivering quality footwear for school children, PWDS, etc.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutProduct;
