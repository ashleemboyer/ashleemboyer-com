module.exports = {
  async redirects() {
    return [
      {
        source: '/*',
        destination: 'https://ashleemboyer.com',
        permanent: false,
      },
    ]
  },
}
