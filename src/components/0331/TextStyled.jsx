import React from 'react';
import styled from 'styled-components';

export default function TextStyled() {
  const MyDiv = styled.div`
    background-color: orange;
  `;
  const MyHeading = styled.h1`
    color: dodgeblue;
  `;
  const MySpan = styled.span`
    background-color: yellow;
    font-weight: 700;
  `;
  return (
    <MyDiv>
      <MyHeading>h1</MyHeading>
      <MySpan>span</MySpan>
    </MyDiv>
  );
}
