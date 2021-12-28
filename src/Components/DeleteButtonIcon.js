import React,{Component} from 'react';
import './DeleteButtonIcon.css'


class DeleteButtonIcon extends Component{
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
        <div className="deleteIconStyle">
           <div><i className="btn bi bi-x-square"></i></div>
           {/* <label for="inputField1">{this.state.inputText}</label>
           <input type="text" className="form-control" id="inputfield1" placeholder={`${this.state.inputText}`} /> */}
        </div>

    )
    }



}
export default DeleteButtonIcon;