import React from 'react'
import ListChildExam from './ListChildExam'

export default function ListExam() {
  const products = [
    {
      name:"PS5",
      price:"685,000"
    },
    {
      name:"에어 프라이어",
      price:"50,000"
    },
    {
      name:"사세 치킨윙",
      price:"11,500"
    }
  ]
  return (
    <div>
      {products.map((e, idx) =><ListChildExam name={e.name} price={e.price} key={idx}/>)}

      {products.map((e, idx) => {

        return (
          <div key={idx}>
          <h2>품목명 : {e.name}</h2>
          <p>가격 : {e.price}원</p>
        </div>
        );
      })}
    </div>
  )
}
