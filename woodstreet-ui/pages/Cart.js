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
import CartDisplay from '../components/CartDisplay';


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
 let ten=10;

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
       
       
         <CartDisplay image={yellowChair} name="Yellow Chair" price={200}/>
         <CartDisplay image={yellowChair} name="Yellow Chair" price={200}/>
         
         
  

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
