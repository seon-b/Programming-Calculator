import React from "react";
import "./Component.css";

function AppName(props) {
  return (
    <div className="">
      <h3 className="appNameStyle">{props.formName}</h3>
    </div>
  );
}
export default AppName;
