import React,{Component} from 'react';
import './BinaryArithmetic.css'
import AppName from './AppName';
import InputText from './InputText.js'
import SubmitButton from './SubmitButton.js';
// import OutputTextArea from './OutputTextArea.js'
import RadioButton from './RadioButton';


class BinaryArithmetic extends Component {
  constructor(props){
      super(props);
      this.state = {
          selectedOperator: "Add",
          selectedRadioInput1: false,
          selectedRadioInput2: false,
          selectedRadioInput3: false,
          binaryNumber1:"",
          binaryNumber1Length: 0,
          binaryNumber2:"",
          binaryNumber2Length: 0,
          answer: "",
          answerLength:8,
      }
  }
 
  // These functions are passed as props to modify the text in the SubmitButton
  changeSubmitButton1 = () =>{
    this.setState({selectedOperator:"Add",selectedRadioInput1: true, selectedRadioInput2: false, selectedRadioInput3: false,})
  }

  changeSubmitButton2 = () =>{
    this.setState({selectedOperator:"Multiply",selectedRadioInput1: false, selectedRadioInput2: true, selectedRadioInput3: false,})
  }

  changeSubmitButton3 = () =>{
    this.setState({selectedOperator:"Divide",selectedRadioInput1: false, selectedRadioInput2: false, selectedRadioInput3: true,})
  }
  
  // These functions get the InputText component's text input field data and checks that online binary numbers are present
  getInputData1 = (e) =>{
    this.setState({binaryNumber1: e.target.value, binaryNumber1Length: e.target.value.length});
    console.log(this.state.binaryNumber1);
 }
  getInputData2 = (e) =>{
    this.setState({binaryNumber2: e.target.value, binaryNumber2Length: e.target.value.length})
    console.log(this.state.binaryNumber2);
 }


 //This function executes the selected operation
 calculate = () => {
   if(this.state.selectedOperator === "Add") {
     this.addBinaryNumber();
   }
  //  console.log("function working");
 }

 addBinaryNumber = () =>{
  
  let num1 = parseInt(this.state.binaryNumber1, 2);
  let num2 = parseInt(this.state.binaryNumber2, 2);
  let sumStr = "";
  

  let sum = num1 + num2;
  sumStr = sum.toString(2);
  console.log(this.state.binaryNumber1);
  console.log(this.state.binaryNumber2);
  this.setState({answerLength: sumStr.length, answer: sumStr});
  console.log(sumStr);
  console.log("function is working", this.state.answer);

 
 }


 padBits = (num, padLength) =>{
   if(padLength === 8){
     num.padStart(padLength,'0');
     return num;
   }else if(padLength < 8){
     let padDiference = 8 - padLength;
     num.padStart(padDiference,'0');
     return num;
   }else{

   }


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
          
           <div className='mt-3'>
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">{this.props.inputName}</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={this.state.answer} disabled></textarea>
               </div>
             </div>
         </div>
           <SubmitButton inputName={`${this.state.selectedOperator}`} handleClick={this.calculate} />
         </form>
 
        
      
        
        
      </div>
      );
  }
    
}


export default BinaryArithmetic;