import React from "react";
import "./footer.css";
import { BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Animesh Kumar Singh
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/animesh.__.singh/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/animesh-kumar-singh-908548170/">
          <BsLinkedin />
        </a>
        <a href="https://www.facebook.com/animesh.golu">
          <BsFacebook />
        </a>
      </div>
      <div>
        <small>&copy;Animesh Kumar Singh. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
