import React, { useEffect, useRef, useState } from 'react';

export default function PracticeTimerItem({ toggle }) {
  const pickTime = useRef(0);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      pickTime.current++;
      console.log(pickTime.current, '타이머 작동 중');
    }, 1000);

    return () => {
      clearInterval(time);
    };
  }, []);

  const onPickTime = () => {
    setTimer(pickTime.current);
  };

  return (
    <div>
      <h1>{timer}</h1>
      <button onClick={onPickTime}>시간</button>
      <button onClick={toggle}>숨기기</button>
    </div>
  );
}
