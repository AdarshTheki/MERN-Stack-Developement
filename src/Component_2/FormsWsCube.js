import React, { Component } from "react";
import Style from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { getDatabase, ref, set } from "firebase/database";
import { initializeApp } from "firebase/app";

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
// firebase:-  Basic write operations
const writeUserData = (id, name, email, question) => {
  const database = getDatabase(app);
  set(ref(database, 'users/' + id), {
    name, email, question
  });
}

const StyleDiv = Style.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 500px; 
  margin: auto;
  border-radius: 5px;
  background: white; 
  & > * {
    width: 100%;
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 20px;
  }
`;

function Detail(props) {
  return (
    <>
      <form onSubmit={props.submit} className='text-left'>
        <div className='form-group mb-2'>
          <label htmlFor=''>
            <b>1. </b> Name:
          </label>
          <input
            type='text'
            name='name'
            className='form-control'
            placeholder='Enter your Name'
            autoComplete='off'
            required
          />
        </div>
        <div className='form-group mb-2'>
          <label htmlFor=''>
            <b>2. </b> Email address:
          </label>
          <input
            type='text'
            name='email'
            className='form-control'
            placeholder='Enter your Email'
            autoComplete='off'
            required
          />
        </div>
        <button type='submit' className='btn btn-primary my-4 px-4'>
          Next
        </button>
      </form>
      <center>
        <span className='badge text-primary badge-pill badge-primary'>1</span>
        <span className='badge text-primary badge-pill disabled'>2</span>
      </center>
    </>
  );
}

function Question(props) {
  return (
    <div>
      <form onSubmit={props.question} method='POST'>
        <div className='mt-3'>
          <div className='card'>
            <div className='card-body'>
              <div className='form-group'>
                <label htmlFor=''>
                  <b>3. </b>What are you currently doing?
                </label>{" "}
                <br />
                <input
                  type='radio'
                  id='teacher'
                  name='q3'
                  value='Teaching'
                  autoComplete='off'
                />{" "}
                <label htmlFor='teacher'>Teaching</label>{" "}
                <input
                  type='radio'
                  id='student'
                  name='q3'
                  autoComplete='off'
                  value='Student'
                />{" "}
                <label htmlFor='student'>Student</label>{" "}
                <input
                  type='radio'
                  id='programmer'
                  name='q3'
                  autoComplete='off'
                  value='Programmer'
                />{" "}
                <label htmlFor='programmer'>Programmer</label>{" "}
                <input type='radio' id='other' name='q3' autoComplete='off' />{" "}
                <label htmlFor='other'>Other</label>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className='mt-3'>
          <div className='card'>
            <div className='card-body'>
              <div className='form-group'>
                <label htmlFor=''>
                  <b>4. </b>Please rate our course?
                </label>{" "}
                <br />
                <input
                  type='radio'
                  id='poor'
                  value='poor'
                  name='q4'
                  autoComplete='off'
                />{" "}
                <label htmlFor='poor'>Poor</label>{" "}
                <input
                  type='radio'
                  id='Good'
                  value='good'
                  name='q4'
                  autoComplete='off'
                />{" "}
                <label htmlFor='Good'>Good</label>{" "}
                <input
                  type='radio'
                  id='excellent'
                  value='excellent'
                  name='q4'
                  autoComplete='off'
                />{" "}
                <label htmlFor='excellent'>Excellent</label>{" "}
              </div>
            </div>
          </div>
        </div>
        <button type='submit' className='btn btn-primary my-4 px-4'>
          Save
        </button>
      </form>
    </div>
  );
}

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: uuidv4(),
      name: null,
      email: null,
      question: {
        q3: null,
        q4: null,
      },
      isSubmitted: false,
    };
  }
  detailSubmitHandler = (event) => {
    const name = event.target.name.value;
    const email = event.target.email.value;
    this.setState({ name, email });
    event.preventDefault();
  };
  questionSubmitHandler = (event) => {
    event.preventDefault();
    const question = {};
    question.q3 = event.target.q3.value;
    question.q4 = event.target.q4.value;
    this.setState({ question, isSubmitted:true }, () => {
      // Initialize Realtime Database and get a reference to the service
      writeUserData(this.state.id, this.state.name, this.state.email, this.state.question);
      alert("👉Data has been Submitted their firebase✅");
    });
  }
  
  render() {
    return (
      <StyleDiv>
        <div className='container'>
          <h1 className='text-center text-primary font-weight-bold'>
            SUBMIT FORMS
          </h1>
        </div>
        {this.state.isSubmitted ? (
          <div className='card'>
            <h1>Thank You</h1>
          </div>
        ) : this.state.name === null && this.state.email === null ? (
          <Detail submit={this.detailSubmitHandler} />
        ) : (
          <Question question={this.questionSubmitHandler} />
        )}
      </StyleDiv>
    );
  }
}

// This is main component of Survey Project.
class Survey extends Component {
  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}
export default Survey;
