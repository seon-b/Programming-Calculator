import React,{Component} from 'react';
import './InputForm.css'




class BaseComponent1 extends Component{
    static defaultProps = {
        inputName: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        // option5: "",
        // option6: "",
        base1:"",
    }; 

    constructor(props){
    super(props);
    this.state = {
      base1SelectedChoice1: true,
      base1SelectedChoice2: false,
      base1SelectedChoice3: false,
      base1SelectedChoice4: false,
     
        // choice5Selected: this.props.option5,
        // choice6Selected: this.props.option6,
    };
    }

    // This function sets the state of the selected choice
    selectAChoice = (e) =>{
      if(this.props.option1 === e.target.value){
         this.setState({base1SelectedChoice1: true, base1: e.target.value, baseId1: 2});
        //  this.setState({base1: e.target.value});
         console.log(`${this.state.base1SelectedChoice1} ${this.state.base1} base1 choice1 selected`);
         
      }
      if(this.props.option2 === e.target.value){
        this.setState({base1SelectedChoice2: true, base1: e.target.value, baseId1: 8});
        //  this.setState({base1: e.target.value});
         console.log(`${this.state.base1SelectedChoice2} ${this.state.base1} base1 choice2 selected`);
         
      }
      if(this.props.option3 === e.target.value){
        this.setState({base1SelectedChoice3: true, base1: e.target.value, baseId1: 10});
        //  this.setState({base1: e.target.value});
         console.log(`${this.state.base1SelectedChoice3} ${this.state.base1} base1 choice3 selected`);
         
      }
      if(this.props.option4 === e.target.value){
        this.setState({base1SelectedChoice4: true, base1: e.target.value, baseId1: 16});
        //  this.setState({base1: e.target.value});
         console.log(`${this.state.base1SelectedChoice4} ${this.state.base1} base1 choice4 selected`);
         
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
          {/* <option>{this.props.option5}</option>
          <option>{this.props.option6}</option> */}
        </select>
      </div> 

    );
}



}
export default BaseComponent1;