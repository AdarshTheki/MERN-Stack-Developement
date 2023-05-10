import axios from "axios";
import React, { Component } from "react";
import "../App.css";

// Display the Fetch Data in the HomePage
function HomePost(props) {
  return (
    <div style={{width: "400px", margin:"auto"}}>
      {props.children}
    </div>
  )
}
function PostPreview(props) {
  return (
    <>  
      <h3>{props.title}</h3>
      <p>{props.body}</p>
      {/* used Delete Button */}
      <button onClick={props.delete} className="btn btn-danger">Delete</button>
      <hr />
    </>
  );
}

// Fetch Data using GET HTTP Request in React JS
class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
    };
  }
  componentDidMount() {
    // Post Data to the API with React JS
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({ posts: response.data }, () => console.log(this.state));
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // Delete Data Using Axios
  deleteHandler = (id) => {
    // alert(id);
    axios.delete("https://jsonplaceholder.typicode.com/posts/" + id)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  render() {
    let posts = null;
    if (this.state.posts != null) {
      const tenPost = this.state.posts.splice(0, 10);
      posts = tenPost.map((post) => {
        return <PostPreview 
            delete={() => this.deleteHandler(post.id)}
            key={post.id} 
            title={post.title} 
            body={post.body} />;
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
