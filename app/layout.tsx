import type { Metadata } from 'next';
import Head from 'next/head';
import '../css/globals.css';
import NavBar from './components/navbar';

export const metadata: Metadata = {
  title: 'Ajax Abernathy',
  description: `Ajax Abernathy`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head>
        <link
          href='https://api.fontshare.com/v2/css?f[]=satoshi@400&display=swap'
          rel='stylesheet'
        />
      </Head>

      <body>
        {/* <NavBar /> */}
        {children}
      </body>
    </html>
  );
}
