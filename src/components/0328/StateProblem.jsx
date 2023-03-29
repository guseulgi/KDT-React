import React, {useState} from 'react'

export default function StateProblem() {
  // let [state, setState]  = useState([0]);
  let [state, setState]  = useState({ teacher : '이효석' });
  console.log('initial state : ',state);

  return (
    <div>
      {state.teacher}
      <br/>
      <button
        onClick={() => {
          // state[0] = 1;
          // const copyArr = [...state];
          // setState(copyArr);
          
          state.teacher = 'tetz';
          const newState = { ...state };
          setState(newState);

          console.log('after state : ',state)
        }}
      >
        1로 만들기
      </button>
    </div>
  )
}
