import React, { useEffect, useRef, useState } from 'react';

export default function TestUseEffect() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('Hello');
  const inputValue = useRef();

  const onButtonClick = () => {
    console.log('🖱️ 버튼 누름');
    setCount((cur) => cur + 1);
  };

  const onInput = (e) => {
    console.log('💻 키보드 누름');
    setText(e.target.value);
  };

  useEffect(() => {
    console.log('👽 최초 실행 시에만 실행되는 useEffect');
  }, []);

  useEffect(() => {
    console.log('useEffect 🤨');
  });

  useEffect(() => {
    console.log('🖱️ 누를 때 실행되는 useEffect');
  }, [count]);

  useEffect(() => {
    console.log('💻 누를 때 실행되는 useEffect');
  }, [text]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onButtonClick}>클릭</button> <br />
      <h1>{text}</h1>
      <input type="text" onChange={onInput} ref={inputValue} />
    </div>
  );
}
