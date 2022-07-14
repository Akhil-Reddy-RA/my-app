import React from 'react';
// import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
// import 'react-pro-sidebar/dist/css/styles.css'
// import { Link } from 'react-router-dom';


const Sidebar = () => {
  return(
//     <ProSidebar>
//       <Menu iconShape="square">
   
//         <MenuItem >
//             Table<Link to="/" />
//         </MenuItem>
//         <MenuItem>
//             Form<Link to="/Form" />
//         </MenuItem>
    
//   </Menu>
// </ProSidebar>
<div className='sidebar'>
  <a href='./'><p style={{color:'white', textAlign:'center', padding:'20px 0px 0px 0px ' }}>Table</p></a>
  <a href='./Form'><p style={{color:'white', textAlign:'center'}}>Form</p></a>

</div>
  )

}

export default Sidebar;