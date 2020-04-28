import React, { Component } from "react";
import PigBank from "../../pictures/Pig-E-Bank.PNG";
import Top3 from "../../pictures/Capture.PNG";
import HousingAuthority from "../../pictures/housing-authority.PNG";
import FooterNoPic from "../FooterNoPic";


class Portfolio extends Component {
  description1() {
    const button = document.querySelector(".buttonhide1");
    const desc = document.querySelector(".deschide1");
    if (button.style.display === "none") {
      button.style.display = "block";
      desc.style.display = "none";
    } else {
      button.style.display = "none";
      desc.style.display = "block";
    }
  }

  description2() {
    const button = document.querySelector(".buttonhide2");
    const desc = document.querySelector(".deschide2");
    if (button.style.display === "none") {
      button.style.display = "block";
      desc.style.display = "none";
    } else {
      button.style.display = "none";
      desc.style.display = "block";
    }
  }

  description3() {
    const button = document.querySelector(".buttonhide3");
    const desc = document.querySelector(".deschide3");
    if (button.style.display === "none") {
      button.style.display = "block";
      desc.style.display = "none";
    } else {
      button.style.display = "none";
      desc.style.display = "block";
    }
  }

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
            <div className="portfolio-wrapper">
              
                <div className="portfolio-card">
                  <p className="text-center card-title">Housing Project</p>
                  <img src={HousingAuthority} className="card-image" alt="Responsive" />
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 padding0">
                      <a
                        href="https://github.com/ZaphodBettlebrox/housing-project"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-center card-button"
                      >
                        Repository
                      </a>
                    </div>
                    <div className="col-4"></div>
                  </div>
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 padding0">
                      <a
                        href="https://mhauthority.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-center card-button"
                      >
                        Website Link
                      </a>
                    </div>
                    <div className="col-4"></div>
                  </div>

                  {/* <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                      <p
                        className=" text-center card-button buttonhide2"
                        onClick={this.description2}
                      >
                        More...
                      </p>
                    </div>
                    <div className="col-4"></div>
                  </div> */}

                  <div className="row card-content">
                    <div>
                      <p className="text-pink">
                      Muckleshoot Housing Authority website to allow users to access files, information, and be able to see contact information. 

                      </p>
                    </div>
                  </div>

                  <div className=" text-center card-desc deschide2">
                    <div className="desc-close" onClick={this.description2}>
                      close
                    </div>
                    Muckleshoot Housing Authority website to allow users to access files, information, and be able to see contact information. 
                  </div>
                </div>
          
                <div className="portfolio-card">
                  <p className="text-center card-title">Top 3</p>
                  <img src={Top3} className="card-image" alt="Responsive" />
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 padding0">
                      <a
                        href="https://github.com/ZaphodBettlebrox/Project-2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-center card-button"
                      >
                        Repository
                      </a>
                    </div>
                    <div className="col-4"></div>
                  </div>
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 padding0">
                      <a
                        href="https://top3recommendations.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-center card-button"
                      >
                        Website Link
                      </a>
                    </div>
                    <div className="col-4"></div>
                  </div>

                  {/* <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                      <p
                        className=" text-center card-button buttonhide3"
                        onClick={this.description3}
                      >
                        More...
                      </p>
                    </div>
                    <div className="col-4"></div>
                  </div> */}

                  <div className="row card-content">
                    <div>
                      <p className="text-pink">
                      Website where users can login and share there top three recommendations on a variety of products and experiences. 

                      </p>
                    </div>
                  </div>

                  <div className=" text-center card-desc deschide3">
                    <div className="desc-close" onClick={this.description3}>
                      close
                    </div>
                    Website where users can login and share there top three recommendations on a variety of products and experiences. 
                  </div>
                </div>
 
                <div className="portfolio-card">
                  <p className="text-center card-title">Pig E-Bank</p>
                  <img src={PigBank} className="card-image" alt="Responsive" />
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 padding0">
                      <a
                        href="https://github.com/ZaphodBettlebrox/Screen_Time_Tracker"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-center card-button"
                      >
                        Repository
                      </a>
                    </div>
                    <div className="col-4"></div>
                  </div>
                  <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 padding0">
                      <a
                        href="https://ajrsabet.github.io/Screen_Time_Tracker/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className=" text-center card-button"
                      >
                        Website Link
                      </a>
                    </div>
                    <div className="col-4"></div>
                  </div>

                  {/* <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                      <p
                        className=" text-center card-button buttonhide1"
                        onClick={this.description1}
                      >
                        More...
                      </p>
                    </div>
                    <div className="col-4"></div>
                  </div> */}

                  <div className="row card-content">
                    <div>
                      <p className="text-pink">
                      This website allows the parent to be able to keep track of the kid’s electronic device usage and their allowance.

                      </p>
                    </div>
                  </div>
                  

                  <div className=" text-center card-desc deschide1">
                    <div className="desc-close" onClick={this.description1}>
                      close
                    </div>
                    This website allows the parent to be able to keep track of the kid’s electronic device usage and their allowance.
                  </div>
                </div>
            </div>
            <div className="row margin-bottom">
              

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
