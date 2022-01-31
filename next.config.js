module.exports = {
  future: {
    webpack5: true
  },
  swcMinify: true,
  async headers() {
    return [
      {
        source: "/fonts/VT323.ttf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable"
          }
        ]
      }
    ]
  }
}
