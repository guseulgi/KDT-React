import {useState} from 'react'

export default function StateAndVariable() {
  // State
  let [state, setState] = useState(0);
  
  // 변수
  let variable = 0;
  function setVariable() {
    variable += 1;
    console.log(`state : ${state} / variable : ${variable}`);
  }

  return (
    <div>
      <h1>{state} / {variable}</h1>
      <button onClick={() => {
        setState(state += 1);
        setVariable();
      }}>+ 1</button>
    </div>
  )
}
