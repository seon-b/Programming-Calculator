import React, { createContext, useState } from "react";

const ErrorContext = createContext(null);

const ErrorProvider = ({ children }) => {
  const [error, setError] = useState({
    isErrorPresent: false,
    errorMessage: "",
  });

  return (
    <ErrorContext.Provider value={[error, setError]}>
      {children}
    </ErrorContext.Provider>
  );
};

export { ErrorContext, ErrorProvider };
