import React,{Component} from 'react';
import './SubmitButton.css'



class SubmitButton extends Component{
    static defaultProps = {
        inputName: "Submit",
      
    }; 

    constructor(props){
    super(props);
    this.state = {
        submitButtonClicked: false,

        
    };
    }

    buttonClicked = () => {
        this.setState({submitButtonClicked: true});
       
    }

    render(){
        return(
          <div className='submitButtonComponent mt-3'> 
            <button type="button" className="btn btn-primary" onClick={this.buttonClicked}>{this.props.inputName}</button>
          </div>
        );
    }
}

export default SubmitButton;