/** @jsxImportSource @emotion/react */
import Head from "next/head";
import Lab from "./Lab";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kristen Coy</title>
        <meta name="description" content="Portfolio of Kristen Winslow Coy" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Lab />
    </div>
  );
}
