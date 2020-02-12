import React, { Component } from "react";
import PigBank from "../../pictures/Pig-E-Bank.PNG";
import Top3 from "../../pictures/Capture.PNG";
import WorkDay from "../../pictures/work-day-scheduler.PNG";
import FooterNoPic from "../FooterNoPic";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center about-me">Portfolio</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2"></div>

              <div className="col-md-4 images">
                <p className="text-center text-pink">Pig E-Bank</p>
                <a
                  href="https://ajrsabet.github.io/Screen_Time_Tracker/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={PigBank} className="img-fluid" alt="Responsive" />
                </a>
                <a
                  href="https://github.com/ajrsabet/Screen_Time_Tracker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to the Github repository
                </a>
              </div>

              <div className="col-md-4 images">
                <p className="text-center text-pink">Work Day Scheduler</p>
                <a href="extra pages/picture2.html" target="_blank">
                  <img
                    src={WorkDay}
                    className="img-fluid"
                    alt="Responsive"
                    rel="noopener noreferrer"
                  />
                </a>
                <a
                  href="https://github.com/ZaphodBettlebrox/Homework5-Day-Planner"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to the Github repository
                </a>
              </div>

              <div className="col-md-2"></div>
            </div>

            <div className="row margin-bottom">
              <div className="col-md-2"></div>

              <div className="col-md-4 images">
                <p className="text-center text-pink">Top 3</p>
                <a
                  href="https://top3recommendations.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={Top3} className="img-fluid" alt="Responsive" />
                </a>
                <a
                  href="https://github.com/ZaphodBettlebrox/Project-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Link to the Github repository
                </a>
              </div>

              <div className="col-md-6"></div>
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

export default Portfolio;
