import React, { useState } from 'react';
import styled from 'styled-components';
import Fortune from './Fortune';
import Crumbs from './Crumbs';

const CookieWrapper = styled.div`
  height: 12em;
  cursor: pointer;
  display: block;
  position: relative;
  margin-inline: 5%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
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

type Fortune = {
  id: string;
  lyric: string;
  artist: string;
  song: string;
};

type Props = { fortunes: Array<Fortune> };

const Cookie: React.FC<Props> = ({ fortunes }) => {
  const [closedCookie, openCookie] = useState(false);
  const [fortuneInsideCookie, setFortune] = useState<Fortune>(fortunes[0]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!closedCookie) {
      setFortune(fortunes[Math.floor(Math.random() * fortunes.length)]);
    }
    openCookie(!closedCookie);
  };

  return (
    <CookieWrapper
      className={closedCookie ? 'fc spawned' : 'fc opened'}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
    >
      <CookiePartLeft className="left" />
      <CookiePartRight className="right" />
      <Crumbs />
      {!closedCookie ? (
        <Fortune
          lyric={fortuneInsideCookie.lyric}
          artist={fortuneInsideCookie.artist}
          song={fortuneInsideCookie.song}
        />
      ) : null}
    </CookieWrapper>
  );
};

export default Cookie;
