import logo from './../images/logo.svg';
import title from './../images/title.svg';
import enteruser from './../images/enteruser.svg';
import enterpwd from './../images/enterpwd.svg';
import login from './../images/login.svg';
import signup from './../images/signup.svg';
import whiterect from './../images/whiterect.svg';
import {Link } from "react-router-dom";


import './Yourschedule.css';

function Yourschedule() {
  return (
    <div className="Yourschedule">
      <header className="Yourschedule-header">
      
        <Link to={`/Yourschedule`}>
          <img src={logo} className="Yourschedule-items" />
        </Link>
        <Link to={`/Yourschedule`}>
          <img src={title} className="Yourschedule-name" />
        </Link>
      
        
      </header>
      
      
     
    </div>
  );
}

export default Yourschedule;
