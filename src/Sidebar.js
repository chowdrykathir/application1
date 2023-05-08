import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import User from "./User";
import Setting from "./Setting";
import Contact from "./Contact";
import logo from "./images/logo.png";

const Sidebar = ({open}) => {
    return  (
      <div>
      <div className={open?"sidebar collapse":"sidebar"}>
       
      <Router>
      <nav>
      <ul className="link">
        <li>
          <img src={logo} alt={logo} />
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/user">User</Link>
        </li>

        <li>
          <Link to="/setting">Setting</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>


      </Router>
      
      
    </div>
    
    </div>
    
     
    )
};
export default Sidebar;
