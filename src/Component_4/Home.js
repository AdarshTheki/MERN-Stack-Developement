import React from "react";
import "../image.png";
import img1 from "../image.png";

function Home(props) {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>{props.title}</h2>
      <img src={props.pic} alt="image2" />
      <img src={img1}      alt="image3" />
    </div>
  );
}
export default Home;