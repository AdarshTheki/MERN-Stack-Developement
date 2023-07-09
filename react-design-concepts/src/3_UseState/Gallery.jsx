import React, { Component, useState } from "react";
import { sculptureList } from "./data";

// This is Function base Components
const FunctionBaseGallery = () => {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index === sculptureList.length - 1) {
      setIndex(index - (sculptureList.length - 1));
    } else {
      setIndex(index + 1);
    }
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i> by {sculpture.artist}
      </h2>
      <h3>
        page:({index + 1} of {sculptureList.length})
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} width='200' />
      <p>{sculpture.description}</p>
    </>
  );
};

// This is Class base Components
class ClassBaseGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  clickHandle = () => {
    if(this.state.count === sculptureList.length-1){
      this.setState({ count: this.state.count - (sculptureList.length - 1) });
    }else{
      this.setState({ count: this.state.count + 1 });
    }
  };
  render() {
    let data = sculptureList[this.state.count];
    return (
      <>
        <button onClick={this.clickHandle}>Next</button>
        <h2>{data.name}</h2>
      </>
    );
  }
}

// Export the Gallery
const Gallery = () => {
  return (
    <>
      <h2>Function Base:</h2>
      <FunctionBaseGallery />
      <hr />
      <h2>Class Base:</h2>
      <ClassBaseGallery />
    </>
  );
};
export default Gallery;
