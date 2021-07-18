import React from 'react';
import styled from 'styled-components';

const FortuneWrapper = styled.div`
  top: 15%;
  display: flex;
  flex-direction: column;
  font-family: 'Helvetica Neue';
  line-height: 1.5;
  animation: foldOut 0.5s ease-in forwards;
`;

const FortuneBubble = styled.div`
  background-color: #e6e6e8;
  border-radius: 11px;
  padding: 4px;
  padding-inline: 10px;
  text-align: left;
`;

const FortuneAuthor = styled.div`
  text-align: left;
  padding-inline: 10px;
  font-size: 10px;
  background: transparent;
  font-weight: 500;
  color: #b1b1b1;
`;

type Props = { lyric: string; artist: string; song: string };

const Fortune: React.FC<Props> = ({ lyric, artist, song }) => (
  <FortuneWrapper>
    <FortuneAuthor>
      {artist} — {song}
    </FortuneAuthor>
    <FortuneBubble>{lyric}</FortuneBubble>
  </FortuneWrapper>
);

export default Fortune;
