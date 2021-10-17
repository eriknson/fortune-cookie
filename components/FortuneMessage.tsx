import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { Fortune } from '../ts/types';

const FortuneWrapper = styled(motion.div)`
  position: absolute;
  width: fit-content;
  margin-top: -10%;
  opacity: 0;
`;

const FortuneBubble = styled.div`
  background-color: #e6e6e8;
  border-radius: 15px;
  padding: 6px;
  padding-inline: 10px;
  text-align: left;
`;

const FortuneAuthor = styled.div`
  text-align: left;
  padding-inline: 10px;
  font-size: 11px;
  background: transparent;
  font-weight: 500;
  color: #b1b1b1;
`;

type Props = { fortune: Fortune };

const FortuneMessage: React.FC<Props> = ({ fortune }) => (
  <FortuneWrapper
    animate={{
      opacity: 1,
      y: -20,
      transition: { duration: 0.5 }
    }}
  >
    <FortuneAuthor>
      {fortune.artist} — {fortune.song}
    </FortuneAuthor>
    <FortuneBubble>{fortune.lyric}</FortuneBubble>
  </FortuneWrapper>
);

export default FortuneMessage;
