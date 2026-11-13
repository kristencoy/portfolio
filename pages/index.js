/** @jsxImportSource @emotion/react */
import Head from 'next/head';
import MainContent from '../src/components/V1/MainContent';
import { UpdatedMainContent } from '../src/components/V2/UpdatedMainContent';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kristen Coy</title>
        <meta name='description' content='Welcome to the portfolio of Kristen Coy' />
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Mulish:wght@300;400;600&display=swap'
          rel='stylesheet'
        />
      </Head>

      <UpdatedMainContent />
    </div>
  );
}
