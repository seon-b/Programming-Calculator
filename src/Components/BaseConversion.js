import React,{Component} from 'react';
import './BaseConversion.css'
import AppName from './AppName';
import SubmitButton from './SubmitButton.js';

class BaseConversion extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: "",
      BaseConversionOutput:"",
      baseId1: 2,
      baseId2: 2,
    };

    
   
  }

  getUserInput = (e) => {
   this.setState({userInput: e.target.value});
 
  }

  selectAChoice1 = (e) =>{
    if( "Base 2 (Binary)" === e.target.value){
      this.setState({ baseId1: 2});
   
 
      
   }else if("Base 8 (Octal)"  === e.target.value){
     this.setState({ baseId1: 8});
   
     
      
      
   }else if( "Base 10 (Decimal)"  === e.target.value){
     this.setState({ baseId1: 10});
 
      
   }else if("Base 16 (Hexadecimal)" === e.target.value){
     this.setState({ baseId1: 16});
   
   
     
   }else{
     
   }
 
  }

  selectAChoice2 = (e) =>{
   
    if( "Base 2 (Binary)" === e.target.value){
       this.setState({ baseId2: 2});
    
     
       
    }else if("Base 8 (Octal)" === e.target.value){
      this.setState({ baseId2: 8});
    
     
       
       
    }else if( "Base 10 (Decimal)"  === e.target.value){
      this.setState({ baseId2: 10});
    
      
       
    }else if("Base 16 (Hexadecimal)" === e.target.value){
      this.setState({ baseId2: 16});
    

      
    }else{

    }

  }

  validateBinaryInputs = () =>{

    let isBinaryNumValid = false;
    let truthVal = 0;
  
 
 
   for(let i = 0; i < this.state.userInput.length; i++){
     
     if((this.state.userInput[i] === "1") || (this.state.userInput[i] === "0")){
       truthVal++;
     }
     
   }
   if (this.state.binaryNumber.length === truthVal){
      isBinaryNumValid = true;
   }
  
   
  
   if((isBinaryNumValid === true)) {
     return true;
   }else{
     return false;
   }
 
 
  }


  validateDecimalInputs = () => {
    console.log("this function works"); 

    let isNumValid = false;
    let truthVal = 0;
  
 
 
   for(let i = 0; i < this.state.userInput.length; i++){
     
     if((isNaN(this.state.userInput[i])) === false){
       truthVal++;
     }
     
   }
   
   if (this.state.userInput.length === truthVal){
      isNumValid = true;
   }
  
   
  
   if((isNumValid === true)) {
     return true;
   }else{
    
    return false;
   }
 

  }

   

  convertInputToSelectedBase = (inputValue, currentbase, convertToBase) =>{
    let num1 = 0;

    inputValue = this.state.userInput;
    currentbase = this.state.baseId1;
    convertToBase = this.state.baseId2;

    num1 = parseInt(inputValue,currentbase);

      if(this.state.userInput.length === 0) {
        alert("Error, please enter a number");
      }else{
        
        if ((isNaN(num1))) {
           this.setState({BaseConversionOutput: "Error, the conversion does not exist."});
        }else if(convertToBase === 16){
           this.setState({BaseConversionOutput: num1.toString(convertToBase).toUpperCase()});

        }else{
         if(convertToBase === 2) {
          //limit binary solutions to 4 to 8 bits
             if(num1 > 4){
                this.setState({BaseConversionOutput: num1.toString(convertToBase).padStart(8, "0")});
             }else{
               this.setState({BaseConversionOutput: num1.toString(convertToBase).padStart(4,"0")});
             }
         }else{
          let isValidDecimal = this.validateDecimalInputs();

          if(isValidDecimal === true){
             this.setState({BaseConversionOutput: num1.toString(convertToBase)}); 
          }else{
            alert("Error please enter a number");
          }

         }
        }

      }


    }
    

  
  render(){
   
      return(
      <div className="inputFormContainer mb-5">
         <form className="inputFormBaseConversion">
           <AppName formName="Base Conversion" />

          <div className="form-group mt-2">
            <label htmlFor="selectForm">Convert From</label>
            <select  onChange={this.selectAChoice1} className="form-control" id="selectForm">
              <option id="option1" value="Base 2 (Binary)">Base 2 (Binary)</option>
              <option id="option2" value="Base 8 (Octal)">Base 8 (Octal)</option>
              <option id="option3" value="Base 10 (Decimal)" >Base 10 (Decimal)</option>
              <option id="option4" value="Base 16 (Hexadecimal)">Base 16 (Hexadecimal)</option>
            </select>
          </div> 

          <div className="form-group mt-2">
            <label htmlFor="selectForm">Convert To</label>
            <select  onChange={this.selectAChoice2} className="form-control" id="selectForm">
              <option id="option1" value="Base 2 (Binary)">Base 2 (Binary)</option>
              <option id="option2" value="Base 8 (Octal)">Base 8 (Octal)</option>
              <option id="option3" value="Base 10 (Decimal)" >Base 10 (Decimal)</option>
              <option id="option4" value="Base 16 (Hexadecimal)">Base 16 (Hexadecimal)</option>
            </select>
          </div> 

  
        <div className="form-group mt-2">
           <label htmlFor="inputField1">Number</label>
           <input type="text" className="form-control" id="inputfield1" onChange={this.getUserInput} />
        </div>

           <div className='mt-3'>
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">Conversion</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={this.state.BaseConversionOutput} disabled></textarea>
               </div>
             </div>
         </div>

           <SubmitButton inputName="Convert" handleClick={this.convertInputToSelectedBase}/>
         </form>
 
        
      
        
        
      </div>
      );
  }
    
}


export default BaseConversion;