import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ar" dir='rtl'>
      <Head />
      <body className='bg-dark'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
