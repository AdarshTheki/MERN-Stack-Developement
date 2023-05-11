import React from 'react'

export default function Button(props) {
  return (
      <button className='btn btn-danger' style={{width:'100px', margin:"5px"}}>
        {props.data}
      </button>
  )
}
