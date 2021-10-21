/*
  @author Aarya
  @contributor Deep
*/

import Link from 'next/link';
import Image from 'next/image';
import {  useState } from 'react';
import Counter from '../components/Counter';
import Button from '../components/Button';
import Screen from '../components/Screen';
import yellowChair from '../public/images/products/yellowChair.webp'


export default function Cart(props) {
    
  const[cart,setCart] = useState(1)
  const[price,setPrice] = useState(200)
  const [count, setCount] = useState(1);
 
  function increment() {
    setCount(count+1)
  }

  function decrement() {
    setCount(count-1)
    
  }

 let prize = count * price;
 let prize1 = prize + 100;

 function Payment() {
  alert(`Payement of Rs ${prize1} is done succesfully`);
  setCart(0)
}
 function Remove() {
  setCart(0)
 }
 
  if(cart===0){
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
  else{
    return (
      <Screen title='Your Shopping Cart | WoodStreet'>
        <div className='px-14 py-32'>
          <p className='text-center font-bold text-3xl mb-2'>Your Cart</p>
          <div className='w-full mx-auto text-center mb-4'>
            <Link href='/'>
              <a className='text-center hover:text-link text-base font-bold'>
                Continue Shopping
              </a>
            </Link>
          </div>
          
         <div className="flex justify-around mt-24">
           <div>
           <Image src={yellowChair} width={150}
           height={150}
           layout='fixed' />
           </div>
           <div className="float-right pr-14">
            <div className="px-12">
              <h1 className=" font-bold">Yellow Chair</h1>
              <p className=" text-sm">Description</p>
              <p className="">This is a demonstration store.</p>
              <p className=" "> If you've been hunting for a new addition to your home, it's here.
                 Designed to beautifully fit any space it's in, 
               and guaranteed to be the highlight in your home.</p>
               <Button 
              href=''
              title='Remove'
              buttonStyle='border border-primary text-primary text-sm font-semibold bg-white hover:bg-secondary hover:border-secondary py-3'
              onClick={Remove}
            /> 
            </div> 
           </div>
                  
           <div className>
           <section className='flex flex-row justify-between items-center text-mineShaft'>
            <button
              className={`border border-mineShaft border-opacity-60 text-sm font-normal px-3 py-2 bg-mineShaft bg-opacity-5 ${
              count == 1 ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
              disabled={count == 1} // Minimum Quantity customer can order
              onClick={decrement}>
              -
            </button>
            <p className='border-t border-b border-mineShaft border-opacity-60 text-sm font-normal px-3 py-2'>
             {count}
            </p>
            <button
             className={`border border-mineShaft border-opacity-60 text-sm font-normal px-3 py-2 bg-mineShaft bg-opacity-5 ${
             count == 10 ? 'cursor-not-allowed' : 'cursor-pointer'
             }`}
             disabled={count == 10} // Maximum Quantity customer can order
             onClick={increment}>
             +
            </button>
            </section>
            <h1 className="text-sm font-extrabold pt-4">Price: Rs {prize}</h1>
            
          </div>
        </div>
        <div className="float-right ">
          <p>Total payement(including Taxes and shipping fee) : Rs {prize1}</p>
          
          <Button
              href=''
              title='Pay'
              buttonStyle='border border-primary text-primary text-sm font-semibold bg-white hover:bg-secondary hover:border-secondary py-3'
              onClick={Payment}
            />

        </div>
       </div> 
      </Screen>

     )
}
}
