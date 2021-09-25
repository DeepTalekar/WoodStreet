/*
  author @Deep
  contributor 
*/

import { useState } from 'react';
import Image from 'next/image';

import heroImage from '../../public/images/home_hero.webp';

import Screen from '../../components/Screen';
import Button from '../../components/Button';

export default function Home(props) {
  return (
    <Screen>
      <div className='flex flex-row w-full h-auto'>
        <Image className='w-2/3' src={heroImage} alt='HomeHero' />
        <div className='flex flex-col justify-center items-center w-1/3 h-907 bg-grannySmith'>
          <div className='px-14 py-11'>
            <p className='text-white text-3xl font-semibold mb-2'>
              Modern furniture designed to last
            </p>
            <p className='text-white text-xl font-normal italic mb-4'>
              Made by us, for you
            </p>
            <Button
              title='Shop'
              href='/'
              buttonStyle='border-white text-white hover:bg-primary hover:border-primary'
            />
          </div>
        </div>
      </div>
      <div className='py-11 px-4%'>
        <h2 className='text-primary text-3xl font-semibold mb-4'>
          Shop by type
        </h2>
        <p>
          Browse our most popular products, guaranteed to add style and
          character to any space.
        </p>
      </div>
    </Screen>
  );
}
