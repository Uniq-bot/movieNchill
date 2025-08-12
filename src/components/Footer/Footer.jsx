import React from "react";
import "./Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-social">
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaInstagram /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaYoutube /></a>
      </div>

      <ul className="footer-links">
        <li><a href="#">Help</a></li>
        <li><a href="#">Site Index</a></li>
        <li><a href="#">IMDbPro</a></li>
        <li><a href="#">Box Office Mojo</a></li>
        <li><a href="#">Developer</a></li>
        <li><a href="#">Press Room</a></li>
        <li><a href="#">Advertising</a></li>
        <li><a href="#">Jobs</a></li>
      </ul>

      <p className="footer-legal">
        © 1990-{new Date().getFullYear()} MovieNChill.com, Inc.
      </p>
    </footer>
  );
}

export default Footer;
