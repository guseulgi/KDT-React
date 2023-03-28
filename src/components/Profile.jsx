import React, { useState } from 'react'

export default function Profile(props) {
  const objArr = props.objArr;
  const [count, setCount] = useState(0);
  const obj = objArr[count];

  const changeProfile = () => {
    if(objArr.length - 1 === count) setCount((cur) => cur = 0);
    else setCount(count + 1);
  }
  
  return (
    <ul>
      <li>이름 : {obj?.name}</li>
      <li>나이 : {obj?.age}</li>
      <li>별명 : {obj?.nickname}</li>
      <button onClick={changeProfile}>프로필 변경하기</button>
    </ul>
  )
}
