import React from "react";

const ErrorComponent = (props) => {
  const { isErrorPresent, errorMessage } = props;

  return (
    <>
      <div
        className={`errorComponent ${
          isErrorPresent === true ? "displayError" : ""
        }`}
        role="alert"
      >
        {isErrorPresent === true ? errorMessage : ""}
      </div>
    </>
  );
};

export default ErrorComponent;
