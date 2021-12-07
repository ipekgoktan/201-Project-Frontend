import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from './pages/App';
import Accmenu from './pages/Accmenu';
import Yourschedule from './pages/Yourschedule';
import Groupschedule from './pages/Groupschedule';
import Signup from './pages/Signup';
import Search from './pages/Search';

// const express = require('express');
// const app = express();
// app.use(cors({
//   origin: '*'
// }));
ReactDOM.render(
  
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App/>}/>
      <Route exact path="/App" element={<App/>}/>
      <Route exact path="/Accmenu" element={<Accmenu/>}/>
      <Route exact path="/Search" element={<Search/>}/>
      <Route exact path="/Signup" element={<Signup/>}/>
      <Route exact path="/Yourschedule" element={<Yourschedule/>}/>
      <Route exact path="/Groupschedule" element={<Groupschedule/>}/>
      {/* <App/>
      <Accmenu/> */}
    </Routes> 
  </BrowserRouter>,
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

   

   

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
