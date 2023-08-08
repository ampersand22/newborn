import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Newborn-App</title>
        <meta name="Newborn-App" content="#" />
        <link rel="icon" href="#" />
      </Head>
      
      <Header />
      {/* Banner */}

    </div>
  )
}