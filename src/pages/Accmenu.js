import logo from './../images/logo.svg';
import title from './../images/title.svg';
import searchfortimes from './../images/searchfortimes.svg';
import updateschedule from './../images/updateschedule.svg';

import {Link } from "react-router-dom";

import './Accmenu.css';

function Accmenu() {
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
