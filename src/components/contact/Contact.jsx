import React from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { BsLinkedin } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsWhatsapp } from "react-icons/bs";

import { HiOutlineMail } from "react-icons/hi";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_om6e5kl",
        "template_4b60dcn",
        form.current,
        "5shtr_Gf5f21ShU5Q"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div>
      <section id="contact">
        <h5>Get in Touch</h5>
        <h2>Contact me</h2>

        <div className=" container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              {<SiGmail className="contact__option-icon" />}
              <h4>Email</h4>
              <h5>kanimesh4@gmail.com</h5>
              <a href="mailto:kanimesh4@gmail.com">Email</a>
            </article>
            <article className="contact__option">
              {<BsLinkedin className="contact__option-icon" />}
              <h4>LinkedIn</h4>
              <h5>Animesh Kumar Singh</h5>
              <a
                href="https://www.linkedin.com/in/animesh-kumar-singh-908548170/"
                target="_blank"
              >
                LinkedIn
              </a>
            </article>
            <article className="contact__option">
              {<BsWhatsapp className="contact__option-icon" />}
              <h4>Whatsapp</h4>
              <h5>Animesh Kumar Singh</h5>
              <a href="https://wa.me/918210292324" target="_blank">
                Whatsapp
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            />
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
