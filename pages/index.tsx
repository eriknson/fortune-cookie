/* eslint-disable camelcase */
import Head from 'next/head';
import React from 'react';
import TitleComponent from '../components/TitleComponent';
import Cookie from '../components/Cookie';
import SubmitFortune from '../components/SubmitFortune';
import { getFortunes } from './api/fortunes';

type Fortune = {
  id: string;
  lyric: string;
  artist: string;
  song: string;
};

type Fortunes = {
  fortunes: Array<Fortune>;
};

type Response = {
  props: {
    fortunes: Fortune[];
  };
  revalidate: number;
};

export default function Home({ fortunes }: Fortunes): JSX.Element {
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
        fortunes={shuffleArray(fortunes)}
      />
      <SubmitFortune />
    </>
  );
}

function shuffleArray(array: Array<Fortune>) {
  let returnedArray = array;
  for (let i: number = array.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    returnedArray[i] = array[j];
    returnedArray[j] = temp;
  }
  return returnedArray;
}

export async function getStaticProps(): Promise<Response> {
  const fortunes = await getFortunes();

  return {
    props: {
      fortunes
    },
    revalidate: 300
  };
}
