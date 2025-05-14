import React from "react";
import { motion } from "framer-motion";
import "./Aboutus.css";
import aboutImage from "/src/assets/about-image.png"; 

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <motion.div
          className="about-image-container"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.21  }}
          viewport={{ once: true }}
        >
          <img src={aboutImage} alt="About Us" className="about-image" />
        </motion.div>

        
        <motion.div
          className="about-text-container"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.21  }}
          viewport={{ once: true }}
        >
          <h1 className="about-heading">QuickDabba</h1>
          <h3 className="about-subheading">Har dabbe mein chupa hein Maa ka pyaar</h3>
          <p className="about-text">
            QuickDabba is an innovative platform connecting local home chefs with customers seeking fresh, authentic, and nutritious homemade meals. We empower chefs to turn their passion into businesses while offering customers the convenience of fast, hygienic, home-cooked food. QuickDabba delivers not just meals but the comfort and joy of authentic, home-style flavors, anytime, anywhere.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;

