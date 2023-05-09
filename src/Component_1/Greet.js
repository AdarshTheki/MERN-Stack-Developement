import React from 'react'

export default function Greet(props) {
  return (
    <div>
      <div className="container card p-3 mt-3 register-container text-center">
        <h3>Name: {props.name} </h3>
        <h3>Verification Send to Email: {props.email} </h3>
        <h3>Thank you for Joining us. 👇👇</h3>
      </div>
    </div>
  )
}
