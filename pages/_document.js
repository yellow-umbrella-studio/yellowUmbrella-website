import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
        <title>Yellow Umbrella Apps</title>
          <link rel="icon" href="/favicon.png" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Mobile games and apps studio." />
        <meta name="keywords" content="apps, mobile games, games, yellow umbrella" />
        <meta name="author" content="Yellow Umbrella Studio" />
        
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
