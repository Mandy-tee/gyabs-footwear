import React from "react";
import image6 from "../../../assets/image6.JPG";
import image7 from "../../../assets/image7.JPG";
import image8 from "../../../assets/image8.JPG";
import image9 from "../../../assets/image9.JPG";

const Works = () => {
  return (
    <section id="works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Step 1 */}
          <div className="text-center">
            <img
              src={image6}
              alt="Collection Process"
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              1
            </div>
            <h3 className="font-semibold mb-2">Collection</h3>
            <p className="text-gray-600">
              Gathering waste leather from local factories
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center">
            <img
              src={image7}
              alt="Sorting Process"
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              2
            </div>
            <h3 className="font-semibold mb-2">Sorting</h3>
            <p className="text-gray-600">
              Selecting the best materials for upcycling
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center">
            <img
              src={image8}
              alt="Crafting Process"
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              3
            </div>
            <h3 className="font-semibold mb-2">Crafting</h3>
            <p className="text-gray-600">
              Handmaking each pair with care
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center">
            <img
              src={image9}
              alt="Quality Check Process"
              className="w-full h-52 object-cover rounded-lg mb-4"
            />
            <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
              4
            </div>
            <h3 className="font-semibold mb-2">Quality Check</h3>
            <p className="text-gray-600">
              Ensuring comfort and durability
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Works;
