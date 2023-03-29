import React from 'react'

export default function MultiProps(props) {
  return (
    <div>
      <h1>{props.userId} 님 반갑습니다.</h1>
      <a href={props.href}>{props.text}</a>
    </div>
  )
}
