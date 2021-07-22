import styled from 'styled-components';
import React from 'react';
import { Client } from '@notionhq/client';

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

const Wrapper = styled.div``;
const Title = styled.h2``;

const SubmitFortune: React.FC = () => {
  const title = 'Submit a fortune';

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // addItem('Hello world');
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

/* async function addItem(text) {
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
                  content: text
                }
              }
            ]
          }
        }
      }
    });
    console.log('Success! Entry added.');
  } catch (error) {
    console.error(error.body);
  }
} */
