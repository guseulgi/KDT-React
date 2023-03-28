import React from 'react'

export default function CustomList({arr}) {
  return (
    <ul>
      {arr?.map((e, idx) => <li key={idx}>{e}</li>)}
    </ul>
  )
}
