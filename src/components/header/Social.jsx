import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Social = () => {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/feed/">
        <BsLinkedin />
      </a>
      <a href="https://github.com/">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/">
        <FaInstagram />
      </a>
    </div>
  );
};

export default Social;
