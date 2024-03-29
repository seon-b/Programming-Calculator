import React,{useState,useEffect} from 'react';
import './ComplementCalculator.css'
import AppName from './AppName';
import InputText from './InputText.js'
import SubmitButton from './SubmitButton.js';


const ComplementCalculator = () => {

  const[complementCalculatorState, setcomplementCalculatorState] = useState({
    binaryNumber: "",
    complement1: "",
    complement2: "",

  });

  const [errorStatement, seterrorStatement] = useState("Error!");
  const [isErrorPresent, setisErrorPresent] = useState(false);

  

  const getUserInput = (e) =>{

    setcomplementCalculatorState({...complementCalculatorState, binaryNumber: e.target.value});
    
  
      
        
        if(complementCalculatorState.binaryNumber === 0){
       
          setcomplementCalculatorState({...complementCalculatorState, setComplement1:"00000000", setComplement2: "00000000"});

        }
      
   
    
  }

  const validateBinaryInputs = () =>{

    let regex = /(^[0-1]{1,8})$/;

    const isInputValid1 = regex.test(complementCalculatorState.binaryNumber);
    
    
    if(isInputValid1 === true){
        return true;
    }else{
        return false;
    }
  
  
  }
  

  const calculateComplements = () => {
  
    let binaryNumberArray = [];
    let binaryNumberInverse = "";
    
    
    
    
    let isBinaryNumValid = validateBinaryInputs();


    if(isBinaryNumValid === true) {
      //formats the binary output to displat an 8-bit value
      let formatBinaryNumber;
      formatBinaryNumber = complementCalculatorState.binaryNumber.padStart(8,'0');
   
      
      for(let i = 0; i < formatBinaryNumber.length; i++){
        if(formatBinaryNumber[i] === "0"){
            binaryNumberArray.push("1");
        }else if(formatBinaryNumber[i] === "1"){
            binaryNumberArray.push("0")
        }else{
     
        }
      }
      
     }else{
   
      setcomplementCalculatorState({...complementCalculatorState, setComplement1:"", setComplement2: "" });
      seterrorStatement("Error, invalid binary number");
      handleError();
    }
    
    if (complementCalculatorState.binaryNumber.length === 0 ){

    }else{
    binaryNumberInverse = binaryNumberArray.join("");  
    let binaryNumberInverseSum = ((parseInt(binaryNumberInverse,2)) + (parseInt("1",2)));

   
    setcomplementCalculatorState({...complementCalculatorState, complement1: binaryNumberInverse, complement2: binaryNumberInverseSum.toString(2)});
    
    
    }
  }


  const handleError = () =>{
     setisErrorPresent(true);
   
    
     
  }

//Displays error message and removes it after a few seconds
useEffect(() =>{
 
  setTimeout(() =>{setisErrorPresent(false)},2000);

},[isErrorPresent]);


  
        return(
        <div className="inputFormContainer mb-5">
           <form className="inputFormBaseConversion">
             <AppName formName = "Complement Calculator" />
             <div className="alert alert-primary" style={{display:(isErrorPresent?"block":"none")}} role="alert">{errorStatement}</div>

             <InputText inputName="Binary Number" handleChange1={getUserInput}/>
             
             <div className='d-flex justify-content-between mt-3'>
           
             </div>
             <div className='d-flex justify-content-between mt-3'>
           
             </div>
             <div className='d-flex justify-content-between mt-2'>
           
             </div>
            <div className='mt-3'>  
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">1's Complement</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={complementCalculatorState.complement1} disabled></textarea>
               </div>
             </div>
         </div>
         <div className='mt-3'>
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">2's Complement</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={complementCalculatorState.complement2} disabled></textarea>
               </div>
             </div>
         </div>
             <SubmitButton inputName="Convert" handleClick={calculateComplements}/>
           </form>
          
          
        </div>
        );

    
}


export default ComplementCalculator;