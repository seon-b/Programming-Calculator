import React,{Component} from 'react';
import './InputForm.css'
import './AppName.css'





class AppName extends Component{
    static defaultProps = {
        formName: "",

      
    }; 

    constructor(props){
      super(props);
      this.state = {
        inputText: this.props.formName,
        
        
      };
    }



    render(){
      return(
        <div className="form-group mt-2">
           <h3 className='appNameStyle'>{this.state.inputText}</h3>
           {/* <label for="inputField1">{this.state.inputText}</label>
           <input type="text" className="form-control" id="inputfield1" placeholder={`${this.state.inputText}`} /> */}
        </div>

    )
    }



}
export default AppName;