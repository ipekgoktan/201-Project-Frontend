import logo from './../images/logo.svg';
import title from './../images/title.svg';
import entertimes from './../images/entertimes.svg';
import guestemails from './../images/guestemails.svg';
import searchfortimes from './../images/searchfortimes.svg';
import whiterect from './../images/whiterect.svg';
import {Link } from "react-router-dom";

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
        <form class = "formLocation">
          <input type="text" class = "InputBox"></input>
        </form>        <img src={guestemails} className="Search-items" />
        <form class = "formLocation">
          <input type="text" class = "InputBox"></input>
        </form>
        
        <Link to={`/Search`}>
          <img src={searchfortimes} className="Search-items" />
        </Link>


        {/* <p>
          Edit <code>src/Search.js</code> and save to reload.
        </p>
        <a
          className="Search-link"
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

export default Search;
