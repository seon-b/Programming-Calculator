import React, {createContext, useState} from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const[appTheme, setappTheme] = useState({
        navTheme: "navBarStyle1",
        buttonTheme: "buttonColor1",
        loadingTheme: "loading1",
        alertTheme: "alert1"
    
      });
    
    const[error, setError] = useState(false);
    const[success, setSuccess] = useState(false);
    
    const themeArray = [
        {
          theme1: "navBarStyle1",
          theme2: "buttonColor1",
          theme3: "loading1",
          theme4: "alert1"
        },
        {
          theme1: "navBarStyle2",
          theme2: "buttonColor2",
          theme3: "loading2",
          theme4: "alert2"
        },
        {
          theme1: "navBarStyle3",
          theme2: "buttonColor3",
          theme3: "loading3",
          theme4: "alert3"
        },
        {
          theme1: "navBarStyle4",
          theme2: "buttonColor4",
          theme3: "loading4",
          theme4: "alert4"
        },
        {
          theme1: "navBarStyle5",
          theme2: "buttonColor5",
          theme3: "loading5",
          theme4: "alert5"
        },
        {
          theme1: "navBarStyle6",
          theme2: "buttonColor6",
          theme3: "loading6",
          theme4: "alert6"
        },
        {
          theme1: "navBarStyle7",
          theme2: "buttonColor7",
          theme3: "loading7",
          theme4: "alert7"
        },
        
    
    
    
      ]


const selectTheme = () =>{
    let userNavTheme = themeArray[0].theme1;
    let userButtonTheme = themeArray[0].theme2;
  
    if(appTheme.navTheme === "navBarStyle1"){
      setappTheme({...appTheme, navTheme: themeArray[1].theme1, buttonTheme: themeArray[1].theme2, loadingTheme: themeArray[1].theme3, alertTheme: themeArray[1].theme4});
    }else if(appTheme.navTheme === "navBarStyle2"){
      setappTheme({...appTheme, navTheme: themeArray[2].theme1, buttonTheme: themeArray[2].theme2, loadingTheme: themeArray[2].theme3, alertTheme: themeArray[2].theme4});
    }else if(appTheme.navTheme === "navBarStyle3"){
      setappTheme({...appTheme, navTheme: themeArray[3].theme1, buttonTheme: themeArray[3].theme2, loadingTheme: themeArray[3].theme3, alertTheme: themeArray[3].theme4});
    }else if(appTheme.navTheme === "navBarStyle4"){
      setappTheme({...appTheme, navTheme: themeArray[4].theme1, buttonTheme: themeArray[4].theme2, loadingTheme: themeArray[4].theme3, alertTheme: themeArray[4].theme4});
    }else if(appTheme.navTheme === "navBarStyle5"){
      setappTheme({...appTheme, navTheme: themeArray[5].theme1, buttonTheme: themeArray[5].theme2, loadingTheme: themeArray[5].theme3, alertTheme: themeArray[5].theme4});
    }else if(appTheme.navTheme === "navBarStyle6"){
      setappTheme({...appTheme, navTheme: themeArray[6].theme1, buttonTheme: themeArray[6].theme2, loadingTheme: themeArray[6].theme3, alertTheme: themeArray[6].theme4});
    }else if(appTheme.navTheme === "navBarStyle7"){
      setappTheme({...appTheme, navTheme: themeArray[0].theme1, buttonTheme: themeArray[0].theme2, loadingTheme: themeArray[0].theme3, alertTheme: themeArray[0].theme4});
    }else{
  
    }
  
    
  }
  
  return (
      <ThemeContext.Provider
        value={[
          appTheme,
          themeArray,
          selectTheme,
         
        ]}
      >
        {children}
      </ThemeContext.Provider>
  )
  
  }
  
  export {ThemeContext, ThemeProvider};
  



