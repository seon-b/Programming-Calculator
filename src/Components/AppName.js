import React from 'react';
import './InputForm.css'
import './AppName.css'



function AppName (props){

  return(
      <div className="form-group mt-2">
         <h3 className='appNameStyle'>{props.formName}</h3>
         
      </div>
    
        )
        


}
export default AppName;