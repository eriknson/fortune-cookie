import styled from 'styled-components';
import React from 'react';
import { Client } from '@notionhq/client';

const Wrapper = styled.div``;
const Title = styled.h2``;

const SubmitFortune: React.FC = () => {
  const title = 'Submit a fortune';
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default SubmitFortune;

async function addItem(text) {
  try {
    await notion.request({
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
}

async function getStaticProps(): Promise<Response> {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID
  });

  return {
    props: {
      fortunes: response.results
    },
    revalidate: 300
  };
}
