import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../../assets/brand/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../../assets/brand/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../../assets/brand/favicon-16x16.png"
        />
        <link rel="manifest" href="../../assets/brand/site.webmanifest" />
        <link href="../../assets/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.min.css"
          rel="stylesheet"
        />
        <link href="../../assets/dist/css/style.css" rel="stylesheet" />
      </head>
      <body>
        <Main />
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" />
        <script src="../../assets/dist/js/bootstrap.bundle.min.js" />
        <NextScript />
      </body>
    </Html>
  );
}
