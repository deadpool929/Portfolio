import React from "react";
import "./about.css";
import ME from "../../assets/dpf.jpg";
import { FaAward } from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { CgWorkAlt } from "react-icons/cg";
const About = () => {
  return (
    <div>
      <section id="about">
        <h5>Got To Know</h5>
        <h2>About Me</h2>

        <div className="container about__container">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Skills</h5>
                <small>MERN Stack development Internship</small>
              </article>
              <article className="about__card">
                <TbFileCertificate className="about__icon" />
                <h5>Education</h5>
                <small>B.Tech in Computer Science & Engineering</small>
              </article>
              <article className="about__card">
                <CgWorkAlt className="about__icon" />
                <h5>Portfolio</h5>
                <small>Some Projects in MERN Stack</small>
              </article>
            </div>
            <p>Hello i am Animesh Kumar Singh. I am a Full Stack Developer </p>
            <a href="#contact" className="btn btn-primary">
              Lets's Talk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
