import type { NextApiRequest, NextApiResponse } from 'next';

const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_API_KEY
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ message: `${req.method} requests are not allowed` });
  }
  try {
    const { lyric, artist, song } = JSON.parse(req.body);
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID
      },
      properties: {
        Fortune: {
          title: [
            {
              text: {
                content: lyric
              }
            }
          ]
        },
        Artist: {
          rich_text: [
            {
              text: {
                content: artist
              }
            }
          ]
        },
        Song: {
          rich_text: [
            {
              text: {
                content: song
              }
            }
          ]
        }
      }
    });
    return res.status(201).json({ msg: 'Success' });
  } catch (error) {
    return res.status(500).json({ msg: 'There was an error' });
  }
}
