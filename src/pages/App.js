import logo from './../images/logo.svg';
import title from './../images/title.svg';
import enteruser from './../images/enteruser.svg';
import enterpwd from './../images/enterpwd.svg';
import login from './../images/login.svg';
import signup from './../images/signup.svg';
import whiterect from './../images/whiterect.svg';
import {Link } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Link to={`/App`}>
          <img src={logo} className="App-items" />
        </Link>
        <Link to={`/App`}>
          <img src={title} className="App-name" />
        </Link>
      
        <img src={enteruser} className="App-items" />
        <img src={whiterect} className="App-items" />
        <img src={enterpwd} className="App-items" />
        <img src={whiterect} className="App-items" />

        <Link to={`/Accmenu`}>
          <img src={login} className="App-items" />
        </Link>
        <Link to={`/Signup`}>
          <img src={signup} className="App-items" />
        </Link>


        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
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

export default App;
