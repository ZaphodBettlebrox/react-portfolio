import React from "react";
import Self from "../pictures/Portfolio-pic.png"
// import "../styles/Allstyles.css"

function Footer() {
  return (
    <nav className="fixed-bottom footer text-center">
        <div className="portrate">
          <img
            src={Self}
            className="img-fluid imgMargin"
            alt="Responsive"
          />
        </div>
        <div className="line"></div>
        <div className="line2"></div>

        <p className="navbar-brand copyright">Aidan Willett 2020</p>
      </nav>
  );
}

export default Footer;
