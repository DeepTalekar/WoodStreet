/*
  author @Deep
  contributor 
*/
import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from './../../components/navbar/Navbar';

export default function Home(props) {
  return (
    <div className='font-sans font-bold text-4xl'>
      <Navbar />
      <Footer />
    </div>
  );
}
