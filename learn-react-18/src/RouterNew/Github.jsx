import React from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData();
  console.log(data);
  return <div>Hello </div>;
};

export default Github;

const githubLoader = async () => {
  const res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata"
  );
  const data = await res.json();
  return data;
};
export { githubLoader };
