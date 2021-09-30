import { useState } from 'react';
import Image from 'next/image';

import heroImage from '../../public/images/home_hero.webp';

import Screen from '../../components/Screen';
import Button from '../../components/Button';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Home(props) {
  return (
    
    <Screen>
     
      <div class="text-center mt-32">
        <h1 class="text-3xl font-semibold text-black  mb-2 ">Contact-us</h1>
        <p class="px-16%"> Have a question before you place your order? Contact us using the form below
           and we're happy to reach out prior to your order.</p>

       </div>


     
     <div class="mx-2 mt-4 mb-12 px-12%">
      <form class="py-10 px-4%  ">
       <div class="mb-4">
        <label class="block text-black text-sm font-bold mb-2" for="name">
         Name
        </label>
        <input class="  border border-black   rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name"></input>
       </div>
       <div class="mb-6">
        <label class="block text-black text-sm font-bold mb-2" for="email">
         Email
         </label>
        <input  class=" border border-black  rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"></input>      
       </div>
       <div class="mb-6">
        <label class="block text-black text-sm font-bold mb-2" for="number">
         Phone Number
        </label>
        <input class=" border border-black rounded w-full py-2 px-3 text-black  leading-tight focus:outline-none focus:shadow-outline" id="number" type="number" placeholder="Phone Number"></input>      
        </div>
      <div class="mb-6">
       <label class="block text-black text-sm font-bold mb-2" for="message">
         Message
       </label>
       <textarea class=" border border-black  h-40 rounded w-full  py-2 px-3 jus text-black  leading-tight focus:outline-none focus:shadow-outline" id="message" type="text" placeholder="Message"></textarea>      
      </div>
      <div class="flex  justify-end">
      <Button
              title='Send'
              href='/'
              buttonStyle="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            />
      </div>
     </form>
     </div>
    
    </Screen>
  
  );
}
