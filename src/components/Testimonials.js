import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import React from "react";
import { testimonials } from "./data/data";
//CSS
import "./css/Testimonials.css"

function Testimonials() {
    return (
        <section id="testimonials">
          <div className="testimonials_container">
            <UsersIcon className="testimonials_usericon" />
            <h1 className="testimonials_h1">
              Client Testimonials
            </h1>
            <div className="testimonials_flex">
              {testimonials.map((testimonial) => (
                <div className="testimonials_outer">
                  <div className="testimonials_inner">
                    <TerminalIcon className="testimonials_terminalicon" />
                    <p className="testimonials_quote">{testimonial.quote}</p>
                    <div className="testimonials_inlineflex">
                      <img
                        alt="testimonial"
                        src={testimonial.image}
                        className="testimonials_images"
                      />
                      <span className="testimonials_outer_name">
                        <span className="testimonials_name">
                          {testimonial.name}
                        </span>
                        <span className="testimonials_company">
                          {testimonial.company}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
}

export default Testimonials;