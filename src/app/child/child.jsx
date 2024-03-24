import React from 'react'

export default function Child(props) {
  return (
    <div>
      <p>{props.change}</p>
      <button onClick={props.onchange}>{props.items}</button>
    </div>
  )
}
