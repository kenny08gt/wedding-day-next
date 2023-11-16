"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loaderVisible, setLoaderVisible] = useState(true);
  useEffect(() => {
    setLoaderVisible(false);
  });

  return (
    <html lang="en">
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="image/favicon.png" />
        <title>Alan & Eunice Weeding day </title>

        <meta
          property="og:title"
          content="Alan & Eunice Weeding day  - Febrero 4, 2024"
        />
        <meta
          property="og:description"
          content="Alan & Eunice Weeding day  - Febrero 4, 2024 "
        />
        <meta property="og:locale" content="id_ID" />
        <meta
          property="og:image"
          content="https://clever-macaron-1a41a1.netlify.app/image/thumbnail-web.jpeg"
        />
        <meta
          property="og:url"
          content="https://clever-macaron-1a41a1.netlify.app/"
        />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <body
        className={[...inter.className, loaderVisible ? "preloader-site" : ""]}
      >
        {loaderVisible ? (
          <div className="preloader-wrapper">
            <div className="preloader">
              <img
                src="img/favicon.png"
                alt="Flower"
                className=" animate-ping"
              />{" "}
              <img
                src="img/favicon.png"
                alt="Flower"
                className=" animate-pulse absolute top-0"
              />
            </div>
          </div>
        ) : (
          <></>
        )}

        {children}
      </body>
    </html>
  );
}
