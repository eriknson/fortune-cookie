module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/'
      }
    ];
  },
  reactStrictMode: true
};
