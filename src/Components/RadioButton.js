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
      selectedRadioInput1: false,
      selectedRadioInput2: false,
      SelectedRadioInput3: false,
   
    };

  }
  
  // These functions will change the state of the radio buttons
  switchRadioButton1 = () =>{
    this.setState({selectedRadioInput1: true})

  }

  switchRadioButton2= () =>{
    this.setState({selectedRadioInput2: true})
    
  }

  switchRadioButton3 = () =>{
    this.setState({selectedRadioInput3: true})
   
  }

    render(){
        return(
          <div className='mt-4'>
            <div className="form-check form-check-inline">
               <label className="form-check-label" htmlFor="inlineRadio1">{this.props.inputName1}</label>
               <input className="form-check-input" onChange={this.switchRadioButton1} type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
               
            </div>
            <div className="form-check form-check-inline">
               <label className="form-check-label" htmlFor="inlineRadio2">{this.props.inputName2}</label>
               <input className="form-check-input" onChange={this.switchRadioButton2} type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
               
            </div>
           <div className="form-check form-check-inline">
               <label className="form-check-label" htmlFor="inlineRadio3">{this.props.inputName3}</label>
               <input className="form-check-input" onChange={this.switchRadioButton3} type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3" />
               
            </div>
         </div>
          
        );

    }
    
}


export default RadioButton;