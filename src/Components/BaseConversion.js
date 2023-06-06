import React,{useState,useEffect} from 'react';
import './BaseConversion.css'
import AppName from './AppName';
import SubmitButton from './SubmitButton.js';

const BaseConversion = () =>{
  //React Hooks
  // const [userInput, setuserInput] = useState("");
  // const [baseId1, setbaseId1] = useState(2);
  // const [baseId2, setbaseId2] = useState(2);
  // const [baseConversionOutput, setbaseConversionOutput] = useState("");
  // const [errorStatement, seterrorStatement] = useState("");
  // const [isErrorPresent, setisErrorPresent] = useState(false)

  const[baseConversionState, setbaseConversionState] = useState({
    userInput: "",
    baseId1: 2,
    baseId2: 2,
    baseConversionOutput: "",
    errorStatement: "",
    isErrorPresent: false,

  })
  
  const getUserInput = (e) => {
   setbaseConversionState({...baseConversionState}, {userInput: e.target.value});
 
  }

  const selectAChoice1 = (e) =>{
    if( "Base 2 (Binary)" === e.target.value){
      //  setbaseId1(2);
       setbaseConversionState({...baseConversionState}, {baseId1: 2});
   
 
      
   }else if("Base 8 (Octal)"  === e.target.value){
      //  setbaseId1(8);
       setbaseConversionState({...baseConversionState}, {baseId1: 8});
   
     
      
      
   }else if( "Base 10 (Decimal)"  === e.target.value){
      //  setbaseId1(10);
      setbaseConversionState({...baseConversionState}, {baseId1: 10});
 
      
   }else if("Base 16 (Hexadecimal)" === e.target.value){
        // setbaseId1(16);
        setbaseConversionState({...baseConversionState}, {baseId1: 16});
   
   
     
   }else{
     
   }
 
  }

  const selectAChoice2 = (e) =>{
   
    if( "Base 2 (Binary)" === e.target.value){
      //  setbaseId2(2);
      setbaseConversionState({...baseConversionState}, {baseId2: 2});
    
     
       
    }else if("Base 8 (Octal)" === e.target.value){
      // setbaseId2(8);
      setbaseConversionState({...baseConversionState}, {baseId2: 8});
    
     
       
       
    }else if( "Base 10 (Decimal)"  === e.target.value){
      //  setbaseId2(10);
      setbaseConversionState({...baseConversionState}, {baseId2: 10});
    
      
       
    }else if("Base 16 (Hexadecimal)" === e.target.value){
      //  setbaseId2(16);
      setbaseConversionState({...baseConversionState}, {baseId2: 16});
    

      
    }else{

    }

  }
 //regex used to validate inputs limit inputs to 1 bit minimum and 8 bit maximum
  const validateBinaryInputs = () =>{

    let regex = /(^[0-1]{1,8})$/;

    const isInputValid1 = regex.test(baseConversionState.userInput);
    
    
    if(isInputValid1 === true && baseConversionState.baseId1 === 2){
        return true;
    }else{
        return false;
    }
  
  
  }

  const validateOctalInputs = () =>{

    let regex = /(^[0-7]{1,8})$/;

    const isInputValid1 = regex.test(baseConversionState.userInput);
    
    
    if(isInputValid1 === true && baseConversionState.baseId1 === 8){
        return true;
    }else{
        return false;
    }
  
  
  }


  const validateDecimalInputs = () => {
    let regex = /(^[0-9]{1,8})$/;

    const isInputValid1 = regex.test(baseConversionState.userInput);
    
    
    if(isInputValid1 === true && baseConversionState.baseId1 === 10){
        return true;
    }else{
        return false;
    }

  }

  const validateHexaDecimalInputs = () =>{

    let regex = /(^[0-9a-fA-F]{1,8})$/;

    const isInputValid1 = regex.test(baseConversionState.userInput);
    
    
    if(isInputValid1 === true && baseConversionState.baseId1 === 16){
        return true;
    }else{
        return false;
    }
  
  
  }
  //displays the error message for 1 second
  const handleError = () =>{
    setbaseConversionState({...baseConversionState}, {isErrorPresent: true});
     
 }

  //Displays error message and removes it after a few seconds
  useEffect(() =>{
   
  setTimeout(() =>{ setbaseConversionState({...baseConversionState}, {isErrorPresent: false})},2000);
  
  },[baseConversionState])

  
  
 
 
  

   

   const convertInputToSelectedBase = (inputValue, currentBase, convertToBase) =>{
  
 
    let isBaseValid;
    let parsedInput = 0;
    
    inputValue = baseConversionState.userInput;
    currentBase = baseConversionState.baseId1;
    convertToBase = baseConversionState.baseId2;
    
    //performs base conversion and formats binary outputs
    const convert = () => {
     if(convertToBase === 2){
        if(baseConversionState.userInput.length > 4){//pads 0's to keep binary input 4 to 8 bits.
          setbaseConversionState({...baseConversionState}, {baseConversionOutput: parsedInput.toString(convertToBase).padStart(8, "0")});
        }else{
          setbaseConversionState({...baseConversionState}, {baseConversionOutput: parsedInput.toString(convertToBase).padStart(4,"0")});
        }
  
     }else if (convertToBase === 16){
      setbaseConversionState({...baseConversionState}, {baseConversionOutput: parsedInput.toString(convertToBase).toUpperCase()});
     }else if ((convertToBase !== 2) && (convertToBase !== 16)){
      setbaseConversionState({...baseConversionState}, {baseConversionOutput: parsedInput.toString(convertToBase)});
    }else{

    }
  
    }

 

    parsedInput = parseInt(inputValue,currentBase);//converts userInput value to a string type

    if (currentBase === 2){
      isBaseValid = validateBinaryInputs();

      

      if (isBaseValid === true){

        convert();
     
    }else{
      setbaseConversionState({...baseConversionState}, {errorStatement:"Error, invalid binary number", baseConversionOutput: "" });
      handleError();
    }

    }else if (currentBase === 8){
      isBaseValid = validateOctalInputs();
      
      if (isBaseValid === true){
        convert();
       
      }else{
        setbaseConversionState({...baseConversionState}, {errorStatement:"Error, invalid octal number", baseConversionOutput: "" });
        handleError();
      }

    }else if (currentBase === 10){
      isBaseValid = validateDecimalInputs();

      if (isBaseValid === true){
        convert();
       
      }else{
        setbaseConversionState({...baseConversionState}, {errorStatement:"Error, invalid decimal number", baseConversionOutput: "" });
        handleError();
      }

    }else if (currentBase === 16){   
      isBaseValid = validateHexaDecimalInputs();

      if (isBaseValid === true){
        convert();
        
      }else{
        setbaseConversionState({...baseConversionState}, {errorStatement:"Error, invalid hexadecimal number", baseConversionOutput: "" });

        handleError();
      }

    }else{
      setbaseConversionState({...baseConversionState}, {errorStatement:"Error, invalid decimal number", baseConversionOutput: "" });
      handleError();
    }
   
  }


    
    

  
   
    return(
      
         <form className="inputFormBaseConversion">
           <AppName formName="Base Conversion" />
           <div className="alert alert-primary" style={{display:(baseConversionState.isErrorPresent?"block":"none")}} role="alert">{baseConversionState.errorStatement}</div>

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
           <div className="mt-4"></div>
           <div className='mt-3'>
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">Conversion</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={baseConversionState.baseConversionOutput} disabled></textarea>
               </div>
             </div>
         </div>

           <SubmitButton inputName="Convert" handleClick={convertInputToSelectedBase}/>
         </form>
     
      );
 
  }

export default BaseConversion;