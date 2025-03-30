import React from "react";

const ErrorComponent = (props) => {
  return (
    <>
      <div
        className={`errorComponent ${
          props.isErrorPresent ? "" : "hideComponent"
        }`}
        role="alert"
      >
        {props.errorStatement}
      </div>
    </>
  );
};

export default ErrorComponent;
