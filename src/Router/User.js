import React from 'react'
import { useParams } from 'react-router-dom'
export default function User() {
  //- How useParams:- returns an object of key/value with <Route path>. 
  //? Note: ":name" used to same name object Destructing
  //  <Route path='/user/:name' element={<User/>} />
  //  <Link path='/user/anil'> Anil </Link>
  //  <Link path='/user/peter'> Peter </Link>
  
  const {name} = useParams();

  return (
    <div>
      <h1>This is User Page for {name} .</h1> 
    </div>
  )
}
