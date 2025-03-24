import React, { Component } from "react";
import "./Component.css";

class RadioButton extends Component {
  static defaultProps = {
    inputName1: "",
    inputName2: "",
    inputName3: "",
    inputName4: "",
  };

  radioButtonFunction1 = () => {
    this.props.handleChange1();
  };
  radioButtonFunction2 = () => {
    this.props.handleChange2();
  };
  radioButtonFunction3 = () => {
    this.props.handleChange3();
  };
  radioButtonFunction4 = () => {
    this.props.handleChange4();
  };

  render() {
    return (
      <div className="radioButtonContainer">
        <label className="" htmlFor="inlineRadio1">
          {this.props.inputName1}
        </label>
        <input
          className="radioButtonColor"
          onChange={this.radioButtonFunction1}
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />

        <label className="" htmlFor="inlineRadio2">
          {this.props.inputName2}
        </label>
        <input
          className="radioButtonColor"
          onChange={this.radioButtonFunction2}
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />

        <label className="" htmlFor="inlineRadio3">
          {this.props.inputName3}
        </label>
        <input
          className=" radioButtonColor"
          onChange={this.radioButtonFunction3}
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="option3"
        />

        <label className="" htmlFor="inlineRadio4">
          {this.props.inputName4}
        </label>
        <input
          className=""
          onChange={this.radioButtonFunction4}
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio4"
          value="option4"
        />
      </div>
    );
  }
}

export default RadioButton;
