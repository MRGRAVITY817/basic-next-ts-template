import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

class AppDocument extends Document {
  static getInitialProps = async (context: DocumentContext) => {
    const initialProps = await Document.getInitialProps(context);
    return { ...initialProps };
  };
  render() {
    return (
      <Html lang="ko" className="overflow-x-hidden">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@400;500;700&display=optional"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default AppDocument;
