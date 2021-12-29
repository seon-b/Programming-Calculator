import React,{Component} from 'react';
import './ComplementCalculator.css'
import AppName from './AppName';
import InputText from './InputText.js'
import SubmitButton from './SubmitButton.js';


class ComplementCalculator extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputName: this.props.inputName,
      currentConvertedBase: "No Base Selected",
    };
   
  }
    render(){
        return(
        <div className='inputFormContainer mb-5'>
           <form className='inputFormBaseConversion'>
             <AppName formName = "Complement Calculator" />
             <InputText inputName="Binary Number"/>
             <InputText inputName="1's Complement"/>
             <InputText inputName="2's Complement"/>
             <SubmitButton inputName="Convert"/>
           </form>
          
          
        </div>
        );

    }
    
}


export default ComplementCalculator;