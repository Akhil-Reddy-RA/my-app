import React from 'react';



const Header = (props) => {
  return(
    <div style={{backgroundColor:'lightblue', padding:'20px'}}>

    <h1 style={{display:'inline'}}>React Tutorial</h1>
    <button style={{float:'right'}} onClick={props.deleteToken}>Logout</button>
    
    </div>
   
  )

}

export default Header;