import React,{Component} from 'react';
import './InputForm.css'





class InputSelect extends Component{
    static defaultProps = {
        inputName: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        
    }; 

    constructor(props){
    super(props);
    this.state = {
        selectedChoice1: true,
        selectedChoice2: false,
        selectedChoice3: false,
        selectedChoice4: false,
       
    };
    }

    // This function sets the state of the selected choice
    selectAChoice = (e) =>{
      if(this.props.option1 === e.target.value){
         this.setState({selectedChoice1: true});
         console.log(`${this.state.selectedChoice1} choice1 selected`);
         
      }
      if(this.props.option2 === e.target.value){
         this.setState({selectedChoice2: true});
         console.log(`${this.state.selectedChoice1} choice2 selected`);
         
      }
      if(this.props.option3 === e.target.value){
         this.setState({selectedChoice3: true});
         console.log(`${this.state.selectedChoice1} choice3 selected`);
         
      }
      if(this.props.option4 === e.target.value){
         this.setState({selectedChoice4: true});
         console.log(`${this.state.selectedChoice1} choice4 selected`);
         
      }

    }


render(){
    return(
      <div className="form-group mt-2">
        <label htmlFor="selectForm">{this.props.inputName}</label>
        <select  onChange={this.selectAChoice} className="form-control" id="selectForm">
          <option id="option1" value={this.props.option1}>{this.props.option1}</option>
          <option id="option2" value={this.props.option2}>{this.props.option2}</option>
          <option id="option3" value={this.props.option3}>{this.props.option3}</option>
          <option id="option4" value={this.props.option4}>{this.props.option4}</option>
        </select>
      </div> 

    );
}



}
export default InputSelect;