import React,{Component} from 'react';


class OutputTextArea extends Component {
    static defaultProps = {
        inputName: "",
       
        
    }; 

  constructor(props){
    super(props);
    this.state = {
       outputText: this.props.solution,
     
    
    };
  }
   

  
    render(){
        return(
          <div className='mt-3'>
             <div className="form-group">
               {/* <label forHtml="exampleFormControlTextarea1">{this.state.inputText}</label>
               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea> */}
               <div className="outputAreastyle">
               {/* <h6 >{this.props.inputName}</h6>
               <textarea rows={4}></textarea> */}

              
                  <label htmlFor="conversionOutputArea">{this.props.inputName}</label>
                  <textarea className="form-control" id="conversionOutputArea" rows="2" value={this.state.outputText} disabled></textarea>
                  
               
               
               </div>
             </div>
         </div>
          
        );

    }
    
}


export default OutputTextArea;