import React from 'react';
import './TopBar.scss';
import {Person,Mail} from "@material-ui/icons";


const TopBar = ({menuOpen,setmenuOpen}) => {
  return (
    
  <div className={"TopBar "+ (menuOpen && "active")}>
    <div className="wrapper">
      <div className="left">
        <a href="#works" className="logo">Monika Priyadarsini</a>
        
        <div className="itemContainer">
          <Person className="icon"/>
          <span>9944196769</span>
        </div>

        <div className="itemContainer">
          <Mail className="icon"/>
          <span>monikapriyadarsini94@gmail.com</span>
        </div>

      </div>
      <div className="right">
        <div className="ham" onClick={()=>setmenuOpen(!menuOpen)}>
         <span className="line1"></span>
         <span className="line2"></span>
         <span className="line3"></span>
        </div>
      </div>
      </div>
  </div>
  
  )
};

export default TopBar;
