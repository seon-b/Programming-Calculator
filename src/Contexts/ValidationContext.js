import React, { createContext, useState } from "react";

const ValidationContext = createContext();

const ValidationProvider = ({ children }) => {
  const [validation, setValidation] = useState({
    errorMessage: "",
    isErrorPresent: false,
  });

  const checkForErrors = (validationFunction, value) => {
    let validationObject = validationFunction(value);
    const { errorBoolean, message } = validationObject;

    setValidation({
      ...validation,
      isErrorPresent: errorBoolean,
      errorMessage: message,
    });
  };

  return (
    <ValidationContext.Provider value={[validation, checkForErrors]}>
      {children}
    </ValidationContext.Provider>
  );
};

export { ValidationContext, ValidationProvider };
