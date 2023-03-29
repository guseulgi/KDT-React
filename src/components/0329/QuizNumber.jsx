import { useRef, useState } from 'react';

export default function QuizNumber() {
  const [state, setState] = useState(true);
  const correctInput = useRef();

  const operation1 = parseInt(Math.random() * 10);
  const operation2 = parseInt(Math.random() * 10);
  let operatorArr = ['+', '-', 'x'];
  let operator = parseInt(Math.random() * operatorArr.length);
  let result = 0;

  operator = operatorArr[operator];
  switch (operator) {
    case '+':
      result = operation1 + operation2;
      break;
    case '-':
      result = operation1 - operation2;
      break;
    case 'x':
      result = operation1 * operation2;
      break;
    default:
      break;
  }

  const submitButton = () => {
    if (parseInt(correctInput.current.value) === result) {
      alert('정답입니다!');
      setState(!state);
    } else {
      alert('오답입니다!');
      correctInput.current.focus();
    }
    correctInput.current.value = '';
  };

  return (
    <div>
      <h2>
        {operation1} {operator} {operation2}
      </h2>
      <br />
      <input ref={correctInput} type="text" />
      <button onClick={submitButton}>정답 제출</button>
    </div>
  );
}
