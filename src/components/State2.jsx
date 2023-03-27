import React from 'react'
import { useState } from 'react';

export default function State2() {
  let [strState, setStrState] = useState('init');
  function changeState() {
    strState += '-';
    console.log(strState);
  }

  function customSetStrState() {
    strState +='+';
    setStrState(strState);
  }

  return (
    <div>
      <button onClick={() => setStrState(strState +'+')}>리렌더링 반복!</button>
      <button onClick={customSetStrState}>함수 호출로 반복</button>
      <button onClick={() => changeState()}>State 강제 변경</button>
      <br />
      <span>{strState}</span>
    </div>
  )
}