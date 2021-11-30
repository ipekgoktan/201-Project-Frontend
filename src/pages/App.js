import logo from './../images/logo.svg';
import title from './../images/title.svg';
import enteruser from './../images/enteruser.svg';
import enterpwd from './../images/enterpwd.svg';
import login from './../images/login.svg';
import signup from './../images/signup.svg';
import whiterect from './../images/whiterect.svg';
import {Link } from "react-router-dom";

import './App.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBSFegd3hVP_DQ2P35AUldm8cq8BWUriHo",
  authDomain: "u-of-scheduling-conflicts.firebaseapp.com",
  projectId: "u-of-scheduling-conflicts",
  storageBucket: "u-of-scheduling-conflicts.appspot.com",
  messagingSenderId: "850021422271",
  appId: "1:850021422271:web:db14a028e01540e462a20a",
  measurementId: "G-NTV5ZYV97L"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function tryy(){
  //var userEmail = document.getElementlById("UsernameBox").value;
  var userEmail = document.getElementById("UsernameBox").value;
  var userPass = document.getElementById("PasswordBox").value;

  const auth = getAuth();
  signInWithEmailAndPassword(auth, userEmail, userPass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        window.alert("Doneee");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("wrong Password" + errorMessage);
      });
}

function scheduleEvent(){
  var time = document.getElementById("TimeBox").value;
  var guests = document.getElementById("GuestBox").value;
  guests = guests.replace(/\s/g, ''); //removes spaces
  var emailArr = guests.split(','); //array of emails

  const auth = getAuth();
  //searchForTimes(auth, time, emailArr)
  //TODO: How to make this call? no postman doc
}

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
        <form class = "formLocation">
          <input type="text" class = "InputBox" id="UsernameBox"></input>
        </form>
        <img src={enterpwd} className="App-items" />
        <form class = "formLocation">
          <input type="text" class = "InputBox" id="PasswordBox"></input>
        </form>

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
