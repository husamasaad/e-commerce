import React from 'react';
import Head from 'next/head';

import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>المتجر الإلكتروني</title>
      </Head>
      <header className='bg-dark container-fluid'>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer className='container-fluid'>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout