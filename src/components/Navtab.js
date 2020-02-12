import React from "react";
// import "../styles/Allstyles.css"

function NavTab(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-blue">
      <p className="navbar-brand Aidan-Willett">Aidan Willett</p>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className=" links-text">Links</span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <a
            href="#home"
            onClick={() => props.handlePageChange("Home")}
            className="nav-item nav-link active text-pink"
          >
            Home
          </a>

          <a
            href="#contact"
            onClick={() => props.handlePageChange("Contact")}
            className="nav-item nav-link active text-pink"
          >
            Contact
          </a>

          <a
            href="#portfolio"
            onClick={() => props.handlePageChange("Portfolio")}
            className="nav-item nav-link active text-pink"
          >
            Portfolio
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavTab;
