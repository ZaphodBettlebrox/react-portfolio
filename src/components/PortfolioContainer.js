import React, { Component } from "react";
import NavTab from "./Navtab";


import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import "../styles/Allstyles.css";

class PortfolioContainer extends Component {
  state = {
    currentPage: "Home"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "About") {
      return <About />;
    } else if (this.state.currentPage === "Portfolio") {
      return <Portfolio />;
    } else if (this.state.currentPage === "Contact") {
      return <Contact />;
    } else if (this.state.currentPage === "Home") {
      return <About />;
    }
  };

  render() {
    return (
      <div className="bg">
        <div className="container-fluid">
          <NavTab
            currentPage={this.state.currentPage}
            handlePageChange={this.handlePageChange}
          />

          {this.renderPage()}
        </div>
      </div>
    );
  }
}

export default PortfolioContainer;
