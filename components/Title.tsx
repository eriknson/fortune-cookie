import styled from 'styled-components';
import React, { FC } from 'react';

const Wrapper = styled.div`
  height: 33%;
  padding-top: 2em;
  width: 100%;
  text-align: center;
`;

const Headline = styled.h1`
  font-size: 48px;
`;

const Subtitle = styled.h2`
  font-size: 25px;
`;

const Title: FC = (): JSX.Element => (
  <Wrapper>
    <Headline>High fortune</Headline>
    <Subtitle>with Dree Low</Subtitle>
  </Wrapper>
);

export default Title;
