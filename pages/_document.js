// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="https://use.typekit.net/ehc3nch.css" />
        </Head>
        <body className="bg-darkBlue">
          <Main />

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
