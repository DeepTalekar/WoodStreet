/*
  @author Deep
  @contributor 
*/

import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Screen(props) {
  return (
    <>
      <Navbar />
      <div className='pt-16'>{props.children}</div>
      <Footer />
    </>
  );
}
