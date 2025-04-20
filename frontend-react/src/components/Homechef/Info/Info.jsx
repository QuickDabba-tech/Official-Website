import React from "react";
import "./Info.css";

const Info = () => {
  return (
    <div className="info-container">
      <div className="top-boxes">
        <div className="box">
          <h2>Selection Criteria</h2>
          <p>
          ✔️ Must have prior experience in home-cooked meal preparation.
          </p>
          <p>
          ✔️ Should maintain high hygiene and food safety standards.
          </p>
          <p>
          ✔️ Must be able to prepare meals on time with consistent quality.
          </p>
          <p>
          ✔️ Should have a passion for providing fresh and healthy homemade food.
          </p>
        </div>
        <div className="box">
          <h2>Benefits</h2>
          <p>
          ✔️ Earn a stable income from the comfort of your home.
          </p>
          <p>
          ✔️ Enjoy flexible working hours suited to your lifestyle.
          </p>
          <p>
          ✔️ Join a rapidly growing community of home chefs.
          </p>
          <p>
          ✔️ Get full support for hassle-free packaging and delivery.
          </p>
        </div>
      </div>
      <div className="bottom-box">
        <h2>Verification</h2>
        <p>
          ✔️ Our team visits to verify cleanliness and food quality.
          </p>
          <p>
          ✔️ We ensure the use of fresh and hygienic ingredients.
          </p>
          <p>
          ✔️ Cooking methods are evaluated for safety and standards.
          </p>
          <p>
          ✔️ Kitchen setup is inspected for hygiene compliance.
          </p>
      </div>
    </div>
  );
};

export default Info;

