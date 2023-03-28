import React from 'react'

export default function ListChild({title, content, idx}) {
  return (
    <div key={idx}>
      <h2>{title}</h2>
      <p>{content}</p>
      <hr/>
    </div>
  )
}
