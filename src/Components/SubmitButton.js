import React,{Component} from 'react';
import './SubmitButton.css'



class SubmitButton extends Component{
    static defaultProps = {
        inputName: "Submit",
      
    }; 

    constructor(props){
    super(props);
    this.state = {
        inputText: this.props.inputName,
        
    };
    }

    render(){
        return(
            <div className='submitButtonComponent mt-3'> 
              <button type="button" className="btn btn-primary">{this.state.inputText}</button>
            </div>
        );
    }
}

export default SubmitButton;