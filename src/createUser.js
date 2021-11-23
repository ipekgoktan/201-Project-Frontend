import logo from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/logo.svg';
import title from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/title.svg';
import enteruser from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/enteruser.svg';
import enterpwd from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/enterpwd.svg';
import confirmpwd from  '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/confirmPassword.svg';
import enteremail from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/images/enteremail.svg';

import '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/createUser.css';

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
