import React from "react";
import "./services.css";
import STUDY from "../../assets/stu.png";
import UEM from "../../assets/uem1.png";

import MGM from "../../assets/mgm.png";
const services = () => {
  return (
    <div>
      <section id="services">
        <h5>What is my education</h5>
        <h2>My Education</h2>

        <div className="container services__container">
          <div className="services__frontend">
            <div className="services__content">
              {/* <article className="services__details">
                {<img src={IITJ} className="services__details-icon" />}
                <div>
                  <a href="https://www.iitj.ac.in/" target="_blank">
                    <h4>
                      Indian Institute Of Technology–Jodhpur (IIT–Jodhpur)
                    </h4>
                  </a>
                  <small className="text-light">
                    Master of Technology - MTech
                  </small>
                  <br></br>
                  <h6 className="text-light">
                    Data and Computational Sciences (DCS)
                    <br />
                    2023 - 2025
                  </h6>
                </div>
              </article> */}
              <article className="services__details">
                {<img src={UEM} className="services__details-icon" />}
                <div>
                  <a href="https://uem.edu.in/uem-kolkata/" target="_blank">
                    <h4>University of Engineering & Management, Kolkata</h4>
                  </a>
                  <small className="text-light">
                    Bachelor of Technology - BTech
                  </small>
                  <br />
                  <h6 className="text-light">
                    Computer Science and Engineering (CSE)
                    <br />
                    2018 - 2022
                  </h6>
                </div>
              </article>
              <article className="services__details">
                <img src={MGM} className="services__details-icon" />
                <div>
                  <a href="https://www.mgmhssbokaro.in/" target="_blank">
                    <h4>M.G.M Higher Secondary School, Bokaro</h4>
                  </a>
                  <h6 className="text-light">
                    Higher Secondary School Certificate (HSC)
                    <br />
                    2016 - 2018
                  </h6>
                </div>
              </article>
              <article className="services__details">
                <img src={MGM} className="services__details-icon" />
                <div>
                  <a href="https://www.mgmhssbokaro.in/" target="_blank">
                    <h4>M.G.M Higher Secondary School, Bokaro</h4>
                  </a>
                  <h6 className="text-light">
                    Secondary School Certificate (SSC)
                    <br />
                    2006 - 2016
                  </h6>
                </div>
              </article>
            </div>
          </div>
          <div className="about__me">
            <div className="about__me-image">
              <img src={STUDY} alt="About Image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default services;
