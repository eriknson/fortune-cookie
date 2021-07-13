import React, { useState } from 'react';
import styled from 'styled-components';

const CookieContainer = styled.div``;

type Props = { fortunes: Array<string> };

const Cookie: React.FC<Props> = ({ fortunes }) => {
  const [closedCookie, openCookie] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-console
    console.log(e);
    openCookie(!closedCookie);
  };

  return (
    <CookieContainer>
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
        <div className="fc-fortune">
          <p className="fc-fortune-text">
            {/* eslint-disable-next-line no-bitwise */}
            {fortunes[~~(Math.random() * fortunes.length)]}{' '}
          </p>
        </div>
      </button>
    </CookieContainer>
  );
};

export default Cookie;
