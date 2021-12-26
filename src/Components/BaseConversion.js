import React,{Component} from 'react';
import './BaseConversion.css'
import InputText from './InputText.js'
import InputSelect from './InputSelect.js'
import SubmitButton from './SubmitButton.js';


class BaseConversion extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputName: this.props.inputName,
      currentConvertedBase: "No Base Selected",
    };
   
  }
    render(){
        return(
        <div className='inputFormContainer mt-5'>
           <form className='inputFormBaseConversion'>
             <InputSelect />
             <InputText inputName={this.state.inputName}/>
             <SubmitButton inputName="Convert"/>
           </form>
          
          
        </div>
        );

    }
    
}


export default BaseConversion;