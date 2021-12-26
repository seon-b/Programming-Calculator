import React,{Component} from 'react';
import './App.css';
import './Components/NavBar.css'
import BaseConversion from './Components/BaseConversion';
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
          baseConversionApp: false,
          complementCalculatorApp: false,
      };
     
    }
    
     displayBaseConversionApp = () => { 
         if(this.state.baseConversionApp === false) {
          this.setState({baseConversionApp: true}); 
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
            <header className="row">
              {/* <NavBar /> */}
               <nav className='navBarStyle'>
                  <section className='navBarItem1'>
                      <div className='navBarLogo'>
                          <button id="programmingCalculatorId" className='btn'  onClick={this.displayHomepage}><h1><i class="bi bi-calculator"></i><span className='navBarTitleText'>Programming Calculator</span></h1></button>
                      </div>
                  </section>
                  <section className='navBarItem2'>
                      <div className='navBarLink'>
                          <button id="baseConversionApp" className='btn' onClick={this.displayBaseConversionApp}><h2>X<sup>n&nbsp;</sup><span className='baseConversion'>Base Conversion</span></h2></button>
                      </div>
                  </section>
                  <section className='navBarItem3'>
                      <div className='navBarLink'>
                        <button id='complementCalculatorApp' className='btn'> <h2><i class="bi bi-plus-slash-minus"></i>&nbsp;<span className='complementCalculator'>Complement Calculator</span></h2> </button> 
                      </div>
                  </section> 

               </nav>
              
            </header>
           <div className='row'>
             <div className='col-sm-12' style={{display:(this.state.baseConversionApp?"block":"none")}}>
              <BaseConversion />
              
             </div>
             </div>
          </div>
    
      );
    }
    
    

}

export default App;
