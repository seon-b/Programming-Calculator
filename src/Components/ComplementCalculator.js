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
      
    };
   
  }

  getUserInput = (e) =>{
      this.setState({binaryNumber: e.target.value,});
      console.log(`complment calculator instance: ${this.state.binaryNumber}`);
   
    
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

    render(){
        return(
        <div className='inputFormContainer mb-5'>
           <form className='inputFormBaseConversion'>
             <AppName formName = "Complement Calculator" />
             <InputText inputName="Binary Number" handleChange1={this.getUserInput}/>
             {/* <OutputTextArea inputName="1's Complement" />
             <OutputTextArea inputName="2's Complement"/> */}
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