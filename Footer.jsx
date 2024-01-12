import React from "react";
import "./footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <a href="/" className="footer-logo">
        Lavanya
      </a>

      <ul className="permalinks">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/experience">Experiance</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/portfolio">Portfolio</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
      <div className="footer-socials">
        <a href="http://facebook.com">
          <FaFacebookSquare />
        </a>
        <a href="http://instagram.com">
          <FiInstagram />
        </a>
        <a href="http://twitter.com">
          <FaXTwitter />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Lavanya Pulugu. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
