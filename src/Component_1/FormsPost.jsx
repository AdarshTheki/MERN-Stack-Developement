import React, { Component, useState } from "react";
import { initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC1m_UF8iJm095oqCnqODbF-f03bUY-93o",
  authDomain: "netflix-59621.firebaseapp.com",
  databaseURL: "https://netflix-59621-default-rtdb.firebaseio.com",
  projectId: "netflix-59621",
  storageBucket: "netflix-59621.appspot.com",
  messagingSenderId: "440910242603",
  appId: "1:440910242603:web:86991f19a30e4df4d6db6e",
  measurementId: "G-REZ28K8T4V"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app); // google 

const FormData = () => {
  const [formData, setFormData] = useState({ email: "", password: "", massage:"" });

  const getData = (event) => {
    const { name, value } = event.target;             // Object destruction
    setFormData({ ...formData, [name]: value });      // get value in Input
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();                           // stop refresh window
    console.log(formData);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((data) => {
        sendEmailVerification(auth.currentUser)
        .then((dataVerify) => {
          console.log(dataVerify);
          setFormData({ massage: "send Email Verification"})
        })
        const user = data.user;
        console.log(user.emailVerified)
      })
      .catch((error) => {
        const errorCode = error.code;
        setFormData({ massage: errorCode , email:"", password:"" })
      })
  };

  const SigInHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then((data) => {
        console.log(data)
        const user = data.user
        if(user.emailVerified === true){
          setFormData({ massage: "email Verify Successful", email:"", password:"" })
        }else{
          setFormData({ massage: "email verify Unsuccessful" })
        }
      })
      .catch((error) => {
        const errorMassage = error.massage;
        console.log(errorMassage)
      })
  };

  const googleLogInHandler = () => {
    // Google signIn Popup show and signIn automatically
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        console.log(result.user.displayName)
        this.setState({ massage: credential.signInMethod });
      })
      .catch((error) => {
        console.log(error.massage)
        this.setState({ massage: error.massage });
      });
  };

  let classMsg = ['text-center']
  if(formData.massage !== ""){
    classMsg.push('text-danger')
  }else{
    classMsg.push('text-success')
  }
  return (
    <div className='text-center'>
      <h1>Form Handling and Submitting Data form the Server.</h1>
      <p className={classMsg.join(' ')}>{formData.massage}</p>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor='email'>Email: </label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={getData}
          autoComplete="off"
        />
        <br />
        <br />
        <label htmlFor='pass'>Password: </label>
        <input
          type='password'
          name='password'
          value={formData.password}
          onChange={getData}
          autoComplete="off"
        />
        <br />
        <br />
        <button className="mx-4" type="submit">Register</button>
      </form>
        <button className="m-4" onClick={SigInHandler}>Sign</button>
        <button className="m-4" onClick={googleLogInHandler}>Google Sign</button>
    </div>
  );
};

class FormsPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      massage:"",
    }
  }
  render() {
    return (
      <div>
        <FormData
        />
      </div>
    );
  }
}
export default FormsPost;
