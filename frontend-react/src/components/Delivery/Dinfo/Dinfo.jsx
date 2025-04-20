import React from "react";
import "./Dinfo.css";

const Dinfo = () => {
  return (
    <div className="dinfo-container">
      <div className="dtop-boxes">
        <div className="dbox">
          <h2>Selection Criteria</h2>
          <p>
          ✔️ Owns a bike, scooter, or e-rickshaw for deliveries.
          </p>
          <p>
          ✔️ Has a valid driving license (if applicable) and ID proof.
          </p>
          <p>
          ✔️ Familiar with local routes and navigation apps.
          </p>
          <p>
          ✔️ Physically fit to handle multiple deliveries efficiently.
          </p>
        </div>
        <div className="dbox">
          <h2>Benefits</h2>
          <p>
          ✔️ Earn a stable income with flexible working hours.
          </p>
          <p>
          ✔️ Work independently while following company guidelines.
          </p>
          <p>
          ✔️ Work in your preferred local areas.
          </p>
          <p>
          ✔️ Join a trusted network of delivery professionals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dinfo;

