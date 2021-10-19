/*
  @author Deep
  @contributor 
*/

import React from 'react';
import Head from 'next/head';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Screen(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navbar />
      <main className='font-sans pt-16'>{props.children}</main>
      <Footer />
    </>
  );
}
