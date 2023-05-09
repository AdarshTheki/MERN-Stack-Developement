import React from 'react';
import PropTypes from 'prop-types';

// > Props and PropTypes(How use):-
// Export the Navbar function in 'props' pass.
export default function Navbar(props){
  return(
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="/">Feature</a>
            <a className="nav-item nav-link" href="/">{props.aboutText}</a>
            <a className="nav-item nav-link disabled" href="/">Display</a>
          </div>
        </div>
        <form className='d-flex'>
          <input className='form-control me-2' type='search' placeholder='search...' aria-label='Search'/>
          <button className='btn btn-outline-success' type='submit'>Search</button>
        </form>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  display: PropTypes.string
}
// *Default Value:-
Navbar.default = {
  title: 'Set-title here',
  aboutText: 'About-title',
  display: 'Disable Here.'
};