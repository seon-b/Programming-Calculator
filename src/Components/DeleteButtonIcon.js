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
        </div>

    )
    }



}
export default DeleteButtonIcon;