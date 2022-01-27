import React,{Component} from 'react';
import './InputForm.css'





class BaseComponent2 extends Component{
    static defaultProps = {
        inputName: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
      
    }; 

    constructor(props){
    super(props);
    this.state = {
      base2SelectedChoice1: true,
      base2SelectedChoice2: false,
      base2SelectedChoice3: false,
      base2SelectedChoice4: false,
    
        
    };
    }

  


render(){
    return(
      <div className="form-group mt-2">
        <label htmlFor="selectForm">{this.props.inputName}</label>
        <select  onChange={this.handleChange} className="form-control" id="selectForm">
          <option id="option1" value={this.props.option1}>{this.props.option1}</option>
          <option id="option2" value={this.props.option2}>{this.props.option2}</option>
          <option id="option3" value={this.props.option3}>{this.props.option3}</option>
          <option id="option4" value={this.props.option4}>{this.props.option4}</option>
        </select>
      </div> 

    );
}



}
export default BaseComponent2;