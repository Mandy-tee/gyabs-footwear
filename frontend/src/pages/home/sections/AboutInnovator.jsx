import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import image4 from "../../../assets/image4.JPG";

const AboutInnovator = () => (
  <section id="about" className="py-20 bg-gray-200 flex justify-center">
    <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
      
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-center mb-12 pb-20 text-gray-950"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Meet Fredrick Gyabeng, CEO of Gyabs Footwear
      </motion.h2>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center bg-white p-8 rounded-lg shadow-lg">
        
        {/* Image Section */}
        <motion.div 
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={image4}
            alt="Fredrick Gyabeng"
            className="w-full max-w-lg h-[28rem] object-cover rounded-lg shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="text-center md:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            Fredrick is a creative entrepreneur who specializes in upcycling waste materials into 
            unique and functional footwear. He collects discarded leather bags, jeans, and other 
            clothing items from local markets and transforms them into stylish and eco-friendly shoes.
          </p>

          <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-2 text-left">
            <li>Uses waste leather bags and clothing items as primary materials</li>
            <li>Sources materials from local markets</li>
            <li>Creates handmade, upcycled footwear for sale</li>
            <li>Promotes sustainability and reduces waste through innovative design</li>
          </ul>
        </motion.div>

      </div>
    </div>
  </section>
);

export default AboutInnovator;
