import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  position: absolute;
  top: 5%;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 48px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
`;

const TitleComponent = (): JSX.Element => (
  <Wrapper>
    <Title>High fortune</Title>
    <Subtitle>with Dree Low</Subtitle>
  </Wrapper>
);

export default TitleComponent;
