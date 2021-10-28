/*
  @author Deep
  @contributor 
*/

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import ReviewStars from './ReviewStars';

import yellowChair from '../public/images/products/yellowChair.webp';
import Counter from './Counter';

function CartItem(props) {
  return (
    <div className='flex flex-row justify-start items-start p-8'>
      <Image width={208} height={208} src={yellowChair} />
      <div className='grid grid-cols-4 gap-y-4 h-auto w-full ml-5'>
        <div className='row-start-1 row-span-1 col-start-1 col-span-2 flex flex-col justify-between items-start space-y-4'>
          <Link href='/product/StaticPage'>
            <a className='text-primary hover:text-link focus:text-link font-bold text-xl'>
              Yellow Chair
            </a>
          </Link>
          <p className='flex flex-row justify-center items-center'>
            <ReviewStars size={18} starCount={5} />
            <span className='ml-2 text-sm text-primary'>1 review</span>
          </p>
          <p className='text-primary text-sm font-bold'>MD/Living</p>
        </div>
        <div className='row-span-1 col-start-3 col-span-1 w-min mx-auto'>
          <Counter />
        </div>
        <div className='row-span-1 col-start-4 col-span-1 w-min ml-auto flex flex-col'>
          <p className='text-sm text-primary font-bold'>Price</p>
          <p className='text-xl text-primary font-bold'>₹800</p>
        </div>
        <div className='row-start-2 row-span-1 col-span-4 flex flex-col justify-start items-start space-y-3'>
          <p className='text-primary text-sm font-bold'>Description</p>
          <p className='text-primary text-base'>
            This is a demonstration store. If you've been hunting for a new
            addition to your home, it's here. Designed to beautifully fit any
            space it's in, and guaranteed to be the highlight in your home.{' '}
          </p>
          <p className='text-link text-base cursor-pointer'>Remove</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
