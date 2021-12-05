import logo from './../images/logo.svg';
import title from './../images/title.svg';
import enteruser from './../images/enteruser.svg';
import enterpwd from './../images/enterpwd.svg';
import login from './../images/login.svg';
import signup from './../images/signup.svg';
import whiterect from './../images/whiterect.svg';
import confirmpwd from './../images/confirmpwd.svg';
import enteremail from './../images/enteremail.svg';
import {Link } from "react-router-dom";


import './Signup.css';

import { getAuth, createUserWithEmailAndPassword, reauthenticateWithCredential } from "firebase/auth";
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
  var userEmail = document.getElementById("Email").value;
  var userPass = document.getElementById("Passward1").value;
  var CuserPass = document.getElementById("Passward2").value;
  if (userPass != CuserPass){
    window.alert("Passwords do not match");
    return;
  }

  window.alert(userEmail + ' ' + userPass);
  const auth = getAuth();
  var axios = require('axios');
  var data = '';

  
  createUserWithEmailAndPassword(auth, userEmail, userPass)
    .then((userCredential) => {
      console.log(userCredential)
      const user = userCredential.user;
      window.location.replace(`/App`);
      var config = {
        method: 'post',
        url: 'https://uofschedulingconflictsapi.herokuapp.com/api/account',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer' + auth
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
      //user is logged in here
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      window.alert("Did not work" + errorMessage);
      // ..
    });
}



function Signup() {
  return (
    <div className="Signup">
      <header className="Signup-header">
      
        <Link to={`/App`}>
          <img src={logo} className="Signup-items" />
        </Link>
        <Link to={`/App`}>
          <img src={title} className="Signup-name" />
        </Link>

        <img src={enteremail} className="Signup-items" />
        <form class = "formLocation">
          <input type="text" class = "InputBox" id = 'Email'></input>
        </form>
        <img src={enterpwd} className="Signup-items" />
        <form class = "formLocation">
          <input type="text" class = "InputBox" id = 'Passward1'></input>
        </form>
        <img src={confirmpwd} className="Signup-items" />
        <form class = "formLocation">
          <input type="text" class = "InputBox" id = 'Passward2'></input>
        </form>
        
        <Link to={`/Signup`}>
          <img src={signup} onClick={tryy} className="Signup-items" />
        </Link>
      </header>
      
      
     
    </div>
  );
}

export default Signup;
