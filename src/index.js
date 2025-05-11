import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ErrorProvider } from "./Contexts/ErrorContext";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(
  <ErrorProvider>
    <App />
  </ErrorProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
