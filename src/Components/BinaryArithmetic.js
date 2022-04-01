import React,{Component} from 'react';
import './BinaryArithmetic.css'
import AppName from './AppName';
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
          answerType: "",
          negativeDifference: "",
          negativeAnswer: "",
          
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
  
  // These functions get the InputText component's text input field data and checks that only binary numbers are present
  getInputData1 = (e) =>{
      this.setState({binaryNumber1: e.target.value.padStart(8,'0'), binaryNumber1Length: e.target.value.length});
      console.log(`Binary Number 1: ${this.state.binaryNumber1} Binary Number 1.length: ${this.state.binaryNumber1Length}`);
   }

  getInputData2 = (e) =>{
    
      this.setState({binaryNumber2: e.target.value.padStart(8,'0'), binaryNumber2Length: e.target.value.length});
      console.log(`Binary Number 1: ${this.state.binaryNumber1} Binary Number 1.length: ${this.state.binaryNumber1Length}`);
    
 }

 validateInputs = () =>{

   let isBinaryNum1Valid = false;
   let isBinaryNum2Valid = false;
   let truthVal1 = 0;
   let truthVal2 = 0;


  for(let i = 0; i < this.state.binaryNumber1.length; i++){
    
    if((this.state.binaryNumber1[i] === "1") || (this.state.binaryNumber1[i] === "0")){
      truthVal1++;
    }
    
  }
  if (this.state.binaryNumber1.length === truthVal1){
     isBinaryNum1Valid = true;
  }
 
  for(let j = 0; j < this.state.binaryNumber2.length; j++){
   
    if((this.state.binaryNumber2[j] === "1") || (this.state.binaryNumber2[j] === "0")){
      truthVal2++;
    }
    
  }
  if (this.state.binaryNumber2.length === truthVal2){
     isBinaryNum2Valid = true;
  }
 
  if((isBinaryNum1Valid === true) && (isBinaryNum2Valid === true)) {
    return true;
  }else{
    return false;
  }


 }

 //This function executes the selected operation
 calculate = () => {
    
 if ((this.state.binaryNumber1.length === 0) || (this.state.binaryNumber2.length === 0)){
   alert("Error, Please enter a binary number in both input fields")
 }else{
   let isValid = false;
 
   isValid = this.validateInputs();
    
   if (isValid === true){
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
  
   }else{
   alert("Invalid character please enter 1s or 0s for binary input fields");
   }
  }
  
 }
 
 calculateComplements = () => {
  
  let binaryNumberArray = [];
  let binaryNumberInverse = "";


  for(let i = 0; i < this.state.negativeDifference.length; i++){
    if(this.state.negativeDifference[i] === "0"){
        binaryNumberArray.push("1");
    }else if(this.state.negativeDifference[i] === "1"){
        binaryNumberArray.push("0")
    }else{

    }
}

 binaryNumberInverse = binaryNumberArray.join("");  
 let binaryNumberInverseSum = ((parseInt(binaryNumberInverse,2)) + (parseInt("1",2)));
 this.setState({answer: binaryNumberInverseSum.toString(2)});

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
  
  if (difference < 0){
  //represents a negative difference in 2's complement
    difference = difference * -1;
  
    differenceStr = difference.toString(2).padStart(8,"0");
    console.log(differenceStr);
    this.calculateComplements();
 
    this.setState({answerLength: this.state.negativeDifference.length, negativeDifference: differenceStr, answerType: "negative", negativeAnswer:"The difference is negative and is represented in 2's complement:".concat(" ", this.state.answer),});
  }else{
    differenceStr = difference.toString(2);
    
    this.setState({answerLength: differenceStr.length, answer: differenceStr});
  }
 
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
      <div className="inputFormContainer mb-5">
         <form className="inputFormBaseConversion">
           <AppName formName="Binary Arithmetic" />
           <div className="form-group mt-2">
             <label htmlFor="inputField1">Binary Number</label>
             <input type="text" className="form-control" id="inputfield1" onChange={this.getInputData1} />
           </div>
           <div className="form-group mt-2">
             <label htmlFor="inputField1">Binary Number</label>
             <input type="text" className="form-control" id="inputfield1" onChange={this.getInputData2} />
           </div>

       

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

           <div className='submitButtonComponent mt-3'> 
            <button type="button" className="btn btn-primary buttonColor" onClick={this.calculate}>{this.state.selectedOperator}</button>
           </div>
          
         </form>
 
        
      
        
        
      </div>
      );
  }
    
}


export default BinaryArithmetic;