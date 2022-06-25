import React from 'react';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const MyApp: React.FC<AppProps> = function ({ Component, pageProps }) {
  return <Component {...pageProps} />;
};

export default MyApp;
