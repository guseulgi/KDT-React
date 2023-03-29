import { useRef } from 'react';

export default function ChangeFocus() {
  const input1 = useRef();
  const input2 = useRef();

  const changeFocus1 = () => {
    input1.current.focus();
  };

  const changeFocus2 = () => {
    input2.current.focus();
  };

  return (
    <div>
      <input type="text" ref={input1} />
      <input type="text" ref={input2} />
      <br />
      <br />
      <button onClick={changeFocus1}>1번 인풋으로</button>
      <button onClick={changeFocus2}>2번 인풋으로</button>
    </div>
  );
}
