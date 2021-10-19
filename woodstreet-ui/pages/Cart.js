import React from 'react'
import Screen from '../components/Screen';
import Link from 'next/link';

const Cart = () => {
    return (
        <Screen title='Cart'>
            <div className="mt-8 mb-56 pr-32 pl-10">
                <p className=" font-bold float-left text-3xl">Your Cart</p>
                <Link href="/">
                <a className="float-right hover:text-link text-xl">Continue Shopping</a>
                </Link>
            </div>
        </Screen>
            
            

         
    )
}

export default Cart
