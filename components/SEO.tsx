import React, { FC } from 'react';
import Head from 'next/head';

const TitleComponent: FC = (): JSX.Element => (
  <Head>
    <title>Good fortune 🥠</title>
    <meta name="description" content="Badabim badaboom" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default TitleComponent;
