import React, { useState, useEffect, useContext } from "react";
import SubmitButton from "./SubmitButton.js";
import "./Component.css";
import { ErrorContext } from "../Contexts/ErrorContext.js";

const ComplementCalculator = (props) => {
  const [complementCalculatorState, setcomplementCalculatorState] = useState({
    binaryNumber: "",
    complement1: "",
    complement2: "",
  });

  const [error, setError] = useContext(ErrorContext);

  const getUserInput = (e) => {
    setcomplementCalculatorState({
      ...complementCalculatorState,
      binaryNumber: e.target.value,
    });

    if (complementCalculatorState.binaryNumber === 0) {
      setcomplementCalculatorState({
        ...complementCalculatorState,
        setComplement1: "00000000",
        setComplement2: "00000000",
      });
    }
  };

  const validateBinaryInputs = () => {
    let regex = /(^[0-1]{1,8})$/;

    const isInputValid1 = regex.test(complementCalculatorState.binaryNumber);

    if (isInputValid1 === true) {
      return true;
    } else {
      return false;
    }
  };

  const calculateComplements = () => {
    let binaryNumberArray = [];
    let binaryNumberInverse = "";

    if (!complementCalculatorState.binaryNumber) {
      setError((currentState) => ({
        ...currentState,
        errorMessage: "Input fields cannot be empty",
      }));
      handleError();

      return;
    }

    if (complementCalculatorState.binaryNumber.length > 8) {
      setError((currentState) => ({
        ...currentState,
        errorMessage: "Numbers cannot be more than 8 digits",
      }));
      handleError();

      return;
    }

    let isBinaryNumValid = validateBinaryInputs();

    if (isBinaryNumValid === true) {
      //formats the binary output to displat an 8-bit value
      let formatBinaryNumber;
      formatBinaryNumber = complementCalculatorState.binaryNumber.padStart(
        8,
        "0"
      );

      for (let i = 0; i < formatBinaryNumber.length; i++) {
        if (formatBinaryNumber[i] === "0") {
          binaryNumberArray.push("1");
        } else if (formatBinaryNumber[i] === "1") {
          binaryNumberArray.push("0");
        } else {
        }
      }
    } else {
      setcomplementCalculatorState({
        ...complementCalculatorState,
        setComplement1: "",
        setComplement2: "",
      });
      setError((currentState) => ({
        ...currentState,
        errorMessage: "Error, invalid binary number",
      }));
      handleError();
    }

    if (complementCalculatorState.binaryNumber.length === 0) {
    } else {
      binaryNumberInverse = binaryNumberArray.join("");
      let binaryNumberInverseSum =
        parseInt(binaryNumberInverse, 2) + parseInt("1", 2);

      setcomplementCalculatorState({
        ...complementCalculatorState,
        complement1: binaryNumberInverse,
        complement2: binaryNumberInverseSum.toString(2),
      });
    }
  };

  const handleError = () => {
    setError((currentState) => ({ ...currentState, isErrorPresent: true }));
  };

  useEffect(() => {
    let timerId = setTimeout(() => {
      setError((currentState) => ({ ...currentState, isErrorPresent: false }));
    }, 2000);
    return () => clearTimeout(timerId);
  }, [error]);

  return (
    <>
      <form className="component inputFormBaseConversion">
        <div className="componentTitle inputFieldMargin">
          <h3 className="componentName">Complement</h3>
          <span onClick={props.handleClick}>
            <i className="bi bi-x-square"></i>
          </span>
        </div>

        <div className="form-group mt-2">
          <div>
            <label htmlFor="inputField1">Binary Number</label>
          </div>
          <input
            type="text"
            className="inputFieldWidth inputFieldPadding"
            id="inputfield1"
            onChange={getUserInput}
          />
        </div>
        <div className="complementInputFieldGroupMargin">
          <div className="inputFieldMargin">
            <div className="">
              <div className="outputAreastyle">
                <div>
                  <label htmlFor="conversionOutputArea">1's Complement</label>
                </div>
                <textarea
                  className="inputFieldWidth"
                  id="conversionOutputArea"
                  rows="3"
                  value={complementCalculatorState.complement1}
                  disabled
                ></textarea>
              </div>
            </div>
          </div>
          <div className="inputFieldMargin">
            <div className="">
              <div className="outputAreastyle">
                <div>
                  <label htmlFor="conversionOutputArea">2's Complement</label>
                </div>
                <textarea
                  className="inputFieldWidth"
                  id="conversionOutputArea"
                  rows="3"
                  value={complementCalculatorState.complement2}
                  disabled
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <SubmitButton inputName="Convert" handleClick={calculateComplements} />
      </form>
    </>
  );
};

export default ComplementCalculator;
