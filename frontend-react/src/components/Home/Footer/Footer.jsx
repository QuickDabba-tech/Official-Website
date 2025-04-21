import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import quick from "/src/assets/quick.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-up">
        <img src={quick} alt="quicklogo" className="logo" />
        <div className="social-icons">
          <a className="link" href="https://www.linkedin.com" target="_blank" ><FaLinkedin /></a>
          <a className="face" href="https://www.facebook.com" target="_blank" ><FaFacebook /></a>
          <a className="insta" href="https://www.instagram.com/quickdabba/" target="_blank" ><FaInstagram /></a>
          <a className="tweet" href="https://x.com/quickdabba" target="_blank"><FaXTwitter /></a>
        </div>
        <div className="contact-info">
          <p>quickdabba@gmail.com</p>
        </div>
      </div>
      <div className="footer-down">
        <ul>
          <li><Link to="/" className="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</Link></li>
          <li><Link to="/order" className="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>How To Order</Link></li>
          <li><Link to="/aboutus" className="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link></li>
          <li><Link to="/contactus" className="link" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link></li>
          <li><Link to="#" className="link">Privacy Policy</Link></li>
          <li><Link to="#" className="link">Terms & Conditions</Link></li>
        </ul>
      </div>
      <hr className="footer-line" />
      <p className="copyright">&copy; Quick Dabba | All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
