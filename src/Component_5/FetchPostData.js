import React from "react";
import axios from "axios";
import "../App.css";
// Default Global Configuration for Axios; (not use full links)
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";
axios.defaults.headers.common["Authorization"] = ["AUTH_TOKEN"];

// Post Data to the API with React JS
const FetchPostData = () => {
  const submitHandler = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    const author = event.target.author.value;
    const data = { title, body, author }; // use Object reference in data
    axios.post("posts", data)
      .then((response) => {
        console.log(response);
        event.target.reset();
      }).catch((error) => {
        console.log(error)
      });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Tittle: </label>
        <input className='m-2' type='text' name='title' />
        <br />
        <label>Body: </label>
        <input className='m-2' type='text' name='body' />
        <br />
        <label>Author: </label>
        <input className='m-2' type='text' name='author' />
        <br />
        <button type='submit' className='btn btn-success'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default FetchPostData;
