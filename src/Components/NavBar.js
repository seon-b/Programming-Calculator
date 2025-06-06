import React, { Component } from "react";
import "./Component.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navBarStyle">
          <section className="navBarItem1">
            <div className="navBarLogo">
              <button className="btn">
                <h1>
                  <i className="bi bi-calculator"></i>
                  <span className="navBarTitleText">
                    Programming Calculator
                  </span>
                </h1>
              </button>
            </div>
          </section>
          <section className="navBarItem2">
            <div className="navBarLink">
              <button className="btn">
                <h2>
                  X<sup>n&nbsp;</sup>
                  <span className="baseConversion">Base Conversion</span>
                </h2>
              </button>
            </div>
          </section>
        </nav>
      </div>
    );
  }
}

export default NavBar;
