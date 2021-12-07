import logo from './../images/logo.svg';
import title from './../images/title.svg';
import enteruser from './../images/enteruser.svg';
import enterpwd from './../images/enterpwd.svg';
import login from './../images/login.svg';
import signup from './../images/signup.svg';
import whiterect from './../images/whiterect.svg';
import Table from './../components/Table'
import {Link } from "react-router-dom";
import Schedule from './Schedule'
import Cookie from 'universal-cookie';


import './Yourschedule.css';

function Yourschedule() {
  return (
    <div className="Yourschedule-body">
    <div className="Yourschedule">
      <header className="Yourschedule-header">
        <Link to={`/App`}>
          <img src={logo} className="Yourschedule-items" />
        </Link>
        <Link to={`/App`}>
          <img src={title} className="Yourschedule-name" />
        </Link>
      </header>
      <Schedule/>
    </div>
    
    </div>
  );
}

export default Yourschedule;
