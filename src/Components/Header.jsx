import styled from '@emotion/styled';
import * as React from 'react';

const Title = styled.h1`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  background: #5858fa;
  color: white;
  font-size: 24px;
  position: sticky;
  top: 0px;
`;

export function Header() {
  return <Title>TREND-TANGO</Title>;
}
