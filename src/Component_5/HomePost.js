import React from 'react'

export default function HomePost(props) {
  return (
    <div style={{width: "400px", margin:"auto"}}>
      {props.children}
    </div>
  )
}
