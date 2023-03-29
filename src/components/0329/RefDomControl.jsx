import { useRef } from 'react';

export default function RefDomControl() {
  const orangeEl = useRef();
  const skyblueEl = useRef();
  const inputEl = useRef();

  const adjustCSS = () => {
    orangeEl.current.style.backgroundColor = 'orange';
    skyblueEl.current.style.backgroundColor = 'skyblue';
  };

  const clearCSS = () => {
    orangeEl.current.style.backgroundColor = '';
    skyblueEl.current.style.backgroundColor = '';
  };

  const clearInput = () => {
    inputEl.current.value = '';
  };

  return (
    <div>
      <h1 ref={orangeEl}>Orange</h1>
      <h1 ref={skyblueEl}>Skyblue</h1>
      <input type="text" ref={inputEl} />
      <br />
      <button onClick={adjustCSS}>Adjust CSS</button>
      <button onClick={clearCSS}>Clear CSS</button>
      <button onClick={clearInput}>Clear Input</button>
    </div>
  );
}
