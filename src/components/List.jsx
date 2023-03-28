import React from 'react'
import ListChild from './ListChild'
import Modal from './Modal'

export default function List() {
  const todo = [
    {
      title:"리액트 공부하기",
      content:"state 사용법 익히기",
    },
    {
      title :"코테 문제 풀기",
      content:"Lv0 정복 가자",
    }
  ]

  return (
    <div>
      <Modal/>
      <h1>오늘 해야할 일</h1>
      <hr/>
      {todo.map((e, idx) => <ListChild title={e.title} content={e.content} key={idx}/>)}
      {todo.map((e, idx) => {
        return (
          <div key={idx}>
            <h2>{e.title}</h2>
            <p>{e.content}</p>
            <hr/>
          </div>
        );
      })}
      <Modal/>
    </div>
  )
}
