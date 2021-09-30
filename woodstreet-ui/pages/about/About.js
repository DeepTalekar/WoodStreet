import { useState } from 'react';
import Image from 'next/image';

import heroImage from '../../public/images/home_hero.webp';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Screen from '../../components/Screen'
import Button from '../../components/Button';

import React from 'react'

const About = () => {
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
     
      <div className="mt-32 mb-24  ">
          <div>
        <h1 className="text-3xl  mb-4 font-bold text-center">About WoodStreet</h1>
          </div>
        <div className="px-32" >
        <p className="font-normal  mb-2  ">Our story began in 2001 in a small studio in the middle of nowhere. With only one desk and next to no free time,
             our brand was born. Our passion for unique design and collaboration brought our vision, and products, to life.</p>
        <p className="font-normal ">Our products bring together the finest materials and stunning design to create something very special. 
        We believe in quality, care, and creating unique products that everyone can enjoy. Colorful, creative, and inspired by what we see everyday, 
            each product represents what we love about the world we live in. We hope they’ll inspire you too.</p>
       </div>
      </div>
     
 
            
    </Screen>
    )
}

export default About
