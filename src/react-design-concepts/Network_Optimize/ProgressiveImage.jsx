import React, { useEffect, useState } from "react";
import "./ProgressiveImage.css";

const ProgressiveImage = () => {

  const placeholderImg =
    "https://cdn.pixabay.com/photo/2017/09/08/17/05/elephant-2729413_150.jpg";

  const maxSrc =
    "https://pixabay.com/get/g80a97718a2663a501915c290d3297b366ef52ddc2d82db458819aec0abf0f19ffd8d9514bcca865e14de0da33aa1ce22bee2543d59e0323c134e83a49014593c_1280.jpg";

  const [imgSrc, setImgSrc] = useState(placeholderImg || maxSrc);

  const customClass =
    placeholderImg && maxSrc === placeholderImg ? "loading" : "loaded";

  useEffect(() => {
    const responseImage = new Image();
    responseImage.src = maxSrc;
    responseImage.onload = () => {
      setImgSrc(maxSrc);
    };
  }, [maxSrc]);

  return (
    <img
      className={customClass}
      width={800}
      height={400}
      src={imgSrc}
    />
  );
};

export default ProgressiveImage;

// Add Custom CSS file

// .loading {
//   filter: blur(10px);

// .loaded {
//   filter: blur(0px);
//   transition: filter 0.5s linear;
// }
