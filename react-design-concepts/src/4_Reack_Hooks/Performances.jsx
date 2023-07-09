import React, { useEffect, useState } from "react";

const Performances = () => {
  const [isOnline, setOnline] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setOnline(true);
    }, 3000);
  }, []);
  return isOnline ? <h2>I am Online</h2> : <h2>Not Online...</h2>;
};

export default Performances;
