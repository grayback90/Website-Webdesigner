import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
//CSS
import "./Navbar.css"

function Navbar() {
    return (
        <header className="navbar_background">
          <div className="navbar_container">
            <a className="navbar_link_about">
              <a href="#about" className="navbar_home">
                Reed Barger
              </a>
            </a>
            <nav className="navbar_navigation">
              <a href="#projects" className="navbar_links">
                Past Work
              </a>
              <a href="#skills" className="navbar_links">
                Skills
              </a>
              <a href="#testimonials" className="navbar_links">
                Testimonials
              </a>
            </nav>
            <a
              href="#contact"
              className="navbar_link_contact">
              Hire Me
              <ArrowRightIcon className="arrow_icon" />
            </a>
          </div>
        </header>
      );
}

export default Navbar;