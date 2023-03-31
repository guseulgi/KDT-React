import React from 'react';

export default function ProfileComponent({ name, age, nickName }) {
  return (
    <ul>
      <li>{name}</li>
      <li>{age}</li>
      <li>{nickName}</li>
    </ul>
  );
}
