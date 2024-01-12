import React from "react";
import "./contact.css";
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_5da5cbh",
      "template_aqq1ktd",
      form.current,
      "0151iMpZAkqGCsO9n"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <HiOutlineMail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>lavanya415@gmail.com</h5>
            <a href="mailto:lavanya415@gmail.com" target="_blank">
              Send Message
            </a>
          </article>
          <article className="contact-option">
            <FaWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>9666753505</h5>
            <a
              href="https://api.whatsapp.com/send?phone=9666753505"
              target="_blank"
            >
              Send Message
            </a>
          </article>
          <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>lavanyaPulugu</h5>
            <a href="http://facebook.com" target="_blank">
              Send Message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="enter your mail"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="your message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
