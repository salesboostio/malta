import { ServerStyleSheet } from "styled-components";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags}
  }
  render() {
    return (
      <html>
        <Head>
          <style>{`
            @import url(https://fonts.googleapis.com/earlyaccess/notosanskr.css);

            html, body, #__next {
              margin: 0;
              height: 100%;
              font-family: Noto Sans KR, sans-serif;
            }
            body {
              overflow-x: hidden;
            }
          `}</style>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <script src='https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.min.js' />
          <script dangerouslySetInnerHTML={{__html: `window.__ENV__ = ${JSON.stringify(process.env)}`}} />
          <NextScript />
          <div id="portal-root"></div>
        </body>
      </html>
    )
  }
}
