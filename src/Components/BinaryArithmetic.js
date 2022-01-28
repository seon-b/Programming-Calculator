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
          answerName: "Sum",
          selectedRadioInput1: false,
          selectedRadioInput2: false,
          selectedRadioInput3: false,
          selectedRadioInput4: false,
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
    this.setState({selectedOperator:"Add", answerName: "Sum", selectedRadioInput1: true, selectedRadioInput2: false, selectedRadioInput3: false,selectedRadioInput4: false,})
  }
  changeSubmitButton2 = () =>{
    this.setState({selectedOperator:"Subtract", answerName: "Difference", selectedRadioInput1: false, selectedRadioInput2: true, selectedRadioInput3: false,selectedRadioInput4: false,})
  }

  changeSubmitButton3 = () =>{
    this.setState({selectedOperator:"Multiply", answerName: "Product", selectedRadioInput1: false, selectedRadioInput2: false, selectedRadioInput3: true,selectedRadioInput4: false,})
  }

  changeSubmitButton4 = () =>{
    this.setState({selectedOperator:"Divide", answerName: "Quotient", selectedRadioInput1: false, selectedRadioInput2: false, selectedRadioInput3: false,selectedRadioInput4: true,})
  }
  
  // These functions get the InputText component's text input field data and checks that online binary numbers are present
  getInputData1 = (e) =>{
    this.setState({binaryNumber1: e.target.value.padStart(8,'0'), binaryNumber1Length: e.target.value.length});
    console.log(this.state.binaryNumber1);
   
 }
  getInputData2 = (e) =>{
    this.setState({binaryNumber2: e.target.value.padStart(8,'0'), binaryNumber2Length: e.target.value.length})
    
 }


 //This function executes the selected operation
 calculate = () => {
   if(this.state.selectedOperator === "Add") {
     this.addBinaryNumber();
   }else if(this.state.selectedOperator === "Subtract") {
    this.subtractBinaryNumber();
   }else if(this.state.selectedOperator === "Multiply"){
     this.multiplyBinaryNumber();
   }else if(this.state.selectedOperator === "Divide"){
     this.divideBinaryNumber();
   }else{

   }
  
 }

 //Each function performs the indicated operation in binary and converts the answer into a string and sets the state of the answer,
 //and answerLength
 addBinaryNumber = () =>{
  
  let num1 = parseInt(this.state.binaryNumber1, 2);
  let num2 = parseInt(this.state.binaryNumber2, 2);
  let sumStr = "";
  

  let sum = num1 + num2;
  sumStr = sum.toString(2);
  this.setState({answerLength: sumStr.length, answer: sumStr});

 
 }

 subtractBinaryNumber = () =>{
  
  let num1 = parseInt(this.state.binaryNumber1, 2);
  let num2 = parseInt(this.state.binaryNumber2, 2);
  let differenceStr = "";
  

  let difference = num1 - num2;
  differenceStr = difference.toString(2);
  this.setState({answerLength: differenceStr.length, answer: differenceStr});

 
 }

 multiplyBinaryNumber = () =>{
  
  let num1 = parseInt(this.state.binaryNumber1, 2);
  let num2 = parseInt(this.state.binaryNumber2, 2);
  let productStr = "";
  

  let product = num1 * num2;
  productStr = product.toString(2);
  this.setState({answerLength: productStr.length, answer: productStr});

 
 }
 divideBinaryNumber = () =>{
  
  let num1 = parseInt(this.state.binaryNumber1, 2);
  let num2 = parseInt(this.state.binaryNumber2, 2);
  let quotientStr = "";
  

  let quotient = num1 / num2;
  quotientStr = quotient.toString(2);
  this.setState({answerLength: quotientStr.length, answer: quotientStr});

 
 }



  render(){

      return(
      <div className='inputFormContainer mb-5'>
         <form className='inputFormBaseConversion'>
           <AppName formName="Binary Arithmetic" />
           <InputText inputName="Binary Number" handleChange1={this.getInputData1}/>
           <InputText inputName="Binary Number" handleChange1={this.getInputData2}/>
           <RadioButton inputName1="Add" inputName2="Subtract" inputName3="Multiply" inputName4="Divide"
           handleChange1={this.changeSubmitButton1} 
           handleChange2={this.changeSubmitButton2}
           handleChange3={this.changeSubmitButton3} 
           handleChange4={this.changeSubmitButton4}/>
          
           <div className='mt-3'>
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">{this.state.answerName}</label>
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