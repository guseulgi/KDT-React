import React from 'react'

export default function CustomObj(props) {
  if(!props.obj) return (<div>데이터가 없습니다.</div>)
  
  const {name, age, nickname} = props.obj;
  return (
    <div>
      <h2>이름 : {name}</h2>
      <p>나이 : {age}</p>
      <h3>별명 : {nickname}</h3>
    </div>
  )
}
