import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  position: absolute;
  margin-top: 10px;
  left: calc(50% - 0.4em);
  width: 0.8em;
  height: 6em;
  z-index: 1;
`;

const Crumb = styled.div`
  position: absolute;
  background: currentColor;
  color: #efaa5d;
  border-radius: 50%;
  width: 0.5em;
  height: 0.5em;
`;

const Crumbs: React.FC = () => {
  const randomCrumbs = [];
  for (let i = 0; i < Math.random() * (50 - 15) + 15; i += 1) {
    randomCrumbs.push(
      <Crumb
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * (75 - 5) + 5}%`
        }}
      />
    );
  }
  return <Wrapper className="fc-crumbs">{randomCrumbs}</Wrapper>;
};

export default Crumbs;
