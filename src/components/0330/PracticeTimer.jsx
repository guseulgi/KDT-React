import React, { useState } from 'react';
import PracticeTimerItem from './PracticeTimerItem';

export default function PracticeTimer() {
  const [isVisible, setIsVisible] = useState(true);
  const toggle = () => {
    setIsVisible((cur) => !cur);
  };

  return (
    <div>
      {isVisible ? (
        <button onClick={toggle}>보이기</button>
      ) : (
        <>
          <PracticeTimerItem toggle={toggle} />
        </>
      )}
    </div>
  );
}
