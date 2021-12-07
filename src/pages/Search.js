import logo from './../images/logo.svg';
import title from './../images/title.svg';
import entertimes from './../images/entertimes.svg';
import guestemails from './../images/guestemails.svg';
import searchfortimes from './../images/searchfortimes.svg';
import whiterect from './../images/whiterect.svg';
import {Link } from "react-router-dom";
import Cookie from 'universal-cookie';

import './Search.css';
import Groupschedule from './Groupschedule';


function tryy(){
  var inputtimes = document.getElementById("times").value;
  var inputemails = document.getElementById("emails").value;
  var cookie = new Cookie()
  var inputTimesarray = inputtimes.split(",")
  var inputEmailsarray = inputemails.split(",")
  inputEmailsarray.push(cookie.get("email"))

  cookie.set('inputemails', inputEmailsarray, { path: '/' })
  

}

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
          <input type="text" className= "InputBox" id="times"></input>
        </form>        <img src={guestemails} className="Search-items" />
        <form className= "formLocation">
          <input type="text" className= "InputBox" id="emails"></input>
        </form>
        
        <Link to={`/Groupschedule`}>
          <img src={searchfortimes} className="Search-items" onClick={tryy}/>
        </Link>

      </header>
      
      
     
    </div>
  );
}

export default Search;
