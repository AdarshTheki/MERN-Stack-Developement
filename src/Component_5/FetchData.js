import axios from "axios";
import HomePost from "./HomePost.js";
import React, { Component } from "react";
import "../App.css";

function PostPreview(props) {
  return (
    <>
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      <hr />
    </>
  );
}

class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // posts:"",
      posts: null,
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        // console.log(response.data);
        this.setState({ posts: response.data }, () => console.log(this.state));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    let posts = null;
    if (this.state.posts != null) {
      const tenPost = this.state.posts.splice(0, 10);
      posts = tenPost.map((post) => {
        return <PostPreview key={post.id} title={post.title} body={post.body} />;
      });
    }
    return (
      <div>
        <h1>Render</h1>
        <HomePost>{posts}</HomePost>
      </div>
    );
  }
}
export default FetchData;
