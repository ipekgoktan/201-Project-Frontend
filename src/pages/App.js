import logo from './../images/logo.svg';
import title from './../images/title.svg';
import enteruser from './../images/enteruser.svg';
import enterpwd from './../images/enterpwd.svg';
import login from './../images/login.svg';
import signup from './../images/signup.svg';
import {Link } from "react-router-dom";
import Cookies from 'universal-cookie';

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
const cookies = new Cookies();


function tryy(){
  var userEmail = document.getElementById("UsernameBox").value;
  var userPass = document.getElementById("PasswordBox").value;
  const auth = getAuth();

  signInWithEmailAndPassword(auth, userEmail, userPass)
    .then((userCredential) => {
      //Signed in
      const user = userCredential.user;
      const token = userCredential.user.accessToken;
      cookies.set('idToken', token, { path: '/' });
      //window.alert("id token: " + cookies.get('idToken'));
      var axios = require('axios');
      var data = JSON.stringify({
        "email": userEmail,
        "password": userPass,
        "returnSecureToken": true
      });

      var config = {
        method: 'post',
        url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=<api key>',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };

      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
      window.location.replace(`/Accmenu`)
      //window.alert(auth.getAuth);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("wrong Password" + errorMessage);
    });

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
        <form className= "formLocation">
          <input type="text" className= "InputBox" id="UsernameBox"></input>
        </form>
        <img src={enterpwd} className="App-items" />
        <form className= "formLocation">
          <input type="text" className= "InputBox" id="PasswordBox"></input>
        </form>

        <img src={login} className="App-items" onClick={tryy} />
        <Link to={`/Signup`}>
          <img src={signup} className="App-items" />
        </Link>

      </header>
    </div>
  );
}

export default App;
