import type { NextApiRequest, NextApiResponse } from 'next';

const { Client } = require('@notionhq/client');
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID
  });

  res.status(200).json({ response });
};
