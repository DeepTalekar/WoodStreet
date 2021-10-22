/*
  @author Deep
  @contributor 
*/

import React, { useEffect } from 'react';
import Head from 'next/head';
import { useDispatch } from 'react-redux';

import { checkAuthStatus, requestRefreshToken } from '../redux/actions/auth';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Screen(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(checkAuthStatus());
      // dispatch(requestRefreshToken());
    }
  }, [dispatch]);

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
