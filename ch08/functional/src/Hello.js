import React from 'react';

/* function Hello(props) {
  return (
    <div>Hello {props.name}</div>
  )
} */

const Hello = ({ name, number }) => (
  <div>
    <p>Hello {name}</p>
    <p>Number: {number}</p>
  </div>
)

export default Hello;