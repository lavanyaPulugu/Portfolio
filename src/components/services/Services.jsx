import React from "react";
import "./services.css";
import { FaCheck } from "react-icons/fa6";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services-container">
        {/* --------------- ui/ux services ---------- */}
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service-list">
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>

            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>
        {/* --------------- web development---------- */}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>

            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>
        {/* --------------- content creation---------- */}
        <article className="service">
          <div className="service-head">
            <h3>content creation</h3>
          </div>
          <ul className="service-list">
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>

            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>

            <li>
              <FaCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
