/* eslint-disable no-console */
import styled from 'styled-components';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId: string = process.env.NOTION_DATABASE_ID;

type FortuneSubmission = {
  lyric: string;
  artist: string;
  song: string;
  author: string;
};

const Wrapper = styled.div`
  height: 33%;
  width: 100%;
  text-align: center;
  padding-block: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SubmitFortune: React.FC = () => {
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
      <Button
        color="primary"
        variant="outlined"
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleClick(e)}
      >
        Submit fortune
      </Button>
      {/* <InputForm noValidate autoComplete="off">
        <TextField label="Lyric / fortune" fullWidth multiline rows={4} />
        <TextField label="Artist" fullWidth />
        <TextField label="Song" fullWidth />
      </InputForm> */}
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
