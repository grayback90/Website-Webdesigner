import React from "react";
//CSS
import "./About.css";
//Images
import coding_logo from "./pictures/website_images/coding.svg";

function About() {
    return (
        <section id="about">
          <div className="about_container">
            <div className="about_flex">
              <h1 className="about_h1">
                Hi, I'm Reed.
                <br className="abouthidden" />I love to build amazing
                apps.
              </h1>
              <p className="about_me">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br>
                Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?<br></br>
                Laborum, voluptas natus?
              </p>
              <div className="about_flex_center">
                <a
                  href="#contact"
                  className="about_link_contact">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="about_link_projects">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="about_coding_icon">
              <img
                className="about_coding"
                alt="hero"
                src={coding_logo}
              />
            </div>
          </div>
        </section>
      );
}

export default About;