import React, { Component } from "react";
import "./Component.css";

class SubmitButton extends Component {
  static defaultProps = {
    inputName: "Submit",
  };

  constructor(props) {
    super(props);
    this.state = {
      submitButtonClicked: false,
    };
  }

  submitButtonFunction1 = () => {
    this.props.handleClick();
  };

  render() {
    return (
      <div className="submitButtonComponent">
        <button
          type="button"
          className="button submitButtonColor"
          onClick={this.submitButtonFunction1}
        >
          {this.props.inputName}
        </button>
      </div>
    );
  }
}

export default SubmitButton;
