import logo from '../src/images/logo.svg';
import title from '../src/images/title.svg';
import enteruser from '../src/images/enteruser.svg';
import enterpwd from '../src/images/enterpwd.svg';
import confirmpwd from  '../src/images/confirmPassword.svg';
import enteremail from '../src/images/enteremail.svg';

import '../src/createUser.css';
import React from 'react'

function App2() {
  return (
    <div className="App">
      
      <header className="App-header">
        
        <div class = "App-Heading">
        <img src={logo} className="App-logo" />
        <img src={title} className="App-Name" />
        </div>
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
        </a> */}
      </header>
      <div className="App-content">
       
        <img src={enteruser} className="App-items" />

        <form class = "formLocation">
        <input type="text" class = "InputBox"></input>
        </form>

        <img src={enteremail} className=".App-items-two" />

        <form class = "formLocation">
        <input type="text" class = "InputBox"></input>
        </form>

        <img src={enterpwd} className="App-items" />

        <form class = "formLocation">
        <input type="text" class = "InputBox"></input>
        </form>
        <div c >
        <img src={confirmpwd} lassName="App-items" />
        </div>
        <form class = "formLocation">
        <input type="text" class = "InputBox"></input>
        </form>
      </div>
      

      <div class = "ButtonDiv">
      <button type="button" class = "Button"><span>Sign up</span></button>
      </div>
      
     
    </div>
  );
}

export default App2;
