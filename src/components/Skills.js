import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "./data/data";
//CSS
import "./css/Skills.css"

function Skills() {
    return (
        <section id="skills">
          <div className="skills_container">
            <div className="skills_centertext">
              <ChipIcon className="skills_chipicon" />
              <h1 className="skills_h1">
                Skills &amp; Technologies
              </h1>
              <p className="skills_textbase">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi sit
                ipsa delectus eum quo voluptas aspernatur accusantium distinctio
                possimus est.
              </p>
            </div>
            <div className="skills_flex">
              {skills.map((skill) => (
                <div key={skill.skill} className="skills_skill">
                  <div className="skills_skillicon">
                    <BadgeCheckIcon className="skills_badgecheckicon" />
                    <span className="skills_skilltext">
                      {skill.skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Skills;