import logo from './logo.svg';
import title from './title.svg';
import './menu.css';

function menu() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={title} className="App-name" />
        <img src={logo} className="App-logo"/>
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
    </div>
  );
}

export default menu;
