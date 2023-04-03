import React from 'react';
import lionImg from '../../images/lion.png';

export default function ImageComponents() {
  return (
    <>
      <h1>퍼블릭 폴더</h1>
      <img src="/images/chunsik.jpeg" alt="퍼블릭" />
      <h1>src 폴더</h1>
      <img src={lionImg} alt="src" />
    </>
  );
}
