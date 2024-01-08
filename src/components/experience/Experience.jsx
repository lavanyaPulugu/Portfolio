import React from "react";
import "./experience.css";
import { TbDiscountCheckFilled } from "react-icons/tb";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container exp-container">
        <div className="exp-frontend">
          <h3>Frontend Development</h3>
          <div className="exp-content">
            <article className="exp-details">
              <TbDiscountCheckFilled className="exp-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp-details">
              <TbDiscountCheckFilled className="exp-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp-details">
              <TbDiscountCheckFilled className="exp-details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp-details">
              <TbDiscountCheckFilled className="exp-details-icon" />
              <div>
                <h4>Angular</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <TbDiscountCheckFilled className="exp-details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="exp-details">
              <TbDiscountCheckFilled className="exp-details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp-backend">
          <h3>Backend Development</h3>
          <div className="exp-content">
            <article className="exp-details">
              <TbDiscountCheckFilled className="exp-details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            <article className="exp-details">
              <TbDiscountCheckFilled className="exp-details-icon" />
              <div>
                <h4>MangoDB</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="exp-details">
              <TbDiscountCheckFilled className="exp-details-icon" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>

            <article className="exp-details">
              <TbDiscountCheckFilled className="exp-details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">intermediate</small>
              </div>
            </article>
            <article className="exp-details">
              <TbDiscountCheckFilled className="exp-details-icon" />
              <div>
                <h4>python</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
