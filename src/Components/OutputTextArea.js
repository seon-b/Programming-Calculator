import React,{Component} from 'react';


class OutputTextArea extends Component {
    static defaultProps = {
        inputName: "",
        
    }; 

  constructor(props){
    super(props);
    this.state = {
      inputText: this.props.inputName,
    
    };
   
  }
    render(){
        return(
          <div className='mt-4'>
             <div className="form-group">
               {/* <label forHtml="exampleFormControlTextarea1">{this.state.inputText}</label>
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
               <h6 className="outputAreastyle">Output</h6>
             </div>
         </div>
          
        );

    }
    
}


export default OutputTextArea;