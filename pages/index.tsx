/* eslint-disable camelcase */
import React from 'react';
import SEO from '../components/SEO';
import Title from '../components/Title';
import Cookie from '../components/Cookie';
import { Fortunes, Fortune, Response } from '../ts/types';
import { getFortunes } from './api/fortunes';

const shuffleFortunes = (array: Array<Fortune>) => {
  let returnedArray = array;
  for (let i: number = array.length - 1; i > 0; i -= 1) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    returnedArray[i] = array[j];
    returnedArray[j] = temp;
  }
  return returnedArray;
};

export default function Home({ fortunes }: Fortunes): JSX.Element {
  return (
    <>
      <SEO />
      {/* <Title /> */}
      <Cookie fortunes={shuffleFortunes(fortunes)} />
    </>
  );
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
