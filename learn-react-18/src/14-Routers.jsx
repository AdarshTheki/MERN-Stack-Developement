import React, { useEffect, useState } from "react";
import { useRoutes, useNavigate, useParams, useLocation, Routes, Route, Link, BrowserRouter} from "react-router-dom";

export default function Main (){
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:id' element={<User />} />
          <Route path='/*' element={<Error />} />
          <Route />
        </Routes>
        {/* <RouteData /> */}
      </BrowserRouter>
    </div>
  );
};

const NavBar = () => {
  return (
    <>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/user/:id'>User</Link></li>
      </ul>
    </>
  );
};

const User = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location.pathname); // return object: hash, key, pathname & search
  }, [location]);

  const params = useParams();
  // console.log(params)            // return Id with user URL

  let navigate = useNavigate();     // Navigate to different places
  const handleBack = () => {
    navigate(-1);
  };
  const handleNavigate = () => {
    navigate("/user/Ayush");
  };

  return (
    <div>
      <h2>This is a User Page.</h2>
      <h3>User location is key: {location.key}, pathname: {location.pathname}</h3>
      <h3>User params: {params.id}</h3>
      <button onClick={handleBack}>Navigate Back</button>
      <button onClick={handleNavigate}>Navigate to Next</button>
    </div>
  );
};

// Easy way to Router use
const RouteData = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/user/:id", element: <User /> },
  ]);
  return element;
};

// Components
const Home = () => {
  return (
    <div>
      <h2>This is a Home Page.</h2>
    </div>
  );
};
const About = () => {
  return (
    <div>
      <h2>This is a About Page.</h2>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h2>This is a Contact Page.</h2>
    </div>
  );
};
const Error = () => {
  return (
    <div>
      <h2>This is Not Found Page 404 error.</h2>
    </div>
  );
};
