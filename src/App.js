import React, { useState } from "react";
import BaseConversion from "./Components/BaseConversion";
import ComplementCalculator from "./Components/ComplementCalculator";
import BinaryArithmetic from "./Components/BinaryArithmetic";
import "./Components/Component.css";

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
    setappState({
      ...appState,
      programmingCalculator: true,
      baseConversionApp: true,
      binaryArithmeticApp: true,
      complementCalculatorApp: true,
    });
  };

  return (
    <>
      <nav className="navBarStyle">
        <section className="navBarItem1">
          <div className="navBarLogo">
            <button
              id="programmingCalculatorId"
              className="button"
              onClick={displayHomepage}
            >
              <h1>
                <i className="bi bi-calculator"></i>
                <span className="navBarTitleText">Programming Calculator</span>
              </h1>
            </button>
          </div>
        </section>
        <section className="navBarItem2">
          <div className="navBarLink">
            <button
              id="baseConversionApp"
              className="button"
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
              className="button"
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
              className="button"
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

      <div className="componentContainer">
        <div
          className={`inputFormContainer ${
            appState.baseConversionApp ? "" : "hideComponent"
          }`}
        >
          <BaseConversion handleClick={removeBaseConversionApp} />
        </div>

        <div
          className={`inputFormContainer ${
            appState.binaryArithmeticApp ? "" : "hideComponent"
          }`}
        >
          <BinaryArithmetic handleClick={removeBinaryArithmeticApp} />
        </div>

        <div
          className={`inputFormContainer ${
            appState.complementCalculatorApp ? "" : "hideComponent"
          }`}
        >
          <ComplementCalculator handleClick={removeComplementCalculatorApp} />
        </div>
      </div>
    </>
  );
};

export default App;
