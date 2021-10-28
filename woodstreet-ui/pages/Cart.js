/*
  @author Aarya
  @contributor Deep
*/

import { useState } from 'react';
import Link from 'next/link';
import { ReceiptTaxIcon } from '@heroicons/react/outline';

import Button from '../components/Button';
import CartItem from '../components/CartItem';
import EmptyCart from './../components/EmptyCart';
import Screen from '../components/Screen';

export default function Cart(props) {
  return (
    <Screen title='Your Shopping Cart | WoodStreet'>
      <main className='grid grid-cols-3 px-4% py-8'>
        <section className='col-span-2 flex flex-col px-8'>
          <div className='flex flex-row justify-between items-center px-8'>
            <p className='font-bold text-3xl'>Your Cart</p>
            <Link href='/'>
              <a className='text-base text-link'>Continue Shopping</a>
            </Link>
          </div>
          <hr className='my-4 mx-8 border-primary' />
          <div>
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
        </section>
        <section className='col-span-1 flex flex-col justify-between items-start px-8'>
          <div className='w-full h-64 bg-mineShaft-light bg-opacity-75 p-4 flex justify-center items-center'>
            <div className='bg-transparent border border-white p-7'>
              <p className='text-white text-base font-normal'>Today only</p>
              <p className='text-white text-3xl font-bold mb-2'>
                Share an offer with your customers
              </p>
              <p className='text-white text-base font-normal mb-4'>
                And let people know why they should take advantage of your
                promotional offer.
              </p>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start w-full mt-9'>
            <p className='text-sm font-bold mb-1'>Discount</p>
            <div className='flex flex-row justify-start items-center space-x-2 text-link'>
              <ReceiptTaxIcon className='w-5 h-5' />
              <span>WoodStreet Discount (-₹200)</span>
            </div>
            <hr className='my-4 w-full border-primary' />
            <p className='text-sm font-bold mb-1'>Subtotal</p>
            <p className='text-3xl font-bold mb-2'>₹800</p>
            <p className='text-base mb-4'>
              Shipping & taxes calculated at checkout
            </p>
            <Button
              title='Proceed to Checkout'
              href='/'
              buttonStyle='border-primary bg-primary text-white text-sm hover:border-secondary hover:bg-secondary hover:text-primary focus:border-secondary focus:bg-secondary focus:text-primary'
            />
          </div>
        </section>
      </main>
    </Screen>
  );
}
