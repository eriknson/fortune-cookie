import Head from 'next/head';
import React from 'react';
import { Client } from '@notionhq/client';
import { Page } from '@notionhq/client/build/src/api-types';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Cookie from '../components/Cookie';

type NotionFortune = {
  id: string;
  properties: {
    // eslint-disable-next-line camelcase
    Fortune: { title: Array<{ plain_text: string }> };
  };
};

type NotionDatabase = {
  fortunes: Array<NotionFortune>;
};

export default function Home({ fortunes }: NotionDatabase): JSX.Element {
  const fortunesFromNotion = fortunes.map(
    (fortune) => fortune.properties.Fortune.title[0].plain_text
  );

  return (
    <>
      <Head>
        <title>High fortune 🥠</title>
        <meta name="description" content="Badabim badaboom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Cookie fortunes={fortunesFromNotion} />
    </>
  );
}

export async function getStaticProps(): Promise<{
  props: {
    fortunes: Page[];
  };
  revalidate: number;
}> {
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
