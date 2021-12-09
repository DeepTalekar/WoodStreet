import React from 'react'
import yellowChair from '../public/images/products/yellowChair.webp'
import Link from 'next/link';
import Image from 'next/image';
import {  useState } from 'react';
import Counter from '../components/Counter';
import Button from '../components/Button';

const CartDisplay = (props) => {
    const [count, setCount] = useState(1);

   
    function increment() {
        setCount(count+1)
      }
    
      function decrement() {
        setCount(count-1)
        
      }
      
      
      let prize = count * props.price;
    return (
        <div className="flex justify-around mt-24">
        <div>
        <Image src={props.image} width={150}
        height={150}
        layout='fixed' />
        </div>
        <div className="float-right pr-14">
         <div className="px-12">
           <h1 className=" font-bold">{props.name}</h1>
           <p className=" text-sm">Description</p>
           <p className="">This is a demonstration store.</p>
           <p className=" "> If you've been hunting for a new addition to your home, it's here.
              Designed to beautifully fit any space it's in, 
            and guaranteed to be the highlight in your home.</p>
            <Button 
           href=''
           title='Remove'
           buttonStyle='border border-primary text-primary text-sm font-semibold bg-white hover:bg-secondary hover:border-secondary py-3'
           
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
    )
}


export default CartDisplay
