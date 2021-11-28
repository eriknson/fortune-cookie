import styled from 'styled-components';
import React from 'react';
import Navbar from '../components/Navbar';
import SEO from '../components/SEO';
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

const PageGrid = styled.div`
  margin: auto;
  max-width: 1200px;
  width: 100%;
  height: 90vh;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  line-height: 120%;
  color: #1d1d1f;
`;

const SubTitle = styled.h1`
  text-align: center;
  line-height: 100%;
  color: lightgray;
`;

export default function Home({ fortunes }: Fortunes): JSX.Element {
  return (
    <>
      <SEO />
      <Navbar />
      <PageGrid>
        <Content>
          <Title>High fortunes</Title>
          <SubTitle>ft. Dree Low</SubTitle>
          <Cookie fortunes={shuffleFortunes(fortunes)} />
        </Content>
      </PageGrid>
    </>
  );
}

export async function getStaticProps(): Promise<Response> {
  const fortunes = await getFortunes();

  return {
    props: {
      fortunes
    },
    revalidate: 360
  };
}
