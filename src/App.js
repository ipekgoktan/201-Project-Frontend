import logo from './logo.svg';
import title from './title.svg';
import enteruser from './enteruser.svg';
import enterpwd from './endterpwd.svg';
import login from './login.svg';
import signup from './signup.svg';
import whiterect from './whiterect.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <img src={logo} className="App-logo" />
        <img src={title} className="App-name" />
        
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
        <img src={whiterect} className="App-items" />
        <img src={enterpwd} className="App-items" />
        <img src={whiterect} className="App-items" />
      </div>
      
     
    </div>
  );
}

export default App;
