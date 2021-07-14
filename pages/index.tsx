/* eslint-disable camelcase */
import Head from 'next/head';
import React from 'react';
import { Client } from '@notionhq/client';
import { Page } from '@notionhq/client/build/src/api-types';
import TitleComponent from '../components/TitleComponent';
import Cookie from '../components/Cookie';

type NotionRow = {
  id: string;
  properties: {
    Fortune: { title: Array<{ plain_text: string }> };
    Artist: { rich_text: Array<{ plain_text: string }> };
    Song: { rich_text: Array<{ plain_text: string }> };
  };
};

type NotionArray = {
  fortunes: Array<NotionRow>;
};

type Response = {
  props: {
    fortunes: Page[];
  };
  revalidate: number;
};

export default function Home({ fortunes }: NotionArray): JSX.Element {
  const fortunesFromNotion = fortunes.map((fortune) => ({
    id: fortune.id,
    lyric: fortune.properties.Fortune.title[0].plain_text,
    artist: fortune.properties.Artist.rich_text[0].plain_text,
    song: fortune.properties.Song.rich_text[0].plain_text
  }));

  return (
    <>
      <Head>
        <title>High fortune 🥠</title>
        <meta name="description" content="Badabim badaboom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TitleComponent />
      <Cookie
        // eslint-disable-next-line no-bitwise
        fortunes={fortunesFromNotion}
      />
    </>
  );
}

export async function getStaticProps(): Promise<Response> {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID
  });

  return {
    props: {
      fortunes: response.results
    },
    revalidate: 30
  };
}
