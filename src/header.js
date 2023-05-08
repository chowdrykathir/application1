import React from "react";
import Menu from"./images/download.png";


const Header =({click})=> {
    return ( <div>
      <div className="header">
        <img src={Menu} alt="menu" onClick={click}/>
      
      </div>
        </div>
    ); 
};
export default Header;
