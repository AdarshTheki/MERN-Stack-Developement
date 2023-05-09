import React from 'react'
import About from './About'
import Navbar from './Navbar'
import TextForms from './TextForms'

const Container = () => {
  return (
    <div style={{maxWidth:'1024px', margin:'auto'}}>
      <About/>
       <br /><hr /><br />
      <TextForms/>
       <br /><hr /><br />
      <Navbar/>
       <br /><hr /><br />
    </div>
  )
}
export default Container;
