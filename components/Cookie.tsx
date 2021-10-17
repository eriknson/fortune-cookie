import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import FortuneMessage from './FortuneMessage';
import Crumbs from './Crumbs';
import { Fortunes, Fortune } from '../ts/types';

const CookieWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 2em;
  cursor: pointer;
  position: relative;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  touch-action: manipulation;
`;

const CookiePartLeft = styled.div`
  position: absolute;
  color: #efaa5d;
  background: currentColor;
  width: 8em;
  height: 18em;
  z-index: 2;
  border-radius: 7em 1em 1em 7em / 50%;
  box-shadow: 0.5em 0 0 inset, 0.5em 0.2em 0 inset, 1em 0.2em 0 #fff6 inset,
    -0.75em 0 0 #0002 inset;
  clip-path: polygon(0% 0%, 68% 0%, 100% 30%, 100% 100%, 0% 100%);
  -webkit-clip-path: polygon(0% 0%, 68% 0%, 100% 30%, 100% 100%, 0% 100%);
  left: calc(50% - 5.4em);
  transform: rotate(25deg);
  transform-origin: 68% 0;
`;

const CookiePartRight = styled.div`
  position: absolute;
  color: #efaa5d;
  background: currentColor;
  width: 8em;
  height: 18em;
  z-index: 2;
  border-radius: 1em 7em 7em 1em / 50%;
  box-shadow: -0.5em 0 0 inset, -0.5em 0.2em 0 inset, -1em 0.2em 0 #fff6 inset,
    0.75em 0 0 #0002 inset;
  clip-path: polygon(0% 30%, 32% 0%, 100% 0, 100% 100%, 0% 100%);
  -webkit-clip-path: polygon(0% 30%, 32% 0%, 100% 0, 100% 100%, 0% 100%);
  right: calc(50% - 5.4em);
  transform: rotate(-25deg);
  transform-origin: 32% 0;
`;

const Cookie: FC<Fortunes> = ({ fortunes }): JSX.Element => {
  const [visibleFortune, setVisibleFortune] = useState<Fortune>(fortunes[0]);
  const [isCookieClosed, setIsCookieClosed] = useState(true);
  const [count, setCount] = useState(0);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isCookieClosed) {
      setVisibleFortune(fortunes[count]);
    }
    setIsCookieClosed(!isCookieClosed);
    setCount(fortunes[count + 1] ? count + 1 : 0);
  };

  return (
    <CookieWrapper
      className={isCookieClosed ? 'fc spawned' : 'fc opened'}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
    >
      <CookiePartLeft className="left" />
      <CookiePartRight className="right" />
      <Crumbs show={!isCookieClosed} />
      {!isCookieClosed && visibleFortune ? (
        <FortuneMessage key={visibleFortune.id} fortune={visibleFortune} />
      ) : null}
    </CookieWrapper>
  );
};

export default Cookie;
