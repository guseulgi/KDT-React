import { useRef, useState } from 'react';

export default function Comparing() {
  const [countState, setState] = useState(0);
  const [render, setRender] = useState(true);
  const countRef = useRef(0);
  let countVar = 0;

  const countUpState = () => {
    setState(countState + 1);
  };

  const countUpRef = () => {
    countRef.current = countRef.current + 1;
  };

  const countUpVar = () => {
    countVar += 1;
  };

  const reRender = () => {
    setRender(!render);
  };

  return (
    <div>
      <h1>State : {countState}</h1>
      <h1>Ref : {countRef.current}</h1>
      <h1>Variable : {countVar}</h1>
      <br />
      <button onClick={countUpState}>State Up</button>
      <button onClick={countUpRef}>Ref Up</button>
      <button onClick={countUpVar}>Variable Up</button>
      <button onClick={reRender}>리-렌더링</button>
    </div>
  );
}
