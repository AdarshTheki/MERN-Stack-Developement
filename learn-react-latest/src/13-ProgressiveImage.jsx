import React, { useEffect, useState } from "react";

const TINY_IMAGE =
  "https://cdn.pixabay.com/photo/2017/09/08/17/05/elephant-2729413_150.jpg";
const LARGE_IMAGE =
  "https://pixabay.com/get/g80a97718a2663a501915c290d3297b366ef52ddc2d82db458819aec0abf0f19ffd8d9514bcca865e14de0da33aa1ce22bee2543d59e0323c134e83a49014593c_1280.jpg";

const App = () => {
  return (
    <div>
      <ProgressiveImage
        largeImage={LARGE_IMAGE}
        smallImage={TINY_IMAGE}
        width={500}
      />
    </div>
  );
};
export default App;

const ProgressiveImage = (props) => {
  const { width, smallImage, largeImage } = props;
  const [imgSrc, setSrc] = useState(smallImage || largeImage);

  // create Custom ClassName and response when image change smooth with blur effect
  const customClass =
    smallImage && largeImage === smallImage ? "loading" : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = largeImage;
    img.onload = () => {
      setSrc(largeImage);
    };
  }, [largeImage]);

  return (
    <div>
      <img src={imgSrc} width={width} className={customClass} />
    </div>
  );
};
