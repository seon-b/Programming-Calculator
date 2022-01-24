import React,{Component} from 'react';
import './BaseConversion.css'
import AppName from './AppName';
import InputText from './InputText.js'
// import InputSelect from './InputSelect.js'
import RadioButton from './RadioButton';
import SubmitButton from './SubmitButton.js';
import OutputTextArea from './OutputTextArea.js'
import BaseComponent1 from './BaseComponent1.js';
import BaseComponent2 from './BaseComponent2.js';


class BaseConversion extends Component {
  constructor(props){
    super(props);
    this.state = {
      BaseConversionOutput:"",
      baseId1: 2,
      baseId2: 2,
    };

    
   
  }


  // BaseConversionFunction = (numberToConvert,conversionOfNumber) => {

  // }

   

  // convertDecimalInputToSelectedBase = (currentbase, inputValue) =>{
  //   inputValue = inputValue.toString(currentbase);
  //   }
    

  
  render(){
   
      return(
      <div className='inputFormContainer mb-5'>
         <form className='inputFormBaseConversion'>
           <AppName formName="Base Conversion" />
           <BaseComponent1 inputName = "Convert From" option1 = "Base 2 (Binary)" option2 = "Base 8 (Octal)" option3 = "Base 10 (Decimal)"  option4= "Base 16 (Hexadecimal)"/>
           <BaseComponent2 inputName = "Convert To" option1 = "Base 2 (Binary)" option2 = "Base 8 (Octal)" option3 = "Base 10 (Decimal)"  option4= "Base 16 (Hexadecimal)"/>
           <RadioButton inputName1 = "8 Bits" inputName2 = "16 Bits" inputName3 = "32 Bits"/>
           <InputText inputName="Number"/>
           <OutputTextArea inputName="Conversion"/>
           <SubmitButton inputName="Convert"/>
         </form>
 
        
      
        
        
      </div>
      );
  }
    
}


export default BaseConversion;