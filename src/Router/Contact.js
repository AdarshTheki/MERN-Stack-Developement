import React from 'react'
import { useSearchParams } from 'react-router-dom';

function Contact() {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get('age'));
  // console.log(searchParams.get('city'));
  const age = searchParams.get('age');
  const city = searchParams.get('city');

  return<>
    <h1>This is Contact Page.</h1>
    <p>This is age is: {age}</p>
    <p>This is city is: {city}</p>
    <input 
      type="text"
      placeholder='change city...' 
      onChange={(e) => setSearchParams({
        text:e.target.value, age:10   
      })
    }/>
    <br />
    <br />
    <button onClick={() => setSearchParams({age:40, city:'nagpur'})}>Set age is 40</button>
  </>
}
export default Contact;