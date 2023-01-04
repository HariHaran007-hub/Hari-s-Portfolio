import React from "react";
import "./contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactContainer">
        <div className="left">
          <div className="top">
            <h1>Let's Connect</h1>
            <p>
              Let's connect and work together. If any projects need to be
              developed please drop me a mail or give me an message on Linkedin,
              or fill this form(check the email before you send).
            </p>
          </div>
          <div className="bottom">
            <img src="/img/contact-img.svg" />
          </div>
        </div>

        <div className="right">
          <div className="formContainer">
            <form>
              <div className="inputContainer">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />

                <textarea placeholder="Enter your message here" />
                <button type="submit">Sumbit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
