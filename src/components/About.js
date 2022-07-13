import React from "react";
//CSS
import "./About.css"

function About() {
    return (
        <section id="about">
          <div className="container">
            <div className="flex">
              <h1 className="h1_about">
                Hi, I'm Reed.
                <br className="hidden" />I love to build amazing
                apps.
              </h1>
              <p className="about_me">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
                laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
                Laborum, voluptas natus?
              </p>
              <div className="flex_center">
                <a
                  href="#contact"
                  className="link_contact">
                  Work With Me
                </a>
                <a
                  href="#projects"
                  className="link_projects">
                  See My Past Work
                </a>
              </div>
            </div>
            <div className="coding_icon">
              <img
                className="coding"
                alt="hero"
                src="./coding.svg"
              />
            </div>
          </div>
        </section>
      );
}

export default About;