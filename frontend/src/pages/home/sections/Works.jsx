import React from "react";
import image6 from "../../../assets/image6.JPG";
import image7 from "../../../assets/image7.JPG";
import image8 from "../../../assets/image8.JPG";
import image9 from "../../../assets/image9.JPG";

const Works = () => {
  return (
    <section id="works" className="py-16 bg-gray-900 text-[#F5DEB3] flex justify-center">
      <div className="container max-w-6xl mx-auto px-6 md:px-12 lg:px-20">
        
        <h2 className="text-6xl md:text-5xl font-bold text-center mb-10 pb-20">
          Works
        </h2>

        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={image6}
              alt="Collection Process"
              className="w-full max-w-xs h-52 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg pt-4">Collection</h3>
            <p className="text-sm sm:text-base">
              Gathering waste leather from local factories
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={image7}
              alt="Sorting Process"
              className="w-full max-w-xs h-52 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg pt-4">Sorting</h3>
            <p className="text-sm sm:text-base">
              Selecting the best materials for upcycling
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={image8}
              alt="Crafting Process"
              className="w-full max-w-xs h-52 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg pt-4">Crafting</h3>
            <p className="text-sm sm:text-base">
              Handmaking each pair with care
            </p>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center text-center">
            <img
              src={image9}
              alt="Quality Check Process"
              className="w-full max-w-xs h-52 object-cover rounded-lg mb-4"
            />
            <h3 className="font-semibold text-lg pt-4">Quality Check</h3>
            <p className="text-sm sm:text-base">
              Ensuring comfort and durability
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Works;
