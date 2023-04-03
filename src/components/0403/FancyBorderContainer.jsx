import React from 'react';
import FancyBorder from './FancyBorder';
import ImageComponents from './ImageComponents';

export default function FancyBorderContainer() {
  return (
    <div>
      <FancyBorder color="red">
        <h1>props.children</h1>
        <p>구구까까</p>
        <ImageComponents />
      </FancyBorder>
    </div>
  );
}
