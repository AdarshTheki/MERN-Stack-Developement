import React from 'react'

export default function Checkout(props) {
  return (
    <div style={{textAlign:"center",fontSize:"20px",fontWeight:"800"}}>
      <p>Price: {props.price}</p>
      <p>Counter: {props.counter}</p>
    </div>
  )
}
