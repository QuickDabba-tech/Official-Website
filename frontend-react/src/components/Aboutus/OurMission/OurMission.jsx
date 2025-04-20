import React from "react";
import "./OurMission.css";
import customer from "/src/assets/customer.png"

const OurMission = () => {
    return (
        <div className="mission-container">
            <div className="mission-image">
                <img src={customer} alt="Mission" />
            </div>
            <div className="mission-text">
                <h2>Our Mission</h2>
                <p>
                    At <strong>Quick Dabba</strong>, we believe that nothing compares to the warmth{" "}
                    and goodness of a <strong>home-cooked meal</strong>. Our mission is to create{" "}
                    a bridge between <strong>home chefs</strong> who love to cook and{" "}
                    <strong>customers</strong> who crave fresh, nutritious, and authentic{" "}
                    homemade food.
                </p>

                <p>
                    We empower <strong>talented home cooks</strong> to turn their passion into{" "}
                    a thriving business by providing them with a platform to share their food{" "}
                    with the world. Whether it's a <strong>traditional family recipe</strong>{" "}
                    or a modern take on a classic dish, we help chefs bring their{" "}
                    <strong>culinary creations</strong> to a wider audience while ensuring{" "}
                    they earn from their skills.
                </p>    

                <p>
                    For customers, <strong>Quick Dabba</strong> is more than just a{" "}
                    <strong>food delivery service</strong>. It’s a way to enjoy{" "}
                    <strong>wholesome, hygienic, and soulful meals</strong> that remind them{" "}
                    of home — no artificial flavors, no mass production, just{" "}
                    <strong>real food made with love</strong>. Whether you're a{" "}
                    <strong>busy professional</strong>, a <strong>student away from home</strong>,{" "}
                    or simply someone who appreciates <strong>authentic home cooking</strong>,{" "}
                    we make sure you get the best meals, whenever you need them.
                    At <strong>Quick Dabba</strong>, we don’t just deliver food.{" "}
                    <strong>We bring people together through the love of home-cooked meals.</strong>
                </p>

            </div>
        </div>
    );
};

export default OurMission;

