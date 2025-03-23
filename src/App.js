import React, { useState } from "react";
import "./App.css";
import "./Components/NavBar.css";
import BaseConversion from "./Components/BaseConversion";
import "./Components/BaseConversion.css";
import ComplementCalculator from "./Components/ComplementCalculator";
import "./Components/DeleteButtonIcon.css";
import BinaryArithmetic from "./Components/BinaryArithmetic";

const App = () => {
  const [appState, setappState] = useState({
    programmingCalculator: true,
    baseConversionApp: true,
    binaryArithmeticApp: true,
    complementCalculatorApp: true,
  });

  // These functions will display and remove the app components from the homepage

  const displayBaseConversionApp = () => {
    if (appState.baseConversionApp === false) {
      setappState({ ...appState, baseConversionApp: true });
    } else {
      setappState({ ...appState, baseConversionApp: false });
    }
  };

  const removeBaseConversionApp = () => {
    if (appState.baseConversionApp === true) {
      setappState({ ...appState, baseConversionApp: false });
    }
  };

  const displayComplementCalculatorApp = () => {
    if (appState.complementCalculatorApp === false) {
      setappState({ ...appState, complementCalculatorApp: true });
    } else {
      setappState({ ...appState, complementCalculatorApp: false });
    }
  };
  const removeComplementCalculatorApp = () => {
    if (appState.complementCalculatorApp === true) {
      setappState({ ...appState, complementCalculatorApp: false });
    }
  };
  const displayBinaryArithmeticApp = () => {
    if (appState.binaryArithmeticApp === false) {
      setappState({ ...appState, binaryArithmeticApp: true });
    } else {
      setappState({ ...appState, binaryArithmeticApp: false });
    }
  };
  const removeBinaryArithmeticApp = () => {
    if (appState.binaryArithmeticApp === true) {
      setappState({ ...appState, binaryArithmeticApp: false });
    }
  };

  const displayHomepage = () => {
    if (appState.programmingCalculator === true) {
      setappState({
        ...appState,
        programmingCalculator: true,
        baseConversionApp: true,
        binaryArithmeticApp: true,
        complementCalculatorApp: true,
      });
    }
  };

  return (
    <div className="App container">
      <header className="row mb-4">
        <nav className="navBarStyle">
          <section className="navBarItem1">
            <div className="navBarLogo">
              <button
                id="programmingCalculatorId"
                className="btn"
                onClick={displayHomepage}
              >
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
              <button
                id="baseConversionApp"
                className="btn"
                onClick={displayBaseConversionApp}
              >
                <h2>
                  X<sup>n&nbsp;</sup>
                  <span className="baseConversion">Base Conversion</span>
                </h2>
              </button>
            </div>
          </section>
          <section className="navBarItem3">
            <div className="navBarLink">
              <button
                id="baseConversionApp"
                className="btn"
                onClick={displayBinaryArithmeticApp}
              >
                <h2>
                  2<sup>n&nbsp;</sup>
                  <span className="baseConversion">Binary Arithmetic</span>
                </h2>
              </button>
            </div>
          </section>
          <section className="navBarItem4">
            <div className="navBarLink">
              <button
                id="complementCalculatorApp"
                className="btn"
                onClick={displayComplementCalculatorApp}
              >
                {" "}
                <h2>
                  <i className="bi bi-plus-slash-minus"></i>&nbsp;
                  <span className="complementCalculator">
                    Complement Calculator
                  </span>
                </h2>{" "}
              </button>
            </div>
          </section>
        </nav>
      </header>
      <div className="row">
        <div className="col-sm-4">
          <div
            className="inputFormContainer mb-5"
            style={{ display: appState.baseConversionApp ? "block" : "none" }}
          >
            <div className="deleteIconStyle" onClick={removeBaseConversionApp}>
              <div>
                <i className="btn bi bi-x-square"></i>
              </div>
            </div>
            <BaseConversion />
          </div>
        </div>

        <div className="col-sm-4">
          <div
            className="inputFormContainer mb-5"
            style={{ display: appState.binaryArithmeticApp ? "block" : "none" }}
          >
            <div
              className="deleteIconStyle"
              onClick={removeBinaryArithmeticApp}
            >
              <div>
                <i className="btn bi bi-x-square "></i>
              </div>
            </div>
            <BinaryArithmetic />
          </div>
        </div>
        <div className="col-sm-4">
          <div
            className="inputFormContainer mb-5"
            style={{
              display: appState.complementCalculatorApp ? "block" : "none",
            }}
          >
            <div
              className="deleteIconStyle"
              onClick={removeComplementCalculatorApp}
            >
              <div>
                <i className="btn bi bi-x-square"></i>
              </div>
            </div>
            <ComplementCalculator />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
