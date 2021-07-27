module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/'
      }
    ];
  },
  reactStrictMode: true,
  env: {
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID
  }
};
