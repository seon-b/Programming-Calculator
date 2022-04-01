import React,{Component} from 'react';
import './App.css';
import './Components/NavBar.css'
import BaseConversion from './Components/BaseConversion';
import ComplementCalculator from './Components/ComplementCalculator';
import './Components/DeleteButtonIcon.css'
import BinaryArithmetic from './Components/BinaryArithmetic';

class App extends Component{

    constructor(props){
      super(props);
      this.state = {
          programmingCalculator: true,
          baseConversionApp: true,
          binaryArithmeticApp: true,
          complementCalculatorApp: true,
      };
     
    }

    // These functions will display and remove the app components from the homepage

     displayBaseConversionApp = () => { 
      if(this.state.baseConversionApp === false) {
        this.setState({baseConversionApp: true}); 
       }
     }

     removeBaseConversionApp = () => { 
      if(this.state.baseConversionApp === true) {
        this.setState({baseConversionApp: false}); 
       }
     }

     displayComplementCalculatorApp = () => { 
         if(this.state.complementCalculatorApp === false) {
          this.setState({complementCalculatorApp: true}); 
         }
     }
     removeComplementCalculatorApp = () => { 
         if(this.state.complementCalculatorApp === true) {
          this.setState({complementCalculatorApp: false}); 
         }
     }
     displayBinaryArithmeticApp = () => { 
         if(this.state.binaryArithmeticApp === false) {
          this.setState({binaryArithmeticApp: true}); 
         }
     }
     removeBinaryArithmeticApp = () => { 
         if(this.state.binaryArithmeticApp === true) {
          this.setState({binaryArithmeticApp: false}); 
         }
     }

     displayHomepage = () => {
      if(this.state.programmingCalculator === true) {
        this.setState({programmingCalculator: true,
                       baseConversionApp: true,
                       binaryArithmeticApp: true,
                       complementCalculatorApp: true,
        }); 
       }

     }

    render(){
      return(
        <div className="App container-fluid">
          {/* navBar Components  */}
            <header className="row mb-4">
              {/* <NavBar /> */}
               <nav className='navBarStyle'>
                  <section className='navBarItem1'>
                      <div className='navBarLogo'>
                          <button id="programmingCalculatorId" className='btn'  onClick={this.displayHomepage}><h1><i className="bi bi-calculator"></i><span className='navBarTitleText'>Programming Calculator</span></h1></button>
                      </div>
                  </section>
                  <section className='navBarItem2'>
                      <div className='navBarLink'>
                          <button id="baseConversionApp" className='btn' onClick={this.displayBaseConversionApp}><h2>X<sup>n&nbsp;</sup><span className='baseConversion'>Base Conversion</span></h2></button>
                      </div>
                  </section>
                  <section className='navBarItem3'>
                      <div className='navBarLink'>
                          <button id="baseConversionApp" className='btn' onClick={this.displayBinaryArithmeticApp}><h2>2<sup>n&nbsp;</sup><span className='baseConversion'>Binary Arithmetic</span></h2></button>
                      </div>
                  </section>
                  <section className='navBarItem4'>
                      <div className='navBarLink'>
                        <button id='complementCalculatorApp' className='btn'onClick={this.displayComplementCalculatorApp}> <h2><i className="bi bi-plus-slash-minus"></i>&nbsp;<span className='complementCalculator'>Complement Calculator</span></h2> </button> 
                      </div>
                  </section> 

               </nav>
              
            </header>
           <div className='row'>
             {/* App display area */}
             <div className='col-sm-4' style={{display:(this.state.baseConversionApp?"block":"none")}}>
              
                <div className="deleteIconStyle" onClick={this.removeBaseConversionApp}>
                  <div><i className="btn bi bi-x-square"></i></div>
                </div>
  
                <BaseConversion/> 
              
             </div>

             <div className='col-sm-4' style={{display:(this.state.binaryArithmeticApp?"block":"none")}}>
             
                <div className="deleteIconStyle" onClick={this.removeBinaryArithmeticApp}>
                  <div><i className="btn bi bi-x-square "></i></div>
                </div>

              <BinaryArithmetic />
                
             </div>
             <div className='col-sm-4' style={{display:(this.state.complementCalculatorApp?"block":"none")}}>
             
                <div className="deleteIconStyle" onClick={this.removeComplementCalculatorApp}>
                  <div><i className="btn bi bi-x-square"></i></div>
                </div>

                <ComplementCalculator />
             
             </div>
             </div>
          </div>
    
      );
    }
    
    

}

export default App;
