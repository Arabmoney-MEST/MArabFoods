import React from "react";
import "./Footer.css";
import fb from "../../assets/fb.png";
import youtube from "../../assets/youtube.png";
import linkedIn from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";

const Footer = () => {
  return (
    <div className="marabfoods_footer">
      <div className="marabfoods_footer-links">
        <div className="marabfoods_footer-links-div">
          <h4>Quick Links</h4>
          <a href="/about-us">Home</a>
          <a href="/partners">About Us</a>
          <a href="/contacts">Contacts Us</a>
        </div>
        <div className="marabfoods_footer-links-div">
          <h4>Resource</h4>
          <a href="/resources">Resource center</a>
          <a href="/resources">Testimonials</a>
          <a href="/resources">Return and Refund Policy</a>
        </div>
        <div className="marabfoods_footer-links-div">
          <h4>Partners</h4>
          <a href="/employer">DIANA SWISH</a>
          <a href="/employer">ATÏNAD et CO</a>
          <a href="/employer">GERALDOAgro</a>
          <a href="/employer">LARISSAAgro</a>
          
        </div>
        <div className="marabfoods_footer-links-div">
          <h4>Social Media Links</h4>
          <div className="socialmedia">
            <img src={fb} alt="" />
            <img src={youtube} alt="" />
            <img src={linkedIn} alt="" />
            <img src={instagram} alt="" />
          </div>
        </div>
      </div>

      <hr></hr>
      <div className="marabfoods_footer-below">
        <div className="marabfoods_footer-copyright">
          @2024 Marabfoods Private Limited. All right reserved
        </div>
        <div className="marabfoods_footer-links">
          <a href="/terms">Terms & Conditions</a>
          <a href="/privacy">Privacy </a>
          <a href="/security">Security </a>
          <a href="/cookie"> Cookie Declaration </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
