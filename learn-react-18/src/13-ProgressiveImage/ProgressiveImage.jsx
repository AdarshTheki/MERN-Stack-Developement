import React, { useEffect, useState } from "react";
import HD_image from "./large.png";
import Tiny_image from "./min.jpg";
// This is a Progressive image of react 

const App = () => {
  return (
    <>
      <h2>Progressive Image</h2>
      <ProgressiveImage
        largeImage={HD_image}
        smallImage={Tiny_image}
        width={"450"}
      />
    </>
  );
};
export default App;



const ProgressiveImage = (props) => {
  const { width, smallImage, largeImage } = props;
  const [imgSrc, setSrc] = useState(smallImage || largeImage);

  useEffect(() => {
    const img = new Image();
    img.src = largeImage;
    img.onload = () => {
      setSrc(largeImage);
    };
  }, [largeImage]);

  return (
    <div>
      <img src={imgSrc} width={width} />
    </div>
  );
};
