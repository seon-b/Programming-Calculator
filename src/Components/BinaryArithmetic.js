import React,{useState, useEffect} from 'react';
import './BinaryArithmetic.css'
import AppName from './AppName';
import RadioButton from './RadioButton';


const BinaryArithmetic = () => {
  
  const[binaryArithmeticState, setbinaryArithmeticState] = useState({

    selectedOperator: "Add",
    answerName: "Sum",
    binaryNumber1: "",
    binaryNumber2: "",
    answer: "",
    negativeDifference: "",
    errorStatement: "",
    isErrorPresent: false,

  })

  
  
 
  // These functions are passed as props to modify the text in the SubmitButton
  const changeSubmitButton1 = () =>{
   
    setbinaryArithmeticState({...binaryArithmeticState, selectedOperator:"Add", answerName: "Sum"});
    
    
  }

 const changeSubmitButton2 = () =>{
    
  setbinaryArithmeticState({...binaryArithmeticState, selectedOperator:"Subtract", answerName: "Difference"});

    
  }

  const changeSubmitButton3 = () =>{

    setbinaryArithmeticState({...binaryArithmeticState, selectedOperator:"Multiply", answerName: "Product"});
  
   
  }

  const changeSubmitButton4 = () =>{

    setbinaryArithmeticState({...binaryArithmeticState, selectedOperator:"Divide", answerName: "Quotient"});
   
    
  }
  
  
  const getInputData1 = (e) =>{

    setbinaryArithmeticState({...binaryArithmeticState, binaryNumber1: e.target.value});
     
     
  }

  const getInputData2 = (e) =>{

    setbinaryArithmeticState({...binaryArithmeticState, binaryNumber2: e.target.value});
      
    
  }


  const validateBinaryInputs = () =>{
    let regex = /(^[0-1]{1,8})$/;

    const isInputValid1 = regex.test(binaryArithmeticState.binaryNumber1);
    const isInputValid2 = regex.test(binaryArithmeticState.binaryNumber2);
    
    if(isInputValid1 === true && isInputValid2 === true){
        return true;
    }else{
        return false;
    }

   }

   const handleError = () =>{
    setbinaryArithmeticState({...binaryArithmeticState, isErrorPresent: true}); 
    
       
   }

//Displays error message and removes it after a few seconds
 useEffect(() =>{
   
  setTimeout(() =>{setbinaryArithmeticState({...binaryArithmeticState, isErrorPresent: false})},2000);
 
 },[binaryArithmeticState.isErrorPresent]);
 

   //Each function performs the indicated operation in binary and converts the answer into a string and sets the state of the answer,
 //and answerLength

  const addBinaryNumber = () =>{
  
    
    let num1 = parseInt(binaryArithmeticState.binaryNumber1, 2);
    let num2 = parseInt(binaryArithmeticState.binaryNumber2, 2);
    let sumStr = "";
    
  
    let sum = num1 + num2;
    sumStr = sum.toString(2);
    
    if (sumStr.length > 4){
      setbinaryArithmeticState({...binaryArithmeticState, answer: sumStr.padStart(8, "0")});
    
    }else{
      setbinaryArithmeticState({...binaryArithmeticState, answer: sumStr.padStart(4, "0")});
     
    }
  
   
 
   
   }
  
   const subtractBinaryNumber = () =>{
    
    let num1 = parseInt(binaryArithmeticState.binaryNumber1, 2);
    let num2 = parseInt(binaryArithmeticState.binaryNumber2, 2);
    let differenceStr = "";
    
  
    let difference = num1 - num2;
    
    if (difference < 0){
    //represents a negative difference in 2's complement
      difference = difference * -1;
    
      differenceStr = difference.toString(2).padStart(8,"0");
      calculateComplements();

     
      setbinaryArithmeticState({...binaryArithmeticState, negativeDifference: differenceStr});
  
     
      
    }else{
      differenceStr = difference.toString(2);
      
     
      if (differenceStr.length > 4){
   
        setbinaryArithmeticState({...binaryArithmeticState, answer: differenceStr.padStart(8, "0")});
      }else{
        setbinaryArithmeticState({...binaryArithmeticState, answer: differenceStr.padStart(4, "0")});
     
      }
    
     
    }
   
   }
  
   const multiplyBinaryNumber = () =>{
    
    let num1 = parseInt(binaryArithmeticState.binaryNumber1, 2);
    let num2 = parseInt(binaryArithmeticState.binaryNumber2, 2);
    let productStr = "";
    
  
    let product = num1 * num2;
    productStr = product.toString(2);

    if (productStr.length > 4){
      setbinaryArithmeticState({...binaryArithmeticState, answer: productStr.padStart(8, "0")});
    
    }else{
      setbinaryArithmeticState({...binaryArithmeticState, answer: productStr.padStart(4, "0")});
      
    }
  
   
   }
  
   const divideBinaryNumber = () =>{
    
    let num1 = parseInt(binaryArithmeticState.binaryNumber1, 2);
    let num2 = parseInt(binaryArithmeticState.binaryNumber2, 2);
    let quotientStr = "";
    
  
    let quotient = num1 / num2;
    quotientStr = Math.floor(quotient).toString(2);

    if (quotientStr.length > 4){
      setbinaryArithmeticState({...binaryArithmeticState, answer: quotientStr.padStart(8, "0")});
      
    }else{
      setbinaryArithmeticState({...binaryArithmeticState, answer: quotientStr.padStart(4, "0")});
  
    }
  
   }
  
 //This function executes the selected operation
  const calculate = () => {

    let areInputsValid = false;
    areInputsValid = validateBinaryInputs();
    
   

   if (areInputsValid === true){
      if(binaryArithmeticState.selectedOperator === "Add") {
        addBinaryNumber();
      }else if(binaryArithmeticState.selectedOperator === "Subtract") {
        subtractBinaryNumber();
      }else if(binaryArithmeticState.selectedOperator === "Multiply"){
        multiplyBinaryNumber();
      }else if(binaryArithmeticState.selectedOperator === "Divide"){
        divideBinaryNumber();
      }else{

     }
    
    
   }else{
  
    setbinaryArithmeticState({...binaryArithmeticState, errorStatement: "Error, invalid binary number", answer: ""});
    
     handleError();
   } 
  }
 
 const calculateComplements = () =>{
  
  let binaryNumberArray = [];
  let binaryNumberInverse = "";


  for(let i = 0; i < binaryArithmeticState.negativeDifference.length; i++){
    if(binaryArithmeticState.negativeDifference[i] === "0"){
        binaryNumberArray.push("1");
    }else if(binaryArithmeticState.negativeDifference[i] === "1"){
        binaryNumberArray.push("0")
    }else{

    }
    
}

 binaryNumberInverse = binaryNumberArray.join("");  
 let binaryNumberInverseSum = ((parseInt(binaryNumberInverse,2)) + (parseInt("1",2)));

 
 let signedNumberOutput = binaryNumberInverseSum.toString(2);
 

setbinaryArithmeticState({...binaryArithmeticState, answer: `Answer Negative: ${signedNumberOutput}`});

}
 


 

    return(
      <div className="inputFormContainer mb-5">
         <form className="inputFormBaseConversion">
           <AppName formName="Binary Arithmetic" />
           <div className="alert alert-primary" style={{display:(binaryArithmeticState.isErrorPresent?"block":"none")}} role="alert">{binaryArithmeticState.errorStatement}</div>

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
                  <label htmlFor="conversionOutputArea">{binaryArithmeticState.answerName}</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={binaryArithmeticState.answer} disabled></textarea>
               </div>
             </div>
           </div>

           <div className='submitButtonComponent mt-3'> 
            <button type="button" className="btn btn-primary submitButtonColor" onClick={calculate}>{binaryArithmeticState.selectedOperator}</button>
           </div>
          
         </form>
        
      </div>
      );

}



  

 
export default BinaryArithmetic;