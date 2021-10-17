import styled from 'styled-components';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

const Wrapper = styled(motion.div)`
  position: absolute;
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

type Props = {
  show: boolean;
};

const Crumbs: FC<Props> = ({ show }) => {
  const randomCrumbs = [];
  for (let i = 0; i < Math.random() * (30 - 5) + 5; i += 1) {
    randomCrumbs.push(
      <Crumb
        key={i}
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * (75 - 5) + 5}%`
        }}
      />
    );
  }
  return (
    <Wrapper
      animate={
        show ? { opacity: 1 } : { opacity: 0, transition: { duration: 0 } }
      }
      className="fc-crumbs"
    >
      {randomCrumbs}
    </Wrapper>
  );
};

export default Crumbs;
