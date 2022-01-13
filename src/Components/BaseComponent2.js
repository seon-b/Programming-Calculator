import React,{Component} from 'react';
import './InputForm.css'





class BaseComponent2 extends Component{
    static defaultProps = {
        inputName: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        // option5: "",
        // option6: "",
        base2:"",
    }; 

    constructor(props){
    super(props);
    this.state = {
      base2SelectedChoice1: true,
      base2SelectedChoice2: false,
      base2SelectedChoice3: false,
      base2SelectedChoice4: false,
    
        // choice5Selected: this.props.option5,
        // choice6Selected: this.props.option6,
    };
    }

    // This function sets the state of the selected choice
    selectAChoice = (e) =>{
      if(this.props.option1 === e.target.value){
         this.setState({base2SelectedChoice1: true, base2: e.target.value, baseId2: 2});
        //  this.setState({base2: e.target.value});
         console.log(`${this.state.base2SelectedChoice1} base2 choice1 selected`);
         
      }
      if(this.props.option2 === e.target.value){
        this.setState({base2SelectedChoice2: true, base2: e.target.value, baseId2: 8});
        //  this.setState({base1: e.target.value});
         console.log(`${this.state.base2SelectedChoice2} base2 choice2 selected`);
         
      }
      if(this.props.option3 === e.target.value){
        this.setState({base2SelectedChoice3: true, base2: e.target.value, baseId2: 10});
        //  this.setState({base2: e.target.value});
         console.log(`${this.state.base2SelectedChoice3} base2 choice3 selected`);
         
      }
      if(this.props.option4 === e.target.value){
        this.setState({base2SelectedChoice4: true, base2: e.target.value, baseId2: 16});
        //  this.setState({base2: e.target.value});
         console.log(`${this.state.base2SelectedChoice4} base2 choice4 selected`);
         
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
export default BaseComponent2;