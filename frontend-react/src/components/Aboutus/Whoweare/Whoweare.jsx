import React from "react";
import "./WhoWeAre.css";
import ghibli from "/src/assets/ghibli.png";

const WhoWeAre = () => {
  return (
    <div className="who-we-are-container">
      <div className="who-we-are-image">
        <img
          src={ghibli}
          alt="Who We Are"
        />
      </div>
      <div className="who-we-are-text">
        <h1>Who We Are</h1>
        <p>
          Tired of the same old takeout? <strong>Quick Dabba</strong> is here to
          change the way you experience food! We bring you{" "}
          <strong>homemade meals crafted by local chefs</strong> who put love
          into every bite. No more bland, mass-produced food—just{" "}
          <strong>fresh, authentic, and soulful home cooking, delivered fast.</strong>
        </p>
        <p>
          For home chefs, it’s more than just cooking—it’s a chance to{" "}
          <strong>
            share their talent, earn, and bring people closer to real food.
          </strong>{" "}
          For customers, it’s the warmth of home, served whenever they need it.
        </p>
        <p className="big">
          <strong>At Quick Dabba, we don’t just deliver meals. We deliver home.</strong>
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;

