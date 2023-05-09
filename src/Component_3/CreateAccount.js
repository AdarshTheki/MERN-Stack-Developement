import React, { Component } from "react";
import "./Account.css";
import { initializeApp } from "firebase/app";
import {  getAuth, 
          createUserWithEmailAndPassword, 
          signInWithEmailAndPassword, 
          sendEmailVerification,
          GoogleAuthProvider,
          signInWithPopup   
      } 
from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBPgdJTEH3PusqMHrP_HiYSmtsBmmHyisA",
  authDomain: "new-firebase-project-8faa3.firebaseapp.com",
  databaseURL: "https://new-firebase-project-8faa3-default-rtdb.firebaseio.com",
  projectId: "new-firebase-project-8faa3",
  storageBucket: "new-firebase-project-8faa3.appspot.com",
  messagingSenderId: "139859263521",
  appId: "1:139859263521:web:0a66a74946c4841da5e360",
  measurementId: "G-7SDQ5CTFW6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);

const Register = (props) => {
  let msgClass = ["text-center"];
  if(props.type){
    msgClass.push("text-success");
  }else{
    msgClass.push("text-danger");
  }
  return (
    <div className='main-container'>
      <form className='container' onSubmit={props.register}>
        <h1>Create Account</h1>
        <p>Get started with your free account.</p>
        <span className={msgClass.join(" ")}>{props.massage}</span>
        <button className='google' onClick={props.google}>Signup via google</button>
        <button className='facebook'>Signup via facebook</button>
        <p>or</p>
        <label htmlFor='email'>
          <input
            id='email'
            type='text'
            required
            placeholder='Email address'
            name='email'
          />
        </label>
        <label htmlFor='password'>
          <input
            id='password'
            type='text'
            required
            placeholder='Create password'
            name='password'
          />
        </label>
        <label htmlFor='newPassword'>
          <input
            id='newPassword'
            type='text'
            required
            placeholder='Repeat password'
            name='repeatPassword'
          />
        </label>
        <button type="submit" className='create-account' >Create Account</button>
        <p>
          You have an Account? <a href='/' onClick={props.switch}>Log In</a>
        </p>  
      </form>
    </div>
  );
};

const LogIn = (props) => {
  let msgClass = ["text-center"];
  if(props.type){
    msgClass.push("text-success");
  }else{
    msgClass.push("text-danger");
  }
  return (
    <form className='main-container' onSubmit={props.login}>
      <div className='container'>
        <h1>LogIn Account</h1>
        <p>Get login with your accounts.</p>
        <span className={msgClass.join(" ")}>{props.massage}</span>
        <button className='google' onClick={props.google}>Signup via google</button>
        <button className='facebook'>Signup via facebook</button>
        <p>or</p>
        <label htmlFor='email'>
          <input
            id='email'
            type='text'
            required
            placeholder='Email address'
            name='email'
          />
        </label>
        <label htmlFor='password'>
          <input
            id='password'
            type='text'
            required
            placeholder='Password'
            name='password'
          />
        </label>
        <button className='create-account' type="submit">LogIn</button>
        <p>
          Do you have account?
          <a href='/' onClick={props.switch}>{" "}Create Account</a>
        </p>
      </div>
    </form>
  );
};

class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // page-0 = login , page-1 = register
      page: "1",
      massage: "", 
      // 1-success , 0-error massage
      type: 1,
    };
  }
  pageSwitchHandler = (e) => {
    this.setState({ page: !this.state.page, massage: null });
    e.preventDefault();
  };
  
  registrationHandler = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const repeatPassword = event.target.repeatPassword.value;
    if(password !== repeatPassword){
      this.setState({massage: "Password does not match!", type: 0 });
      return;
    }
    else {  
      this.setState({massage: "Registration Successfully", type: 1 });
    }
    // Register with new user in firebase and sameName user not allowed.   
    createUserWithEmailAndPassword(auth, email, password)
      .then( (data)=> {
        console.log("This is an Data:" ,data);
        // Send and Verify email address in firebase
        sendEmailVerification(auth.currentUser)    
          .then((data) => {
            console.log(data);  // undefine data
          });
        // Registration Success then inputs resets in firebase
        this.setState({ massage: "Registered Successfully", type: 1 }, () => {
          event.target.email.value = "";
          event.target.password.value = "";
          event.target.repeatPassword.value = "";       
        });
      })
      .catch( (error) => {
        this.setState({ massage: error.massage, type: 0 })
      })
  };

  googleLogInHandler = () => {
    // Google signIn Popup show and signIn automatically
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(result.user)
        this.setState({ massage: credential.signInMethod });
      }).catch((error) => {
        console.log(error.massage)
        this.setState({ massage: error.massage });
      });
  };

  logInHandler = (event) => {
    event.preventDefault(); 
    const email = event.target.email.value;
    const password = event.target.password.value;
    // Login email in firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => {
        console.log(data);
        if(data.user.emailVerified === true){
          this.setState({ massage: "Login Successfully", type:1 });
        }else{
          this.setState({ massage: "Your Email is not verified yet!" });
        }
      })
      .catch((error) => {
        this.setState({ massage: error.code });
      });
  }

  render() {
    return (
      <div>
        {this.state.page 
        ? <Register
            type={this.state.type}  
            massage={this.state.massage}
            switch={this.pageSwitchHandler}
            register={this.registrationHandler}
            google={this.googleLogInHandler}
            /> 
            : <LogIn 
            type={this.state.type}  
            massage={this.state.massage}
            switch={this.pageSwitchHandler}
            login={this.logInHandler}
            google={this.googleLogInHandler}
          />}
      </div>
    );
  }
}
export default Forms;
