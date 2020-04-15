import React, { Component } from "react";
import FooterNoPic from "../FooterNoPic";

class Contact extends Component {
  render() {
    return (
      <div>
        <div class="row ">
          <div class="col-md-12">
            <h1 class="text-center about-me">Contact</h1>
          </div>
          <div class="row">
            {/* <div class="col-md-12 contactbody">

          <div class="row">

            <div class="col-md-2">
            </div>
            <div class="col-md-3 text-pink">
              <p>Github Profile Page:</p>
              <a href="https://github.com/ZaphodBettlebrox" target="_blank" rel="noopener noreferrer" className="nav-link text-pink text-link">ZaphodBettlebrox</a>
            </div>

            <div class="col-md-2">
            </div>

            <div class="col-md-3 text-pink">
              <p>Linkin Profile Page:</p>
              <a href="https://www.linkedin.com/in/aidan-willett-97a816124" target="_blank" rel="noopener noreferrer" className="nav-link text-pink text-link">Aidan Willett</a>
            </div>
      
            <div class="col-md-2">
            </div>
          </div>

          <br/>
          <br/>
          <br/>

          <div class="row text-pink">
            <div class="col-md-2">
            </div>
            <div class="col-md-4">
              <p>
                Email address: Gamer9310@gmail.com
              </p>
            </div>
            <div class="col-md-4">
              <p>
                Phone Number: 253 455 5399
              </p>
            </div>

          </div>
          <div class="contactbottom">
          </div>
        </div> */}
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

              <div class="contactbottom">
              </div>
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
