import React from "react";
import Self from "../pictures/Portfolio-pic.png"
// import "../styles/Allstyles.css"

function Footer() {
  return (
    <nav class="fixed-bottom footer text-center">
        <div class="portrate">
          <img
            src={Self}
            class="img-fluid imgMargin"
            alt="Responsive"
          />
        </div>
        <div class="line"></div>
        <div class="line2"></div>

        <p class="navbar-brand copyright">Aidan Willett 2020</p>
      </nav>
  );
}

export default Footer;
