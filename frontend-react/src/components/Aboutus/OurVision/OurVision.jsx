import React from "react";
import "./OurVision.css";
import delivery from "/src/assets/delivery.png";

const OurVision = () => {
    return (
        <div className="our-vision-container">
            <div className="left-section">
                <h1 className="title">Our Vision</h1>
                <p className="content">
                    At <strong>QuickDabba</strong>, we dream of a world where everyone can enjoy fresh,
                    homemade food anytime. We want to help <strong>home chefs</strong> grow their passion into
                    a successful business while making sure people get{" "}
                    <strong>healthy, real, and tasty meals</strong> without artificial ingredients.{" "}
                    Our goal is to connect <strong>home cooks</strong> with food lovers, making homemade
                    food easily available.{" "}
                    We believe that food is more than just a meal — it’s{" "}
                    <strong>comfort, tradition, and love</strong>. With <strong>QuickDabba</strong>, we are not just
                    delivering food. We are building a future where home-cooked meals{" "}
                    <strong>bring people together</strong> and support local chefs.{" "}
                    By empowering <strong>home chefs</strong>, we aim to bring{" "}
                    <strong>authentic flavors</strong> to every table while promoting a{" "}
                    <strong>healthier, more connected</strong> way of dining.{" "}
                    Together, we are redefining the future of food — {" "}
                    <strong>one homemade meal at a time</strong>.
                </p>
            </div>
            <div className="right-section">
                <img
                    src={delivery}
                    alt="Our Vision"
                    className="vision-image"
                />
            </div>
        </div>
    );
};

export default OurVision;
