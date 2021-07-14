import React, { useState } from 'react';
import styled from 'styled-components';
import Fortune from './Fortune';

const CookieWrapper = styled.div`
  height: 12em;
`;

const CookiePartLeft = styled.div``;

const CookiePartRight = styled.div``;

const CookieCrumbContainer = styled.div``;

const CookieCrumb = styled.div``;

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
    <CookieWrapper>
      <button
        className={closedCookie ? 'fc spawned' : 'fc opened'}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
        type="button"
      >
        <div className="fc-part left" />
        <div className="fc-part right" />
        <div className="fc-crumbs">
          <div className="fc-crumb" />
          <div className="fc-crumb" />
          <div className="fc-crumb" />
          <div className="fc-crumb" />
          <div className="fc-crumb" />
          <div className="fc-crumb" />
          <div className="fc-crumb" />
          <div className="fc-crumb" />
        </div>
        {!closedCookie ? (
          <Fortune
            lyric={fortuneInsideCookie.lyric}
            artist={fortuneInsideCookie.artist}
            song={fortuneInsideCookie.song}
          />
        ) : null}
      </button>
    </CookieWrapper>
  );
};

export default Cookie;
