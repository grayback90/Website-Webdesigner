import { ArrowRightIcon } from "@heroicons/react/solid";
import { DesktopComputerIcon } from "@heroicons/react/solid";
import React from "react";
//CSS
import "./css/Navbar.css"

function Navbar() {
    return (
        <header className="navbar_background">
          <div className="navbar_container">
            <a>
              <a href="#about" className="navbar_home">
                Kenny Mäder
              </a>
            </a>
            <DesktopComputerIcon className="navbar_icon" />
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
              <ArrowRightIcon className="navbar_icon" />
            </a>
          </div>
        </header>
      );
}

export default Navbar;