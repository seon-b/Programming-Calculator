import React,{Component} from 'react';


class RadioButton extends Component {
    static defaultProps = {
        inputName1: "",
        inputName2: "",
        inputName3: "",
        inputName4: "",
       
    }; 

  constructor(props){
    super(props);
    this.state = {
      radioInput1: this.props.inputName1,
      radioInput2: this.props.inputName2,
      radioInput3: this.props.inputName3,
   
    };
   
  }
    render(){
        return(
          <div className='mt-4'>
            <div className="form-check form-check-inline">
               <label className="form-check-label" forHtml="inlineRadio1">{this.state.radioInput1}</label>
               <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
               
            </div>
            <div className="form-check form-check-inline">
               <label className="form-check-label" forHtml="inlineRadio2">{this.state.radioInput2}</label>
               <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
               
            </div>
           <div className="form-check form-check-inline">
               <label className="form-check-label" forHtml="inlineRadio3">{this.state.radioInput3}</label>
               <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
               
            </div>
         </div>
          
        );

    }
    
}


export default RadioButton;