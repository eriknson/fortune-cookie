import type { NextApiRequest, NextApiResponse } from 'next';

const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });

type Fortune = {
  id: string;
  lyric: string;
  artist: string;
  song: string;
};

export async function getFortunes(): Promise<Fortune[]> {
  const databaseId: string = process.env.NOTION_DATABASE_ID;
  const response = await notion.databases.query({
    database_id: databaseId
  });

  const formattedFortunes = response.results.reduce(
    (approvedFortunes, fortune) => {
      if (fortune.properties.Approved.checkbox) {
        approvedFortunes.push({
          id: fortune.id,
          lyric: fortune.properties.Fortune.title[0].plain_text,
          artist: fortune.properties.Artist.rich_text[0].plain_text,
          song: fortune.properties.Song.rich_text[0].plain_text
        });
      }
      return approvedFortunes;
    },
    []
  );

  return formattedFortunes;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default async function getFortunesApi(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const fortunes = await getFortunes();
  res.status(200).json(fortunes);
}