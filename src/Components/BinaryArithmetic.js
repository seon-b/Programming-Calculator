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
  const [errorStatement, seterrorStatement] = useState("");
  const [isErrorPresent, setisErrorPresent] = useState(false);
  
 
  // These functions are passed as props to modify the text in the SubmitButton
  const changeSubmitButton1 = () =>{
   
    setselectedOperator("Add");
    setanswerName("Sum");
    setselectedRadioInput1(true);
    setselectedRadioInput2(false);
    setselectedRadioInput3(false);
    setselectedRadioInput4(false);
  }

 const changeSubmitButton2 = () =>{
    
    setselectedOperator("Subtract");
    setanswerName("Difference");
    setselectedRadioInput1(false);
    setselectedRadioInput2(true);
    setselectedRadioInput3(false);
    setselectedRadioInput4(false);
  }

  const changeSubmitButton3 = () =>{
  
    setselectedOperator("Multiply");
    setanswerName("Product");
    setselectedRadioInput1(false);
    setselectedRadioInput2(false);
    setselectedRadioInput3(true);
    setselectedRadioInput4(false);
  }

  const changeSubmitButton4 = () =>{
   
    setselectedOperator("Divide");
    setanswerName("Quotient");
    setselectedRadioInput1(false);
    setselectedRadioInput2(false);
    setselectedRadioInput3(false);
    setselectedRadioInput4(true);
  }
  
  
  const getInputData1 = (e) =>{
      
      setbinaryNumber1(e.target.value);
      setbinaryNumber1Length(e.target.value.length);
     
  }

  const getInputData2 = (e) =>{
      setbinaryNumber2(e.target.value);
      setbinaryNumber2Length(e.target.value.length);
    
  }


  const validateBinaryInputs = () =>{
    let regex = /(^[0-1]{1,8})$/;

    const isInputValid1 = regex.test(binaryNumber1);
    const isInputValid2 = regex.test(binaryNumber2);
    
    if(isInputValid1 === true && isInputValid2 === true){
        return true;
    }else{
        return false;
    }

   }

   const handleError = () =>{
      setisErrorPresent(true);
       
   }

//Displays error message and removes it after a few seconds
 useEffect(() =>{
   
  setTimeout(() =>{setisErrorPresent(false)},2000);
 
 },[isErrorPresent])
 

   //Each function performs the indicated operation in binary and converts the answer into a string and sets the state of the answer,
 //and answerLength

  const addBinaryNumber = () =>{
  
    
    let num1 = parseInt(binaryNumber1, 2);
    let num2 = parseInt(binaryNumber2, 2);
    let sumStr = "";
    
  
    let sum = num1 + num2;
    sumStr = sum.toString(2);
    setanswerLength(sumStr.length);
    if (sumStr.length > 4){
      setanswer(sumStr.padStart(8,"0"));
    }else{
      setanswer(sumStr.padStart(4,"0"));
    }
  
   
 
   
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
      calculateComplements();

      setanswerLength(differenceStr.length);
      setnegativeDifference(differenceStr);
     
      
    }else{
      differenceStr = difference.toString(2);
      
      setanswerLength(differenceStr.length)
      if (differenceStr.length > 4){
        setanswer(differenceStr.padStart(8,"0"));
      }else{
        setanswer(differenceStr.padStart(4,"0"));
      }
    
     
    }
   
   }
  
   const multiplyBinaryNumber = () =>{
    
    let num1 = parseInt(binaryNumber1, 2);
    let num2 = parseInt(binaryNumber2, 2);
    let productStr = "";
    
  
    let product = num1 * num2;
    productStr = product.toString(2);
    setanswerLength(productStr.length);
    
    if (productStr.length > 4){
      setanswer(productStr.padStart(8,"0"));
    }else{
      setanswer(productStr.padStart(4,"0"));
    }
  
   
   }
  
   const divideBinaryNumber = () =>{
    
    let num1 = parseInt(binaryNumber1, 2);
    let num2 = parseInt(binaryNumber2, 2);
    let quotientStr = "";
    
  
    let quotient = num1 / num2;
    quotientStr = Math.floor(quotient).toString(2);
    setanswerLength(quotientStr.length);
    if (quotientStr.length > 4){
      setanswer(quotientStr.padStart(8,"0"));
    }else{
      setanswer(quotientStr.padStart(4,"0"));
    }
  
   }
  
 //This function executes the selected operation
  const calculate = () => {

    let areInputsValid = false;
    areInputsValid = validateBinaryInputs();
    
   

   if (areInputsValid === true){
      if(selectedOperator === "Add") {
        addBinaryNumber();
      }else if(selectedOperator === "Subtract") {
        subtractBinaryNumber();
      }else if(selectedOperator === "Multiply"){
        multiplyBinaryNumber();
      }else if(selectedOperator === "Divide"){
        divideBinaryNumber();
      }else{

     }
    
    
   }else{
     seterrorStatement("Error, invalid binary number");
     setanswer("");
     handleError();
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

 
 let signedNumberOutput = binaryNumberInverseSum.toString(2);
 
 setanswer(`Answer Negative: ${signedNumberOutput}`);

}
 


 

    return(
      <div className="inputFormContainer mb-5">
         <form className="inputFormBaseConversion">
           <AppName formName="Binary Arithmetic" />
           <div className="alert alert-primary" style={{display:(isErrorPresent?"block":"none")}} role="alert">{errorStatement}</div>

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