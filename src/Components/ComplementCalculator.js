import React,{Component} from 'react';
import './ComplementCalculator.css'
import AppName from './AppName';
import InputText from './InputText.js'
import SubmitButton from './SubmitButton.js';
// import OutputTextArea from './OutputTextArea';


class ComplementCalculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      binaryNumber:"",
      complement1: "",
      complement2: "",
      isSignedNumber: false,
      isUnsignedNumber: true,
      
    };
   
  }

  getUserInput = (e) =>{
    if(this.state.signedNumber === false){
      this.setState({binaryNumber: e.target.value.padStart(8,'0'),});
    }else{
      this.setState({binaryNumber: e.target.value.padStart(8,'1'),});
    }
   console.log(this.state.binaryNumber)
    
  }

  calculateComplements = () => {
    let binaryNumberArray = [];
    let binaryNumberInverse = "";


    for(let i = 0; i < this.state.binaryNumber.length; i++){
      if(this.state.binaryNumber[i] === "0"){
          binaryNumberArray.push("1");
      }else if(this.state.binaryNumber[i] === "1"){
          binaryNumberArray.push("0")
      }else{
  
      }
  }
  
   binaryNumberInverse = binaryNumberArray.join("");  
   let binaryNumberInverseSum = ((parseInt(binaryNumberInverse,2)) + (parseInt("1",2)));
   this.setState({complement1: binaryNumberInverse, complement2: binaryNumberInverseSum.toString(2)});
  
  }

  isSignedNumberType = (e) => {
   if(e.target.checked === true){
     this.setState({isSignedNumber: true, isUnsignedNumber: false,});
   }
   console.log(this.state.isSignedNumber);
  }

  isUnsignedNumberType = (e) => {
   if(e.target.checked === true){
     this.setState({isSignedNumber: false, isUnsignedNumber: true,});
   }
   console.log(this.state.isUnsignedNumber);
  }

    render(){
        return(
        <div className='inputFormContainer mb-5'>
           <form className='inputFormBaseConversion'>
             <AppName formName = "Complement Calculator" />
             <InputText inputName="Binary Number" handleChange1={this.getUserInput}/>
             {/* <div className="form-check mt-2">
               <input className="form-check-input" type="checkbox" value="" id="numberType" onChange={this.checkBinaryNumberType} />
               <label className="form-check-label" htmlFor="numberType">Signed Number</label>
             </div> */}
             <div className='d-flex justify-content-between mt-3'>
             <div className="form-check">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" onChange={this.isUnsignedNumberType} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">Unsigned Number</label>
             </div>
             <div class="form-check">
               <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" onChange={this.isSignedNumberType}/>
               <label className="form-check-label" htmlFor="flexRadioDefault2">Signed Number</label>
             </div>
             </div>
            <div className='mt-3'>  
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">1's Complement</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={this.state.complement1} disabled></textarea>
               </div>
             </div>
         </div>
         <div className='mt-3'>
             <div className="form-group">
               <div className="outputAreastyle">
                  <label htmlFor="conversionOutputArea">2's Complement</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={this.state.complement2} disabled></textarea>
               </div>
             </div>
         </div>
             <SubmitButton inputName="Convert" handleClick={this.calculateComplements}/>
           </form>
          
          
        </div>
        );

    }
    
}


export default ComplementCalculator;