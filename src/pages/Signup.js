import logo from './../images/logo.svg';
import title from './../images/title.svg';
import enteruser from './../images/enteruser.svg';
import enterpwd from './../images/enterpwd.svg';
import login from './../images/login.svg';
import signup from './../images/signup.svg';
import whiterect from './../images/whiterect.svg';
import confirmpwd from './../images/confirmpwd.svg';
import enteremail from './../images/enteremail.svg';
import {Link } from "react-router-dom";


import './Signup.css';

function Signup() {
  return (
    <div className="Signup">
      <header className="Signup-header">
      
        <Link to={`/App`}>
          <img src={logo} className="Signup-items" />
        </Link>
        <Link to={`/App`}>
          <img src={title} className="Signup-name" />
        </Link>
      
        <img src={enteruser} className="Signup-items" />
        <img src={whiterect} className="Signup-items" />
        <img src={enterpwd} className="Signup-items" />
        <img src={whiterect} className="Signup-items" />
        <img src={confirmpwd} className="Signup-items" />
        <img src={whiterect} className="Signup-items" />
        <img src={enteremail} className="Signup-items" />
        <img src={whiterect} className="Signup-items" />

        <Link to={`/Signup`}>
          <img src={signup} className="Signup-items" />
        </Link>


        {/* <p>
          Edit <code>src/Signup.js</code> and save to reload.
        </p>
        <a
          className="Signup-link"
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

export default Signup;
