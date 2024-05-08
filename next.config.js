module.exports = {
  async redirects() {
    return [
      {
        source: ':path*',
        destination: 'https://ashleemboyer.com',
        permanent: false,
      },
    ]
  },
}
