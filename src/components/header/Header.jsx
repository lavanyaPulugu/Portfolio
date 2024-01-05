import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import Social from "./Social";

const Header = () => {
  return (
    <section id="header">
      <header>
        <div className="container header-container">
          <h5>Hello I'm</h5>
          <h1>Lavanya Pulugu</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA />
          <Social />
          <div className="me">
            <img src={ME} alt="" />
          </div>
          <a href="#contact" className="scroll_down">
            Scroll Down
          </a>
        </div>
      </header>
    </section>
  );
};

export default Header;
