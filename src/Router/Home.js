import React from 'react'
import { Link, useLocation } from 'react-router-dom';

function Home() {
  const location = useLocation();
  console.log(location);
  return<>
    <h1>This is Home Page.</h1>
    <h3>This is useLocation</h3>
    <Link to='/about' tittle="About page">Got to About Page</Link>
  </>
}
export default Home;