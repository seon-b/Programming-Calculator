import React from 'react';
import './InputForm.css'



const BaseComponent1 = (props) =>{

  return(
          <div className="form-group mt-2">
            <label htmlFor="selectForm">{props.inputName}</label>
            <select  onChange={this.handleChange} className="form-control" id="selectForm">
              <option id="option1" value={props.option1}>{props.option1}</option>
              <option id="option2" value={props.option2}>{props.option2}</option>
              <option id="option3" value={props.option3}>{props.option3}</option>
              <option id="option4" value={props.option4}>{props.option4}</option>
            </select>
          </div> 
    
        );
  
}

export default BaseComponent1;

