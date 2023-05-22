import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Netflix from './Components/Netflix';
import Project from './Pages/Project';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Service from './Pages/Service.js';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';

const App = () => {
  return (
    <>
    <Router>
        <Header/>
      <Routes>
        <Route exact path='/' Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/contact' Component={Contact}/>
        <Route path='/project' Component={Project}>
          <Route path='netflix' Component={Netflix}/>
        </Route>
        <Route path='/service' Component={Service}/>
        <Route path='/*' element={<><h1>404 Error</h1></>}/>
      </Routes>
    </Router>
      
    </>
  )
}
export default App
