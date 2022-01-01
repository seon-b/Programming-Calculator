import React,{Component} from 'react';
import './App.css';
import './Components/NavBar.css'
import BaseConversion from './Components/BaseConversion';
import ComplementCalculator from './Components/ComplementCalculator';
import './Components/DeleteButtonIcon.css'
// import NavBar from './Components/NavBar.js'

// function App() {
//   return (
//     <div className="App container-fluid">
//       <header className="row">
//         <NavBar />
//       </header>
//       <div className='row'>
//         <div className='col-sm-12'>
//           <BaseConversion />
          
      
//         </div>

//       </div>
//     </div>
//   );
// }
class App extends Component{
    // static defaultProps = {
    //     inputName: "default",
        
    //   }; 
  

    constructor(props){
      super(props);
      this.state = {
          inputText: "default",
          buttonState:"default",
          programId: "none",
          programmingCalculator: true,
          baseConversionApp: true,
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

     displayHomepage = () => {
      if(this.state.programmingCalculator === true) {
        this.setState({programmingCalculator: true,
                       baseConversionApp: false,
                       complementCalculatorApp: false,
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
                        <button id='complementCalculatorApp' className='btn'onClick={this.displayComplementCalculatorApp}> <h2><i className="bi bi-plus-slash-minus"></i>&nbsp;<span className='complementCalculator'>Complement Calculator</span></h2> </button> 
                      </div>
                  </section> 

               </nav>
              
            </header>
           <div className='row'>
             {/* App display area */}
             <div className='col-sm-6' style={{display:(this.state.baseConversionApp?"block":"none")}}>
              
              <div className="deleteIconStyle" onClick={this.removeBaseConversionApp}>
                <div><i className="btn bi bi-x-square"></i></div>
              </div>

              <BaseConversion/> 
              
             </div>
             <div className='col-sm-6' style={{display:(this.state.complementCalculatorApp?"block":"none")}}>
             
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
