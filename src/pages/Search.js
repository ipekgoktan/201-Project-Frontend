import logo from './../images/logo.svg';
import title from './../images/title.svg';
import entertimes from './../images/entertimes.svg';
import guestemails from './../images/guestemails.svg';
import searchfortimes from './../images/searchfortimes.svg';
import whiterect from './../images/whiterect.svg';
import {Link } from "react-router-dom";
import Cookies from 'universal-cookie';

import './Search.css';

function Search() {
  return (
    <div className="Search">
      <header className="Search-header">
      
        <Link to={`/App`}>
          <img src={logo} className="Search-items" />
        </Link>
        <Link to={`/App`}>
          <img src={title} className="Search-name" />
        </Link>
      
        <img src={entertimes} className="Search-items" />
        <form className= "formLocation">
          <input type="text" className= "InputBox"></input>
        </form>        <img src={guestemails} className="Search-items" />
        <form className= "formLocation">
          <input type="text" className= "InputBox"></input>
        </form>
        
        <Link to={`/Search`}>
          <img src={searchfortimes} className="Search-items" />
        </Link>

      </header>
      
      
     
    </div>
  );
}

export default Search;
