import "./globals.css";

import Head from "next/head";
import { Poppins } from "@next/font/google";

import { RootLayout } from "../interface/RootLayout";

const poppins = Poppins({
  weight: "500",
});

const RootLayout = ({ children }: RootLayout) => {
  console.log(poppins.className);
  return (
    <html lang="en" className={poppins.className}>
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
