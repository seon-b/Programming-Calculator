import React,{useState} from 'react';
import './BaseConversion.css'
import AppName from './AppName';
import SubmitButton from './SubmitButton.js';

const BaseConversion = () =>{
  
  const [userInput, setuserInput] = useState("");
  const [baseId1, setbaseId1] = useState(2);
  const [baseId2, setbaseId2] = useState(2);
  const [baseConversionOutput, setbaseConversionOutput] = useState("");
  const [errorStatement, seterrorStatement] = useState("Error!");
  
  const getUserInput = (e) => {
   setuserInput(e.target.value);
 
  }

  const selectAChoice1 = (e) =>{
    if( "Base 2 (Binary)" === e.target.value){
       setbaseId1(2);
   
 
      
   }else if("Base 8 (Octal)"  === e.target.value){
       setbaseId1(8);
   
     
      
      
   }else if( "Base 10 (Decimal)"  === e.target.value){
       setbaseId1(10);
 
      
   }else if("Base 16 (Hexadecimal)" === e.target.value){
        setbaseId1(16);
   
   
     
   }else{
     
   }
 
  }

  const selectAChoice2 = (e) =>{
   
    if( "Base 2 (Binary)" === e.target.value){
       setbaseId2(2);
    
     
       
    }else if("Base 8 (Octal)" === e.target.value){
      setbaseId2(8);
    
     
       
       
    }else if( "Base 10 (Decimal)"  === e.target.value){
       setbaseId2(10);
    
      
       
    }else if("Base 16 (Hexadecimal)" === e.target.value){
       setbaseId2(16);
    

      
    }else{

    }

  }

  const validateBinaryInputs = () =>{

  //   let isBinaryNumValid = false;
  //   let truthVal = 0;
  
 
 
  //  for(let i = 0; i < userInput.length; i++){
     
  //    if((userInput[i] === "1") || (userInput[i] === "0")){
  //      truthVal++;
  //    }
     
  //  }
  //  if (binaryNumber.length === truthVal){
  //     isBinaryNumValid = true;
  //  }
  
   
  
  //  if((isBinaryNumValid === true)) {
  //    return true;
  //  }else{
  //    return false;
  //  }
 
 
  }


  const validateDecimalInputs = () => {
    console.log("this function works"); 

    let isNumValid = false;
    let truthVal = 0;
  
 
 
   for(let i = 0; i < userInput.length; i++){
     
     if((isNaN(userInput[i])) === false){
       truthVal++;
     }
     
   }
   
   if (userInput.length === truthVal){
      isNumValid = true;
   }
  
   
  
   if((isNumValid === true)) {
     return true;
   }else{
    
    return false;
   }
 

  }

   

   const convertInputToSelectedBase = (inputValue, currentbase, convertToBase) =>{
    let num1 = 0;

    inputValue = userInput;
    currentbase = baseId1;
    convertToBase = baseId2;

    num1 = parseInt(inputValue,currentbase);

      if(userInput.length === 0) {
        alert("Error, please enter a number");
      }else{
        
        if ((isNaN(num1))) {
           setbaseConversionOutput("Error, the conversion does not exist.");
        }else if(convertToBase === 16){
          setbaseConversionOutput(num1.toString(convertToBase).toUpperCase());

        }else{
         if(convertToBase === 2) {
          //limit binary solutions to 4 to 8 bits
             if(num1 > 4){
                setbaseConversionOutput(num1.toString(convertToBase).padStart(8, "0"));
             }else{
                setbaseConversionOutput(num1.toString(convertToBase).padStart(4,"0"));
             }
         }else{
          let isValidDecimal = validateDecimalInputs();

          if(isValidDecimal === true){
             setbaseConversionOutput(num1.toString(convertToBase)); 
          }else{
            alert("Error please enter a number");
          }

         }
        }
      }

    }


    
    

  
   
    return(
      <div className="inputFormContainer mb-5">
         <form className="inputFormBaseConversion">
           <AppName formName="Base Conversion" />
           <div class="alert alert-primary" role="alert">{errorStatement}</div>

          <div className="form-group mt-2">
            <label htmlFor="selectForm">Convert From</label>
            <select  onChange={selectAChoice1} className="form-control" id="selectForm">
              <option id="option1" value="Base 2 (Binary)">Base 2 (Binary)</option>
              <option id="option2" value="Base 8 (Octal)">Base 8 (Octal)</option>
              <option id="option3" value="Base 10 (Decimal)" >Base 10 (Decimal)</option>
              <option id="option4" value="Base 16 (Hexadecimal)">Base 16 (Hexadecimal)</option>
            </select>
          </div> 

          <div className="form-group mt-2">
            <label htmlFor="selectForm">Convert To</label>
            <select  onChange={selectAChoice2} className="form-control" id="selectForm">
              <option id="option1" value="Base 2 (Binary)">Base 2 (Binary)</option>
              <option id="option2" value="Base 8 (Octal)">Base 8 (Octal)</option>
              <option id="option3" value="Base 10 (Decimal)" >Base 10 (Decimal)</option>
              <option id="option4" value="Base 16 (Hexadecimal)">Base 16 (Hexadecimal)</option>
            </select>
          </div> 

  
        <div className="form-group mt-2">
           <label htmlFor="inputField1">Number</label>
           <input type="text" className="form-control" id="inputfield1" onChange={getUserInput} />
        </div>

           <div className='mt-3'>
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">Conversion</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={baseConversionOutput} disabled></textarea>
               </div>
             </div>
         </div>

           <SubmitButton inputName="Convert" handleClick={convertInputToSelectedBase}/>
         </form>
      </div>
      );
 
  }

export default BaseConversion;