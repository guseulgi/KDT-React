import React from 'react'

export default function ListChildExam({name, price}) {
  return (
    <div>
      <h2>품목명 : {name}</h2>
      <p>가격 : {price}원</p>
    </div>
  )
}
