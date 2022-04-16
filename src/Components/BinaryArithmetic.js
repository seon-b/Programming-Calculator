import React,{useState, useEffect} from 'react';
import './BinaryArithmetic.css'
import AppName from './AppName';
import RadioButton from './RadioButton';


const BinaryArithmetic = () => {
  

  const [selectedOperator, setselectedOperator] = useState("Add");
  const [answerName, setanswerName] = useState("Sum");
  const [selectedRadioInput1, setselectedRadioInput1] = useState(false);
  const [selectedRadioInput2, setselectedRadioInput2] = useState(false);
  const [selectedRadioInput3, setselectedRadioInput3] = useState(false);
  const [selectedRadioInput4, setselectedRadioInput4] = useState(false);
  const [binaryNumber1, setbinaryNumber1] = useState("");
  const [binaryNumber1Length, setbinaryNumber1Length] = useState(0);
  const [binaryNumber2, setbinaryNumber2] = useState("");
  const [binaryNumber2Length, setbinaryNumber2Length] = useState(0);
  const [answer, setanswer] = useState("");
  const [answerLength, setanswerLength] = useState(8);
  const [answerType, setanswerType] = useState("");
  const [negativeDifference, setnegativeDifference] = useState("");
  const [negativeAnswer, setnegativeAnswer] = useState("");
  const [errorStatement, seterrorStatement] = useState("Error!");
  
 
  // These functions are passed as props to modify the text in the SubmitButton
  const changeSubmitButton1 = () =>{
    //this.setState({selectedOperator:"Add", answerName: "Sum", selectedRadioInput1: true, selectedRadioInput2: false, selectedRadioInput3: false,selectedRadioInput4: false,})
    setselectedOperator("Add");
    setanswerName("Sum");
    setselectedRadioInput1(true);
    setselectedRadioInput2(false);
    setselectedRadioInput3(false);
    setselectedRadioInput4(false);
  }

 const changeSubmitButton2 = () =>{
    //this.setState({selectedOperator:"Subtract", answerName: "Difference", selectedRadioInput1: false, selectedRadioInput2: true, selectedRadioInput3: false,selectedRadioInput4: false,})
    setselectedOperator("Subtract");
    setanswerName("Difference");
    setselectedRadioInput1(false);
    setselectedRadioInput2(true);
    setselectedRadioInput3(false);
    setselectedRadioInput4(false);
  }

  const changeSubmitButton3 = () =>{
    //this.setState({selectedOperator:"Multiply", answerName: "Product", selectedRadioInput1: false, selectedRadioInput2: false, selectedRadioInput3: true,selectedRadioInput4: false,})
    setselectedOperator("Multiply");
    setanswerName("Product");
    setselectedRadioInput1(false);
    setselectedRadioInput2(false);
    setselectedRadioInput3(true);
    setselectedRadioInput4(false);
  }

  const changeSubmitButton4 = () =>{
    //this.setState({selectedOperator:"Divide", answerName: "Quotient", selectedRadioInput1: false, selectedRadioInput2: false, selectedRadioInput3: false,selectedRadioInput4: true,})
    setselectedOperator("Divide");
    setanswerName("Quotient");
    setselectedRadioInput1(false);
    setselectedRadioInput2(false);
    setselectedRadioInput3(false);
    setselectedRadioInput4(true);
  }
  
  // These functions get the InputText component's text input field data and checks that only binary numbers are present
  const getInputData1 = (e) =>{
      //this.setState({binaryNumber1: e.target.value.padStart(8,'0'), binaryNumber1Length: e.target.value.length});
      setbinaryNumber1(e.target.value);
      setbinaryNumber1Length(e.target.value.length);
  }

  const getInputData2 = (e) =>{
      //this.setState({binaryNumber2: e.target.value.padStart(8,'0'), binaryNumber2Length: e.target.value.length});
      setbinaryNumber2(e.target.value);
      setbinaryNumber2Length(e.target.value.length);
    
  }

  const validateInputs = () =>{
    let regex = /[^0-1]/g;

    const isInputValid1 = regex.test(binaryNumber1);
    const isInputValid2 = regex.test(binaryNumber2);
    
    if(isInputValid1 === true && isInputValid2 === true){
        return true;
    }else{
        return false;
    }
  

  //  let isBinaryNum1Valid = false;
  //  let isBinaryNum2Valid = false;
  //  let truthVal1 = 0;
  //  let truthVal2 = 0;


  // for(let i = 0; i < this.state.binaryNumber1.length; i++){
    
  //   if((this.state.binaryNumber1[i] === "1") || (this.state.binaryNumber1[i] === "0")){
  //     truthVal1++;
  //   }
    
  // }
  // if (this.state.binaryNumber1.length === truthVal1){
  //    isBinaryNum1Valid = true;
  // }
 
  // for(let j = 0; j < this.state.binaryNumber2.length; j++){
   
  //   if((this.state.binaryNumber2[j] === "1") || (this.state.binaryNumber2[j] === "0")){
  //     truthVal2++;
  //   }
    
  // }
  // if (this.state.binaryNumber2.length === truthVal2){
  //    isBinaryNum2Valid = true;
  // }
 
  // if((isBinaryNum1Valid === true) && (isBinaryNum2Valid === true)) {
  //   return true;
  // }else{
  //   return false;
  // }


   }

 //This function executes the selected operation
  const calculate = () => {
    
   if ((binaryNumber1.length === 0) || (binaryNumber2.length === 0)){
     alert("Error, Please enter a binary number in both input fields")
   }else{
     let isValid = false;
   
     isValid = this.validateInputs();
      
     if (isValid === true){
      if(setselectedOperator === "Add") {
         addBinaryNumber();
      }else if(setselectedOperator === "Subtract") {
         subtractBinaryNumber();
      }else if(setselectedOperator === "Multiply"){
         multiplyBinaryNumber();
      }else if(setselectedOperator === "Divide"){
         divideBinaryNumber();
      }else{

      }
    
     }else{
     alert("Invalid character please enter 1s or 0s for binary input fields");
     }
    }
    
  }
 
 const calculateComplements = () =>{
  
  let binaryNumberArray = [];
  let binaryNumberInverse = "";


  for(let i = 0; i < negativeDifference.length; i++){
    if(negativeDifference[i] === "0"){
        binaryNumberArray.push("1");
    }else if(negativeDifference[i] === "1"){
        binaryNumberArray.push("0")
    }else{

    }
}

 binaryNumberInverse = binaryNumberArray.join("");  
 let binaryNumberInverseSum = ((parseInt(binaryNumberInverse,2)) + (parseInt("1",2)));
 setanswer(binaryNumberInverseSum.toString(2));

}
 //Each function performs the indicated operation in binary and converts the answer into a string and sets the state of the answer,
 //and answerLength

  const addBinaryNumber = () =>{
  
  let num1 = parseInt(binaryNumber1, 2);
  let num2 = parseInt(binaryNumber2, 2);
  let sumStr = "";
  

  let sum = num1 + num2;
  sumStr = sum.toString(2);
  setanswerLength(sumStr.length);
  setanswer(sumStr);

 
 }

 const subtractBinaryNumber = () =>{
  
  let num1 = parseInt(binaryNumber1, 2);
  let num2 = parseInt(binaryNumber2, 2);
  let differenceStr = "";
  

  let difference = num1 - num2;
  
  if (difference < 0){
  //represents a negative difference in 2's complement
    difference = difference * -1;
  
    differenceStr = difference.toString(2).padStart(8,"0");
    console.log(differenceStr);
    calculateComplements();
 
    //this.setState({answerLength: this.state.negativeDifference.length, negativeDifference: differenceStr, answerType: "negative", negativeAnswer:"The difference is negative and is represented in 2's complement:".concat(" ", this.state.answer),});
    setanswerLength(negativeDifference.length);
    setnegativeDifference(differenceStr);
    setanswerType("negative");
    setnegativeAnswer("The difference is negative and is represented in 2's complement:".concat(" ", answer));
    
  }else{
    differenceStr = difference.toString(2);
    
    setanswerLength(differenceStr.length)
    setanswer(differenceStr);
  }
 
 }

 const multiplyBinaryNumber = () =>{
  
  let num1 = parseInt(binaryNumber1, 2);
  let num2 = parseInt(binaryNumber2, 2);
  let productStr = "";
  

  let product = num1 * num2;
  productStr = product.toString(2);
  setanswerLength(productStr.length);
  setanswer(productStr);

 
 }

 const divideBinaryNumber = () =>{
  
  let num1 = parseInt(binaryNumber1, 2);
  let num2 = parseInt(binaryNumber2, 2);
  let quotientStr = "";
  

  let quotient = num1 / num2;
  quotientStr = quotient.toString(2);
  setanswerLength(quotientStr.length);
  setanswer(quotientStr);

 
 }



 

    return(
      <div className="inputFormContainer mb-5">
         <form className="inputFormBaseConversion">
           <AppName formName="Binary Arithmetic" />
           <div class="alert alert-primary" role="alert">{errorStatement}</div>
           <div className="form-group mt-2">
             <label htmlFor="inputField1">Binary Number</label>
             <input type="text" className="form-control" id="inputfield1" onChange={getInputData1} />
           </div>
           <div className="form-group mt-2">
             <label htmlFor="inputField1">Binary Number</label>
             <input type="text" className="form-control" id="inputfield1" onChange={getInputData2} />
           </div>

       

           <RadioButton inputName1="Add" inputName2="Subtract" inputName3="Multiply" inputName4="Divide"
           handleChange1={changeSubmitButton1} 
           handleChange2={changeSubmitButton2}
           handleChange3={changeSubmitButton3} 
           handleChange4={changeSubmitButton4}/>
          
           <div className='mt-3'>
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">{answerName}</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={answer} disabled></textarea>
               </div>
             </div>
           </div>

           <div className='submitButtonComponent mt-3'> 
            <button type="button" className="btn btn-primary submitButtonColor" onClick={calculate}>{selectedOperator}</button>
           </div>
          
         </form>
        
      </div>
      );

}



  

 
export default BinaryArithmetic;