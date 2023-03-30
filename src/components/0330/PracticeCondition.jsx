import React, { useState } from 'react';
import PracticeOne from './PracticeOne';
import PracticeTwo from './PracticeTwo';

export default function PracticeCondition() {
  const [change, setChange] = useState(false);
  const [content, setContent] = useState('');
  const toggle = () => {
    setChange(!change);
  };
  const haveContent = (text) => {
    setContent(text);
  };
  return (
    <div>
      <h4>{content}</h4>
      {change ? (
        <PracticeOne haveContent={haveContent} />
      ) : (
        <PracticeTwo haveContent={haveContent} />
      )}
      <button onClick={toggle}>{content}</button>
    </div>
  );
}
