import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
          <link
            href="/fonts/VT323.ttf"
            rel="preload"
            as="font"
            type="font/ttf"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
