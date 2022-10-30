import Head from "next/head";
import './globals.css';

import { RootLayout } from "../interface/RootLayout";

const RootLayout = ({ children }: RootLayout) => {
  return (
    <html lang="en">
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="My dashboard practice" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
