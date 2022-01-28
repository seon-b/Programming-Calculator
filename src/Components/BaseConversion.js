import React,{Component} from 'react';
import './BaseConversion.css'
import AppName from './AppName';
// import InputText from './InputText.js'
// import InputSelect from './InputSelect.js'
//import RadioButton from './RadioButton';
import SubmitButton from './SubmitButton.js';
// import OutputTextArea from './OutputTextArea.js'
// import BaseComponent1 from './BaseComponent1.js';
// import BaseComponent2 from './BaseComponent2.js';


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
    console.log("function is working");
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

   

  convertInputToSelectedBase = (inputValue, currentbase, convertToBase) =>{
    let num1 = 0;

    inputValue = this.state.userInput;
    currentbase = this.state.baseId1;
    convertToBase = this.state.baseId2;

    num1 = parseInt(inputValue,currentbase);
    if (isNaN(num1)){
    this.setState({BaseConversionOutput: "Error, the conversion does not exist."});
    }else if(convertToBase === 16){
    this.setState({BaseConversionOutput: num1.toString(convertToBase).toUpperCase()});

    }else{
    this.setState({BaseConversionOutput: num1.toString(convertToBase).toUpperCase()});
    }


    }
    

  
  render(){
   
      return(
      <div className='inputFormContainer mb-5'>
         <form className='inputFormBaseConversion'>
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