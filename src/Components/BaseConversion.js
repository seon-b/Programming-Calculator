import React, { useState, useEffect } from "react";
import SubmitButton from "./SubmitButton.js";
import "./Component.css";

const BaseConversion = (props) => {
  const [baseConversionState, setbaseConversionState] = useState({
    userInput: "",
    baseId1: 2,
    baseId2: 2,
    baseConversionOutput: "",
    isErrorPresent: false,
  });

  const [errorStatement, seterrorStatement] = useState("");
  const [isErrorPresent, setisErrorPresent] = useState(false);

  const getUserInput = (e) => {
    setbaseConversionState({
      ...baseConversionState,
      userInput: e.target.value,
    });
  };

  const selectAChoice1 = (e) => {
    if ("Base 2 (Binary)" === e.target.value) {
      //  setbaseId1(2);
      setbaseConversionState({ ...baseConversionState, baseId1: 2 });
    } else if ("Base 8 (Octal)" === e.target.value) {
      //  setbaseId1(8);
      setbaseConversionState({ ...baseConversionState, baseId1: 8 });
    } else if ("Base 10 (Decimal)" === e.target.value) {
      //  setbaseId1(10);
      setbaseConversionState({ ...baseConversionState, baseId1: 10 });
    } else if ("Base 16 (Hexadecimal)" === e.target.value) {
      // setbaseId1(16);
      setbaseConversionState({ ...baseConversionState, baseId1: 16 });
    } else {
    }
  };

  const selectAChoice2 = (e) => {
    if ("Base 2 (Binary)" === e.target.value) {
      //  setbaseId2(2);
      setbaseConversionState({ ...baseConversionState, baseId2: 2 });
    } else if ("Base 8 (Octal)" === e.target.value) {
      // setbaseId2(8);
      setbaseConversionState({ ...baseConversionState, baseId2: 8 });
    } else if ("Base 10 (Decimal)" === e.target.value) {
      //  setbaseId2(10);
      setbaseConversionState({ ...baseConversionState, baseId2: 10 });
    } else if ("Base 16 (Hexadecimal)" === e.target.value) {
      //  setbaseId2(16);
      setbaseConversionState({ ...baseConversionState, baseId2: 16 });
    } else {
    }
  };
  //regex used to validate inputs limit inputs to 1 bit minimum and 8 bit maximum
  const validateBinaryInputs = () => {
    let regex = /(^[0-1]{1,8})$/;

    const isInputValid1 = regex.test(baseConversionState.userInput);

    if (isInputValid1 === true && baseConversionState.baseId1 === 2) {
      return true;
    } else {
      return false;
    }
  };

  const validateOctalInputs = () => {
    let regex = /(^[0-7]{1,8})$/;

    const isInputValid1 = regex.test(baseConversionState.userInput);

    if (isInputValid1 === true && baseConversionState.baseId1 === 8) {
      return true;
    } else {
      return false;
    }
  };

  const validateDecimalInputs = () => {
    let regex = /(^[0-9]{1,8})$/;

    const isInputValid1 = regex.test(baseConversionState.userInput);

    if (isInputValid1 === true && baseConversionState.baseId1 === 10) {
      return true;
    } else {
      return false;
    }
  };

  const validateHexaDecimalInputs = () => {
    let regex = /(^[0-9a-fA-F]{1,8})$/;

    const isInputValid1 = regex.test(baseConversionState.userInput);

    if (isInputValid1 === true && baseConversionState.baseId1 === 16) {
      return true;
    } else {
      return false;
    }
  };
  //displays the error message for 1 second
  const handleError = () => {
    setisErrorPresent(true);
  };

  //Displays error message and removes it after a few seconds
  useEffect(() => {
    setTimeout(() => {
      setisErrorPresent(false);
    }, 2000);
  }, [isErrorPresent]);

  const convertInputToSelectedBase = (
    inputValue,
    currentBase,
    convertToBase
  ) => {
    let isBaseValid;
    let parsedInput = 0;

    inputValue = baseConversionState.userInput;
    currentBase = baseConversionState.baseId1;
    convertToBase = baseConversionState.baseId2;

    //performs base conversion and formats binary outputs
    const convert = () => {
      if (convertToBase === 2) {
        if (baseConversionState.userInput.length > 4) {
          //pads 0's to keep binary input 4 to 8 bits.
          setbaseConversionState({
            ...baseConversionState,
            baseConversionOutput: parsedInput
              .toString(convertToBase)
              .padStart(8, "0"),
          });
        } else {
          setbaseConversionState({
            ...baseConversionState,
            baseConversionOutput: parsedInput
              .toString(convertToBase)
              .padStart(4, "0"),
          });
        }
      } else if (convertToBase === 16) {
        setbaseConversionState({
          ...baseConversionState,
          baseConversionOutput: parsedInput
            .toString(convertToBase)
            .toUpperCase(),
        });
      } else if (convertToBase !== 2 && convertToBase !== 16) {
        setbaseConversionState({
          ...baseConversionState,
          baseConversionOutput: parsedInput.toString(convertToBase),
        });
      } else {
      }
    };

    parsedInput = parseInt(inputValue, currentBase); //converts userInput value to a string type

    if (currentBase === 2) {
      isBaseValid = validateBinaryInputs();

      if (isBaseValid === true) {
        convert();
      } else {
        setbaseConversionState({
          ...baseConversionState,
          baseConversionOutput: "",
        });
        seterrorStatement("Error, invalid binary number");
        handleError();
      }
    } else if (currentBase === 8) {
      isBaseValid = validateOctalInputs();

      if (isBaseValid === true) {
        convert();
      } else {
        setbaseConversionState({
          ...baseConversionState,
          baseConversionOutput: "",
        });
        seterrorStatement("Error, invalid octal number");
        handleError();
      }
    } else if (currentBase === 10) {
      isBaseValid = validateDecimalInputs();

      if (isBaseValid === true) {
        convert();
      } else {
        setbaseConversionState({
          ...baseConversionState,
          baseConversionOutput: "",
        });
        seterrorStatement("Error, invalid decimal number");
        handleError();
      }
    } else if (currentBase === 16) {
      isBaseValid = validateHexaDecimalInputs();

      if (isBaseValid === true) {
        convert();
      } else {
        setbaseConversionState({
          ...baseConversionState,
          baseConversionOutput: "",
        });
        seterrorStatement("Error, invalid hexadecimal number");
        handleError();
      }
    } else {
      setbaseConversionState({
        ...baseConversionState,
        baseConversionOutput: "",
      });
      seterrorStatement("Error, please enter a valid number");
      handleError();
    }
  };

  return (
    <>
      <form className="component">
        <div className="componentTitle inputFieldMargin">
          <h3 className="componentName">Base Conversion</h3>
          <span onClick={props.handleClick}>
            <i className="bi bi-x-square"></i>
          </span>
        </div>

        <div className="inputFieldMargin">
          <div>
            <label htmlFor="selectForm">Convert From</label>
          </div>
          <select
            onChange={selectAChoice1}
            className="inputFieldWidth inputFieldPadding"
            id="selectForm"
          >
            <option id="option1" value="Base 2 (Binary)">
              Base 2 (Binary)
            </option>
            <option id="option2" value="Base 8 (Octal)">
              Base 8 (Octal)
            </option>
            <option id="option3" value="Base 10 (Decimal)">
              Base 10 (Decimal)
            </option>
            <option id="option4" value="Base 16 (Hexadecimal)">
              Base 16 (Hexadecimal)
            </option>
          </select>
        </div>

        <div className="inputFieldMargin">
          <div>
            <label htmlFor="selectForm">Convert To</label>
          </div>
          <select
            onChange={selectAChoice2}
            className="inputFieldWidth inputFieldPadding"
            id="selectForm"
          >
            <option id="option1" value="Base 2 (Binary)">
              Base 2 (Binary)
            </option>
            <option id="option2" value="Base 8 (Octal)">
              Base 8 (Octal)
            </option>
            <option id="option3" value="Base 10 (Decimal)">
              Base 10 (Decimal)
            </option>
            <option id="option4" value="Base 16 (Hexadecimal)">
              Base 16 (Hexadecimal)
            </option>
          </select>
        </div>

        <div className="inputFieldMargin">
          <div>
            <label htmlFor="inputField1">Number</label>
          </div>
          <input
            type="text"
            className="inputFieldWidth inputFieldPadding"
            id="inputfield1"
            onChange={getUserInput}
          />
        </div>
        <div className="inputFieldMargin">
          <div className="">
            <div className="outputAreastyle">
              <div>
                <label htmlFor="conversionOutputArea">Conversion</label>
              </div>
              <textarea
                className="inputFieldWidth"
                id="conversionOutputArea"
                rows="4"
                value={baseConversionState.baseConversionOutput}
                disabled
              ></textarea>
            </div>
          </div>
        </div>

        <SubmitButton
          inputName="Convert"
          handleClick={convertInputToSelectedBase}
        />
      </form>
    </>
  );
};

export default BaseConversion;
