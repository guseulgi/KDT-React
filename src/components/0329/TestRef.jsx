import { useState, useRef } from 'react';

export default function TestRef() {
  const inputField = useRef();
  const [text, setText] = useState('');

  // 이벤트 객체 활용
  const onChangeText = (e) => {
    setText(e.target.value);
  };

  // useRef 활용
  const onChangeText2 = () => {
    console.log(inputField);
    setText(inputField.current.value);
  };

  return (
    <div>
      <h2>{text}</h2>
      <input
        name="h2"
        value={text}
        placeholder="입력"
        ref={inputField}
        onChange={onChangeText2}
      />
    </div>
  );
}
