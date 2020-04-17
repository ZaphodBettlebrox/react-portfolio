import React, { Component } from "react";
import FooterNoPic from "../FooterNoPic";

class Contact extends Component {
  render() {
    return (
      <div>
        <div className="row ">
          <div className="col-md-12">
            <h1 className="text-center about-me">Contact</h1>
          </div>
          <div className="row">
            <div className="contactbody">
              <div className="row text-pink text-center contactrow">
                <div className="col-2"></div>
                <div className="col-4">
                  <p className="margin0">Github Profile Page:</p>
                </div>
                <div className="col-4">
                  <a
                    href="https://github.com/ZaphodBettlebrox"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink text-link"
                  >
                    ZaphodBettlebrox
                  </a>
                </div>
                <div className="col-2"></div>
              </div>

              <div className="row text-pink text-center contactrow">
                <div className="col-2"></div>
                <div className="col-4">
                  <p className="margin0">Linkedin Profile Page:</p>
                </div>
                <div className="col-4">
                  <a
                    href="https://www.linkedin.com/in/aidan-willett-97a816124"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink text-link"
                  >
                    Aidan Willett
                  </a>
                </div>
                <div className="col-2"></div>
              </div>

              <div className="row text-pink text-center contactrow">
                <div className="col-2"></div>
                <div className="col-4">
                  <p className="margin0">Resume:</p>
                </div>
                <div className="col-4">
                  <a
                    href="https://docs.google.com/document/d/1_j5xCqMM-Jqb-9s3DJRECXqMjdq4dVKi1XKdeSTP0TY/edit?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink text-link"
                  >
                    Link
                  </a>
                </div>
                <div className="col-2"></div>
              </div>

              <div className="row text-pink text-center contactrow">
                <div className="col-2"></div>
                <div className="col-4">
                  <p className="margin0">Email:</p>
                </div>
                <div className="col-4">
                  <p className="margin0">Gamer9310@gmail.com</p>
                </div>
                <div className="col-2"></div>
              </div>

              <div className="contactbottom"></div>
            </div>
          </div>
        </div>

        <div>
          <FooterNoPic></FooterNoPic>
        </div>
      </div>
    );
  }
}

export default Contact;
