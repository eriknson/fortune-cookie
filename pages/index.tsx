import Head from 'next/head';
import React, { useState } from 'react';
import { Client } from '@notionhq/client';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Cookie from '../components/Cookie';

type NotionDatabaseStructure = {
  fortunes: Array<{
    id: string;
    properties: {
      Fortune: { title: Array<{ plain_text: string }> };
    };
  }>;
};

export default function Home({ fortunes }: NotionDatabaseStructure) {
  const fortunesFromNotion = fortunes.map(
    (fortune) => fortune.properties.Fortune.title[0].plain_text
  );
  const [closedCookie, openCookie] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    openCookie(!closedCookie);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>High fortune 🥠</title>
        <meta name="description" content="Badabim badaboom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Cookie fortunes={fortunesFromNotion} />
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
}

export async function getStaticProps() {
  const notion = new Client({ auth: process.env.NOTION_API_KEY });
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!
  });

  return {
    props: {
      fortunes: response.results
    },
    revalidate: 30
  };
}
