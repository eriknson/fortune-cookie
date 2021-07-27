/* eslint-disable no-console */
import styled from 'styled-components';
import React from 'react';

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId: string = process.env.NOTION_DATABASE_ID;

type FortuneSubmission = {
  lyric: string;
  artist: string;
  song: string;
  author: string;
};

const Wrapper = styled.div``;
const Title = styled.h2``;

const SubmitFortune: React.FC = () => {
  const title = 'Submit a fortune';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    submitFortuneToNotion({
      lyric: 'Du blir inte smart av den skiten som du läser',
      artist: 'Badabim',
      song: 'Killarna i Båstad',
      author: 'null'
    });
  };

  return (
    <Wrapper>
      <Title
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
      >
        {title}
      </Title>
    </Wrapper>
  );
};

export default SubmitFortune;

async function submitFortuneToNotion(fortune: FortuneSubmission) {
  try {
    await notion.request({
      mode: 'no-cors',
      path: 'pages',
      method: 'POST',
      body: {
        parent: { database_id: databaseId },
        properties: {
          title: {
            title: [
              {
                text: {
                  content: fortune.lyric
                }
              }
            ]
          },
          Artist: {
            rich_text: [
              { type: fortune.artist, text: { content: fortune.artist } }
            ]
          },
          Song: {
            rich_text: [{ type: fortune.song, text: { content: fortune.song } }]
          }
        }
      }
    });
    console.log('Success! Entry added.');
  } catch (error) {
    console.error(error.body);
  }
}
