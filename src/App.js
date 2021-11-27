import logo from '../src/images/logo.svg';
import title from '../src/images/title.svg';
import enteruser from '../src/images/enteruser.svg';
import enterpwd from '../src/images/enterpwd.svg';
import login from '../src/images/login.svg';
import signup from '../src/images/signup.svg';
import whiterect from '../src/images/whiterect.svg';
import '../src/App.css';
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

function App() {


  return (


    

    <html>
    
    <div className="App">
      
      <header className="App-header">
        
        <div class = "App-Heading">
        <img src={logo} className="App-logo" />
        <img src={title} className="App-Name" />
        </div> 
      </header>
      <div className="App-content">
       
        <img src={enteruser} className="App-items" />

        <form class = "formLocation">
        <input type="text" class = "InputBox" id="UsernameBox"></input>
        </form>
        <img src={enterpwd} className="App-items" />
        <form class = "formLocation">
        <input type="text" class = "InputBox" id="PasswordBox"></input>
        </form>
      </div>
      

      <div class = "ButtonDiv">
        <div class = "TopButtonDiv">
      <button id ='trying' type="button" onClick={tryy} class = "Button"  ><span>Log In</span></button>
      </div>
      <div class = "BottomButtonDiv">
      <button type="button" class = "Button"><span>Sign up</span></button>
      </div>
      </div>
      
     
    </div>
    </html>



  
   
  );
}





/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSFegd3hVP_DQ2P35AUldm8cq8BWUriHo",
  authDomain: "u-of-scheduling-conflicts.firebaseapp.com",
  projectId: "u-of-scheduling-conflicts",
  storageBucket: "u-of-scheduling-conflicts.appspot.com",
  messagingSenderId: "850021422271",
  appId: "1:850021422271:web:db14a028e01540e462a20a",
  measurementId: "G-NTV5ZYV97L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/




export default App;
