/*
  @author Aarya
  @contributor Deep
*/

import Link from 'next/link';

import Screen from '../components/Screen';

export default function Cart(props) {
  return (
    <Screen title='Your Shopping Cart | WoodStreet'>
      <div className='px-14 py-11'>
        <p className='text-center font-bold text-3xl mb-2'>Your Cart</p>
        <p className='text-center font-normal text-base mb-4'>
          Your cart is currently empty.
        </p>
        <div className='w-full mx-auto text-center mb-4'>
          <Link href='/'>
            <a className='text-center hover:text-link text-base font-bold'>
              Continue Shopping
            </a>
          </Link>
        </div>
      </div>
    </Screen>
  );
}
