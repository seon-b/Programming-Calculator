import React, { useState, useEffect, useContext } from "react";
import SubmitButton from "./SubmitButton";
import "./Component.css";
import { ErrorContext } from "../Contexts/ErrorContext";

const BinaryArithmetic = (props) => {
  const [binaryArithmeticState, setbinaryArithmeticState] = useState({
    selectedOperator: "Add",
    answerName: "Sum",
    binaryNumber1: "",
    binaryNumber2: "",
    answer: "",
    negativeDifference: "",
  });

  const [error, setError] = useContext(ErrorContext);

  const changeSubmitButton1 = () => {
    setbinaryArithmeticState({
      ...binaryArithmeticState,
      selectedOperator: "Add",
      answerName: "Sum",
    });
  };

  const changeSubmitButton2 = () => {
    setbinaryArithmeticState({
      ...binaryArithmeticState,
      selectedOperator: "Subtract",
      answerName: "Difference",
    });
  };

  const changeSubmitButton3 = () => {
    setbinaryArithmeticState({
      ...binaryArithmeticState,
      selectedOperator: "Multiply",
      answerName: "Product",
    });
  };

  const changeSubmitButton4 = () => {
    setbinaryArithmeticState({
      ...binaryArithmeticState,
      selectedOperator: "Divide",
      answerName: "Quotient",
    });
  };

  const getInputData1 = (e) => {
    setbinaryArithmeticState({
      ...binaryArithmeticState,
      binaryNumber1: e.target.value,
    });
  };

  const getInputData2 = (e) => {
    setbinaryArithmeticState({
      ...binaryArithmeticState,
      binaryNumber2: e.target.value,
    });
  };

  const validateBinaryInputs = () => {
    let regex = /(^[0-1]{1,8})$/;

    const isInputValid1 = regex.test(binaryArithmeticState.binaryNumber1);
    const isInputValid2 = regex.test(binaryArithmeticState.binaryNumber2);

    if (isInputValid1 === true && isInputValid2 === true) {
      return true;
    } else {
      return false;
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

  const addBinaryNumber = () => {
    let num1 = parseInt(binaryArithmeticState.binaryNumber1, 2);
    let num2 = parseInt(binaryArithmeticState.binaryNumber2, 2);
    let sumStr = "";

    let sum = num1 + num2;
    sumStr = sum.toString(2);

    if (sumStr.length > 4) {
      setbinaryArithmeticState({
        ...binaryArithmeticState,
        answer: sumStr.padStart(8, "0"),
      });
    } else {
      setbinaryArithmeticState({
        ...binaryArithmeticState,
        answer: sumStr.padStart(4, "0"),
      });
    }
  };

  const subtractBinaryNumber = () => {
    let num1 = parseInt(binaryArithmeticState.binaryNumber1, 2);
    let num2 = parseInt(binaryArithmeticState.binaryNumber2, 2);
    let differenceStr = "";

    let difference = num1 - num2;

    if (difference < 0) {
      //represents a negative difference in 2's complement
      difference = difference * -1;

      differenceStr = difference.toString(2).padStart(8, "0");
      calculateComplements();

      setbinaryArithmeticState({
        ...binaryArithmeticState,
        negativeDifference: differenceStr,
      });
    } else {
      differenceStr = difference.toString(2);

      if (differenceStr.length > 4) {
        setbinaryArithmeticState({
          ...binaryArithmeticState,
          answer: differenceStr.padStart(8, "0"),
        });
      } else {
        setbinaryArithmeticState({
          ...binaryArithmeticState,
          answer: differenceStr.padStart(4, "0"),
        });
      }
    }
  };

  const multiplyBinaryNumber = () => {
    let num1 = parseInt(binaryArithmeticState.binaryNumber1, 2);
    let num2 = parseInt(binaryArithmeticState.binaryNumber2, 2);
    let productStr = "";

    let product = num1 * num2;
    productStr = product.toString(2);

    if (productStr.length > 4) {
      setbinaryArithmeticState({
        ...binaryArithmeticState,
        answer: productStr.padStart(8, "0"),
      });
    } else {
      setbinaryArithmeticState({
        ...binaryArithmeticState,
        answer: productStr.padStart(4, "0"),
      });
    }
  };

  const divideBinaryNumber = () => {
    let num1 = parseInt(binaryArithmeticState.binaryNumber1, 2);
    let num2 = parseInt(binaryArithmeticState.binaryNumber2, 2);
    let quotientStr = "";

    let quotient = num1 / num2;
    quotientStr = Math.floor(quotient).toString(2);

    if (quotientStr.length > 4) {
      setbinaryArithmeticState({
        ...binaryArithmeticState,
        answer: quotientStr.padStart(8, "0"),
      });
    } else {
      setbinaryArithmeticState({
        ...binaryArithmeticState,
        answer: quotientStr.padStart(4, "0"),
      });
    }
  };

  //This function executes the selected operation
  const calculate = () => {
    let areInputsValid = false;
    areInputsValid = validateBinaryInputs();

    if (
      !binaryArithmeticState.binaryNumber1 ||
      !binaryArithmeticState.binaryNumber2
    ) {
      setError((currentState) => ({
        ...currentState,
        errorMessage: "Error, input fields cannot be empty",
      }));
      handleError();

      return;
    }

    if (
      binaryArithmeticState.binaryNumber1.length > 8 ||
      binaryArithmeticState.binaryNumber2.length > 8
    ) {
      setError((currentState) => ({
        ...currentState,
        errorMessage: "Error, numbers cannot be more than 8 digits",
      }));
      handleError();

      return;
    }

    if (areInputsValid === true) {
      if (binaryArithmeticState.selectedOperator === "Add") {
        addBinaryNumber();
      } else if (binaryArithmeticState.selectedOperator === "Subtract") {
        subtractBinaryNumber();
      } else if (binaryArithmeticState.selectedOperator === "Multiply") {
        multiplyBinaryNumber();
      } else if (binaryArithmeticState.selectedOperator === "Divide") {
        divideBinaryNumber();
      } else {
      }
    } else {
      setbinaryArithmeticState({ ...binaryArithmeticState, answer: "" });
      setError((currentState) => ({
        ...currentState,
        errorMessage: "Error, invalid binary number",
      }));
      handleError();
    }
  };

  const calculateComplements = () => {
    let binaryNumberArray = [];
    let binaryNumberInverse = "";

    for (let i = 0; i < binaryArithmeticState.negativeDifference.length; i++) {
      if (binaryArithmeticState.negativeDifference[i] === "0") {
        binaryNumberArray.push("1");
      } else if (binaryArithmeticState.negativeDifference[i] === "1") {
        binaryNumberArray.push("0");
      } else {
      }
    }

    binaryNumberInverse = binaryNumberArray.join("");
    let binaryNumberInverseSum =
      parseInt(binaryNumberInverse, 2) + parseInt("1", 2);

    let signedNumberOutput = binaryNumberInverseSum.toString(2);

    setbinaryArithmeticState({
      ...binaryArithmeticState,
      answer: `Answer Negative: ${signedNumberOutput}`,
    });
  };

  return (
    <>
      <form className="component inputFormBaseConversion">
        <div className="componentTitle inputFieldMargin">
          <h3 className="componentName">Arithmetic</h3>
          <span onClick={props.handleClick}>
            <i className="bi bi-x-square"></i>
          </span>
        </div>

        <div className="inputFieldMargin">
          <div>
            <label htmlFor="inputField1">Binary Number</label>
          </div>
          <input
            type="text"
            className="inputFieldWidth inputFieldPadding"
            id="inputfield1"
            onChange={getInputData1}
          />
        </div>
        <div className="inputFieldMargin">
          <div>
            <label htmlFor="inputField1">Binary Number</label>
          </div>
          <input
            type="text"
            className="inputFieldWidth inputFieldPadding"
            id="inputfield1"
            onChange={getInputData2}
          />
        </div>

        <div className="radioButtonContainer inputFieldMargin">
          <span className="radioGroup">
            <label className="" htmlFor="inlineRadio1">
              Add
            </label>

            <input
              className="radioButtonColor"
              onChange={changeSubmitButton1}
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
            />
          </span>
          <span className="radioGroup">
            <label className="" htmlFor="inlineRadio2">
              Subtract
            </label>

            <input
              className="radioButtonColor"
              onChange={changeSubmitButton2}
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
            />
          </span>
          <span className="radioGroup">
            <label className="" htmlFor="inlineRadio3">
              Multiply
            </label>

            <input
              className="radioButtonColor"
              onChange={changeSubmitButton3}
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
            />
          </span>
          <span className="radioGroup">
            <label className="" htmlFor="inlineRadio4">
              Divide
            </label>
            <input
              className="radioButtonColor"
              onChange={changeSubmitButton4}
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio4"
              value="option4"
            />{" "}
          </span>
        </div>

        <div className="inputFieldMargin">
          <div className="">
            <div className="outputAreastyle">
              <div>
                <label htmlFor="conversionOutputArea">
                  {binaryArithmeticState.answerName}
                </label>
              </div>
              <textarea
                className="inputFieldWidth"
                id="conversionOutputArea"
                rows="3"
                value={binaryArithmeticState.answer}
                disabled
              ></textarea>
            </div>
          </div>
        </div>

        <div className="submitButtonComponent">
          <SubmitButton
            inputName={binaryArithmeticState.selectedOperator}
            handleClick={calculate}
          />
        </div>
      </form>
    </>
  );
};

export default BinaryArithmetic;
