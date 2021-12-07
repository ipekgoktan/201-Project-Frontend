import logo from './../images/logo.svg';
import title from './../images/title.svg';
import enteruser from './../images/enteruser.svg';
import enterpwd from './../images/enterpwd.svg';
import login from './../images/login.svg';
import signup from './../images/signup.svg';
import whiterect from './../images/whiterect.svg';
import {Link } from "react-router-dom";
import Cookie from 'universal-cookie';


import './Groupschedule.css';

function Groupschedule() {
  return (
    <div className="Groupschedule">
      <header className="Groupschedule-header">
      
        <Link to={`/Groupschedule`}>
          <img src={logo} className="Groupschedule-items" />
        </Link>
        <Link to={`/Groupschedule`}>
          <img src={title} className="Groupschedule-name" />
        </Link>
      
        <img src={enteruser} className="Groupschedule-items" />
        <img src={whiterect} className="Groupschedule-items" />
        <img src={enterpwd} className="Groupschedule-items" />
        <img src={whiterect} className="Groupschedule-items" />

        <Link to={`/Groupschedule`}>
          <img src={login} className="Groupschedule-items" />
        </Link>
        <Link to={`/Groupschedule`}>
          <img src={signup} className="Groupschedule-items" />
        </Link>


        {/* <p>
          Edit <code>src/Groupschedule.js</code> and save to reload.
        </p>
        <a
          className="Groupschedule-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>*/}
      </header>
      
      
     
    </div>
  );
}

export default Groupschedule;
