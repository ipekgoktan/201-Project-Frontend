import React from 'react';
import ReactDOM from 'react-dom';
import '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/App.css';
import App from '/Users/nicolerussack/Documents/GitHub/201-Project-Frontend/src/App.js';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();