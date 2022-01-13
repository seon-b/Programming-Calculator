import React,{Component} from 'react';
import './InputForm.css'





class InputText extends Component{
    static defaultProps = {
        inputName: "",
      
    }; 

    // constructor(props){
    //   super(props);
    //   this.state = {
    //     inputText: this.props.inputName,
        
    //   };
    // }
   
    render(){
      return(
        <div className="form-group mt-2">
           <label htmlFor="inputField1">{this.props.inputName}</label>
           <input type="text" className="form-control" id="inputfield1" onChange={this.props.handleChange1} />
        </div>

    )
    }



}
export default InputText;