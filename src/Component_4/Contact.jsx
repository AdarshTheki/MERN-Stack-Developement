import React, { Children, Component } from "react";
import { useParams, Routes, Route, Link } from "react-router-dom";

const Contact = () => {
  let {post, url}  = useParams();
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Learn more about me and my work.</p>
      <ul>
        <Link to={`${post}`}>Blog</Link>
        <Link to={`${post}/1`}>page-1</Link>
        <Link to={`${post}/2`}>page-2</Link>
        <Link to={`${post}/3`}>page-3</Link>
      </ul>
      <Routes>
        <Route
          exact
          path={`${post}`}
          element={
            <>
              <h3>Hello</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                rerum illum, fugit itaque nam qui dolorem aliquam? Laudantium et
                error minus sapiente! Est nostrum explicabo quisquam
                reprehenderit soluta totam. Adipisci!
              </p>
            </>
          }
        />
        <Route
          exact
          path={`${post}/1`}
          element={
            <>
              <h3>Hello</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
                rerum illum, fugit itaque nam qui dolorem aliquam? Laudantium et
                error minus sapiente! Est nostrum explicabo quisquam
                reprehenderit soluta totam. Adipisci!
              </p>
            </>
          }
        />
      </Routes>
    </div>
  );
};
export default Contact;
