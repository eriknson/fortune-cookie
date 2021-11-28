import styled from 'styled-components';
import React, { FC } from 'react';
import SubmitFortuneButton from './SubmitFortuneButton';

const Container = styled.div`
  background: #1d1d1f;
  padding-block: 8px;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  max-width: 1200px;

  @media (max-width: 1216px) {
    padding-inline: 8px;
  }
`;

const Logo = styled.span`
  position: relative;
  margin-bottom: -4px;
  display: flex;
  font-size: 40px;
  line-height: 100%;
`;

const Navbar: FC = () => (
  <>
    <Container>
      <Inner>
        <Logo>🥠</Logo>
        <SubmitFortuneButton />
      </Inner>
    </Container>
  </>
);

export default Navbar;
