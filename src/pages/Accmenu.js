import logo from './../images/logo.svg';
import title from './../images/title.svg';
import searchfortimes from './../images/searchfortimes.svg';
import updateschedule from './../images/updateschedule.svg';
import Cookie from 'universal-cookie';

import {Link } from "react-router-dom";

import './Accmenu.css';

function Accmenu() {
    var cookie = new Cookie();
    //window.alert("cookie test!");
    //window.alert("id token: " + cookie.get('idToken'));
  return (
    <div className="Accmenu">
      <header className="Accmenu-header">
      <Link to={`/App`}>
          <img src={logo} className="Signup-items" />
        </Link>
        <Link to={`/App`}>
          <img src={title} className="Signup-name" />
        </Link>

        <Link to={`/Search`}>
          <img src={searchfortimes} className="Accmenu-items" />
        </Link>
        <Link to={`/Yourschedule`}>
          <img src={updateschedule} className="Accmenu-items" />
        </Link>

      </header>
      
      
     
    </div>
  );
}

export default Accmenu;
