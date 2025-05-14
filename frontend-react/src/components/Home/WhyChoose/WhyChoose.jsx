import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./WhyChoose.css";
import tiffin1 from "/src/assets/tiffin1.png";
import tiffin2 from "/src/assets/tiffin2.png";
import tiffin3 from "/src/assets/tiffin3.png";
import tiffin4 from "/src/assets/tiffin4.png";

const WhyChoose = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
      <div className="whychoose-container">
      <motion.div
       ref={ref}
        className="text-content"
        initial={{ opacity: 0, x: -50 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.21 }}
      >
        <h2 className="heading">Why Choose QuickDabba?</h2>
        <h3 className="subheading">Enjoy fresh, tasty, and healthy food delivered daily – no hassle, just flavor  !</h3>
        <p className="description">
        ✅  Delicious Variety to Keep You Excited
        </p>
        <p className="description">
        ✅  Taste That Feels Like Home
        </p>
        <p className="description">
        ✅  Affordable Prices
        </p>
        <p className="description">
        ✅  100% Fresh & Nutritious
        </p>
        <p className="description">
        ✅  Authentic Indian Recipes
        </p>
      </motion.div>

      <motion.div
        className="image-container"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.21}}
      >
        <div className="row">
          <motion.img
            src={tiffin2}
            alt="Tiffin 2"
            className="tiffin-1"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={tiffin4}
            alt="Tiffin 4"
            className="tiffin-2"
            whileHover={{ scale: 1.1 }}
          />
        </div>
        <div className="row">
          <motion.img
            src={tiffin1}
            alt="Tiffin 1"
            className="tiffin-3"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src={tiffin3}
            alt="Tiffin 3"
            className="tiffin-4"
            whileHover={{ scale: 1.1 }}
          />
        </div>
      </motion.div>
      </div>
  );
};

export default WhyChoose;
