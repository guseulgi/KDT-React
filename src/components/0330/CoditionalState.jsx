import React, { useState } from 'react';
import ConditionalRender from './ConditionalRender';

export default function CoditionalState() {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggle}>{isVisible ? 'Off' : 'On'}</button>
      {isVisible && <ConditionalRender />}
    </div>
  );
}
