import React,{Component} from 'react';
import './InputForm.css'





class InputSelect extends Component{
    static defaultProps = {
        inputName: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        option5: "",
    }; 

    constructor(props){
    super(props);
    this.state = {
        choice1: this.props.option1,
        choice2: this.props.option2,
        choice3: this.props.option3,
        choice4: this.props.option4,
        choice5: this.props.option5,
    };
    }

render(){
    return(
      <div class="form-group mt-2">
        <label htmlFor="exampleFormControlSelect2">{this.props.inputName}</label>
        <select multiple className="form-control" id="exampleFormControlSelect2">
          <option>{this.state.choice1}</option>
          <option>{this.state.choice2}</option>
          <option>{this.state.choice3}</option>
          <option>{this.state.choice4}</option>
          <option>{this.state.choice5}</option>
        </select>
      </div> 

    )
}



}
export default InputSelect;