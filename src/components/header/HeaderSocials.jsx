import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/animesh-kumar-singh-908548170/"
        target="_blank"
      >
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/deadpool929" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://www.instagram.com/animesh.__.singh/" target="_blank">
        <AiFillInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
