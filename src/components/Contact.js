import React from "react";
//CSS
import "./css/Contact.css"

function Contact() {
    
    //To send the contact form
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));
    }

    return (
        <section id="contact" className="relative">
          <div className="contact_container">
            <div className="contact_map">
              <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed/v1/place?q=Eilenburg&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
              <div className="contact_outer_adress">
                <div className="contact_inner_adress">
                  <h2 className="contact_h2">
                    ADDRESS
                  </h2>
                  <p className="contact_country">
                    04838 Eilenburg <br />
                    Sachsen, Deutschland
                  </p>
                </div>
                <div className="contact_mail">
                  <h2 className="contact_h2">
                    EMAIL
                  </h2>
                  <a className="contact_mail_link">
                    reedbarger@email.com
                  </a>
                  <h2 className="contact_h2">
                    PHONE
                  </h2>
                  <p className="contact_phone_number">123-456-7890</p>
                </div>
              </div>
            </div>
            <form
              netlify
              name="contact"
              onSubmit={handleSubmit}
              className="contact_form">
              <h2 className="contact_form_h2">
                Hire Me
              </h2>
              <p className="contact_hire_text">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                suscipit officia aspernatur veritatis. Asperiores, aliquid?
              </p>
              <div className="contact_outer_label">
                <label htmlFor="name" className="contact_label_name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact_input"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="contact_outer_label">
                <label htmlFor="email" className="contact_label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact_input"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="contact_outer_label">
                <label
                  htmlFor="message"
                  className="contact_label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact_input_message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="contact_send_button">
                Submit
              </button>
            </form>
          </div>
        </section>
      );
}

export default Contact;