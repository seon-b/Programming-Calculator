import React,{Component} from 'react';
import './BinaryArithmetic.css'
import AppName from './AppName';
import InputText from './InputText.js'
import SubmitButton from './SubmitButton.js';
import OutputTextArea from './OutputTextArea.js'
import RadioButton from './RadioButton';


class BinaryArithmetic extends Component {
  constructor(props){
      super(props);
      this.state = {
          selectedOperator: "Addition",
          selectedRadioInput1: false,
          selectedRadioInput2: false,
          selectedRadioInput3: false,
          binaryNumber1: "",
          binaryNumber2:""
      }
  }
 
  
  changeSubmitButton1 = () =>{
    this.setState({selectedOperator:"Addition",selectedRadioInput1: true, selectedRadioInput2: false,selectedRadioInput3: false,})
  }
  changeSubmitButton2 = () =>{
    this.setState({selectedOperator:"Multiplication",selectedRadioInput1: false, selectedRadioInput2: true, selectedRadioInput3: false,})
  }
  changeSubmitButton3 = () =>{
    this.setState({selectedOperator:"Division",selectedRadioInput1: false, selectedRadioInput2: false, selectedRadioInput3: true,})
  }
  
  getInputData1 = (e) =>{
    this.setState({binaryNumber1: e.target.value});
    console.log(this.state.binaryNumber1);
 }
  getInputData2 = (e) =>{
    this.setState({binaryNumber2:e.target.value})
    console.log(this.state.binaryNumber2);
 }

  render(){

      return(
      <div className='inputFormContainer mb-5'>
         <form className='inputFormBaseConversion'>
           <AppName formName="Binary Arithmetic" />
           <InputText inputName="Binary Number" handleChange1={this.getInputData1}/>
           <InputText inputName="Binary Number" handleChange1={this.getInputData2}/>
           <RadioButton inputName1="Additon" inputName2="Multiplication" inputName3="Division" 
           handleChange1={this.changeSubmitButton1} 
           handleChange2={this.changeSubmitButton2}
           handleChange3={this.changeSubmitButton3} />
           <p className='mt-2'>Note: To Subtract place the 2's complement of the number you want to subtract and then use addition</p>
           <OutputTextArea inputName="solution" solution=""/>
           <SubmitButton inputName={`${this.state.selectedOperator}`} />
         </form>
 
        
      
        
        
      </div>
      );
  }
    
}


export default BinaryArithmetic;