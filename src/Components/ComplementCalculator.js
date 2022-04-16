import React,{useState,useEffect} from 'react';
import './ComplementCalculator.css'
import AppName from './AppName';
import InputText from './InputText.js'
import SubmitButton from './SubmitButton.js';


const ComplementCalculator = () => {

  const [emptyField, setEmptyField] = useState(true);
  const [isBinaryNumValid, setisBinaryNumValid] = useState(false);
  const [binaryNumber, setBinaryNumber] = useState("");
  const [binaryNumberLength, setBinaryNumberLength] = useState(0);
  const [complement1, setComplement1] = useState("");
  const [complement2, setComplement2] = useState("");
  const [isSignedNumber, setisSignedNumber] = useState(false);
  const [isUnsignedNumber, setisUnsignedNumber] = useState(true);
  const [errorStatement, seterrorStatement] = useState("Error!");

  const isEmpty = () =>{
      
        if(binaryNumberLength === 0){
          setEmptyField(true);
        }else{
          setEmptyField(false);
        }
        
      
  }

  const getUserInput = (e) =>{
    
    isEmpty();
  
      if(isSignedNumber === false){
        setBinaryNumber(e.target.value.padStart(8,'0'));
        setBinaryNumberLength(binaryNumber.length);
      }else{
        setBinaryNumber(e.target.value.padStart(8,'1'));
        setBinaryNumberLength(binaryNumber.length);
      }
     console.log(binaryNumber)
    
  }

  const validateInputs = () =>{

    let truthVal = 0;
  
 
 
    for(let i = 0; i < binaryNumber.length; i++){
      
      if((binaryNumber[i] === "1") || (binaryNumber[i] === "0")){
        truthVal++;
      }
      
    }
    
    if (binaryNumber.length === truthVal){
       setisBinaryNumValid(true);
    }
   
   
  
  }

  const calculateComplements = () => {

  

  // if ((emptyField === true)){
  //     alert("Error, Please enter a binary number")
  // }else{
    let binaryNumberArray = [];
    let binaryNumberInverse = "";

   

    validateInputs();

    if(isBinaryNumValid === true) {
      for(let i = 0; i < binaryNumber.length; i++){
        if(binaryNumber[i] === "0"){
            binaryNumberArray.push("1");
        }else if(binaryNumber[i] === "1"){
            binaryNumberArray.push("0")
        }else{
     
        }
      }
     }else{
      alert("Invalid character please enter 1s or 0s for binary input fields");
    }

    console.log(isSignedNumber);
    binaryNumberInverse = binaryNumberArray.join("");  
    let binaryNumberInverseSum = ((parseInt(binaryNumberInverse,2)) + (parseInt("1",2)));

    setComplement1(binaryNumberInverse);
    setComplement2(binaryNumberInverseSum.toString(2));
  }

  
     

  const selectSignedNumberType = () => {
   
      setisSignedNumber(true);
      setisUnsignedNumber(false);
    
     console.log(isSignedNumber);
    
  }


 const selectUnsignedNumberType = () => {
 
    setisSignedNumber(false);
    setisUnsignedNumber(true);
 
   console.log(isUnsignedNumber);
   
    }

  
        return(
        <div className="inputFormContainer mb-5">
           <form className="inputFormBaseConversion">
             <AppName formName = "Complement Calculator" />
             <div class="alert alert-primary" role="alert">{errorStatement}</div>
             <InputText inputName="Binary Number" handleChange1={getUserInput}/>
             
             <div className='d-flex justify-content-between mt-3'>
             <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onClick={selectUnsignedNumberType} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Unsigned Number</label>
             </div>
             <div className="form-check">
               <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onClick={selectSignedNumberType}/>
               <label className="form-check-label" htmlFor="flexRadioDefault2">Signed Number</label>
             </div>
             </div>
            <div className='mt-3'>  
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">1's Complement</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={complement1} disabled></textarea>
               </div>
             </div>
         </div>
         <div className='mt-3'>
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">2's Complement</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={complement2} disabled></textarea>
               </div>
             </div>
         </div>
             <SubmitButton inputName="Convert" handleClick={calculateComplements}/>
           </form>
          
          
        </div>
        );

    
}


export default ComplementCalculator;