import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "./data";
//CSS
import "./Projects.css"

function Projects() {
    return (
        <section id="projects" className="">
          <div className="projects_container">
            <div className="projects_flex">
              <CodeIcon className="projects_codeicon"/>
              <h1 className="projects_h1">
                Apps I've Built
              </h1>
              <p className="projects_text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo
                facilis repellat ab cupiditate alias vero aliquid obcaecati quisquam
                fuga dolore.
              </p>
            </div>
            <div className="projects_flexcontainer">
              {projects.map((project) => (
                <a
                  href={project.link}
                  key={project.image}
                  className="projects_link">
                  <div className="projects_flex_image">
                    <img
                      alt="gallery"
                      className="projects_image"
                      src={project.image}
                    />
                    <div className="projects_subtitle">
                      <h2 className="projects_h2">
                        {project.subtitle}
                      </h2>
                      <h1 className="projects_title">
                        {project.title}
                      </h1>
                      <p className="projects_description">{project.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Projects;