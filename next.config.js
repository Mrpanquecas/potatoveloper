module.exports = {
  extends: [
    'plugin:@next/next/recommended',
  ],
  target: "serverless",
  future: {
    webpack5: true
  },
  swcMinify: true,
  basePath: ""
}
