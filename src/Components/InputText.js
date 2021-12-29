import React,{Component} from 'react';
import './InputForm.css'





class InputText extends Component{
    static defaultProps = {
        inputName: "",
      
    }; 

    constructor(props){
      super(props);
      this.state = {
        inputText: this.props.inputName,
        
      };
    }
  
    render(){
      return(
        <div className="form-group mt-2">
           <label for="inputField1">{this.state.inputText}</label>
           <input type="text" className="form-control" id="inputfield1" />
        </div>

    )
    }



}
export default InputText;