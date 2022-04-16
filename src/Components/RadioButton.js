import React,{Component} from 'react';


class RadioButton extends Component {
    static defaultProps = {
        inputName1: "",
        inputName2: "",
        inputName3: "",
        inputName4: "",
        
       
    }; 

  radioButtonFunction1 = () =>{
      this.props.handleChange1();
  }
  radioButtonFunction2 = () =>{
      this.props.handleChange2();
  }
  radioButtonFunction3 = () =>{
      this.props.handleChange3();
  }
  radioButtonFunction4 = () =>{
      this.props.handleChange4();
  }

    render(){
        return(
          <div className='mt-4'>
            <div className="form-check form-check-inline">
               <label className="form-check-label" htmlFor="inlineRadio1">{this.props.inputName1}</label>
               <input className="form-check-input radioButtonColor" onChange={this.radioButtonFunction1} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
               
            </div>
            <div className="form-check form-check-inline">
               <label className="form-check-label" htmlFor="inlineRadio2">{this.props.inputName2}</label>
               <input className="form-check-input radioButtonColor" onChange={this.radioButtonFunction2} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
               
            </div>
           <div className="form-check form-check-inline">
               <label className="form-check-label" htmlFor="inlineRadio3">{this.props.inputName3}</label>
               <input className="form-check-input radioButtonColor" onChange={this.radioButtonFunction3} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
               
            </div>
           <div className="form-check form-check-inline">
               <label className="form-check-label" htmlFor="inlineRadio4">{this.props.inputName4}</label>
               <input className="form-check-input" onChange={this.radioButtonFunction4} type="radio" name="inlineRadioOptions" id="inlineRadio4" value="option4" />
               
            </div>
         </div>
          
        );

    }
    
}


export default RadioButton;