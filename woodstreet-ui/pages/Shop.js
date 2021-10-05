import Image from 'next/image';
import Link from 'next/link';

import Accessories from '../public/images/Shop_Accessories.jpg';
import Architectural from '../public/images/Shop_DelicateStructure.jpg'
import Decorative from '../public/images/Shop_DecorativeObjects.jpg'
import Furniture from '../public/images/Shop_LivingRooms.jpg'
import Lightning from '../public/images/Shop_Lighting.jpg'
import Sitting from '../public/images/Shop_SittingArea-Furniture.jpg'

import Screen from '../components/Screen';

import React from 'react'

const Shop = (props) => {
    return (
        <Screen>
            <div className="mt-16 mb-10">
                  <div className='grid auto-cols-auto auto-rows-min gap-4 px-4%'>
        <Link href='/'>
          <div className='relative row-start-1  col-start-1 row-span-2 col-span-4 place-items-center cursor-pointer group'>
           <p className='absolute z-10 left-11 bottom-11 text-white text-2xl font-semibold'>
               Accessories
           </p>
            <Image
              className='group-hover:scale-105 transform-gpu duration-200 ease-out'
              src={Accessories}
              alt='Accessories'
              objectFit='cover'
              layout='responsive'
              placeholder='blur'
              placeholder='blur'
              quality={100}
            />
          </div>
          
        </Link>

        <Link href='/'>
          <div className='relative col-start-5 row-start-1 row-span-2 col-span-4 place-items-center cursor-pointer group'>
            <p className='absolute z-10 left-11 bottom-11 text-white text-2xl font-semibold'>
              Architectural Photography
            </p>
            <Image
              className='group-hover:scale-105 transform-gpu duration-200 ease-out'
              src={Architectural}
              alt='Architectural'
              objectFit='cover'
              layout='responsive'
              placeholder='blur'
              placeholder='blur'
              quality={100}
            />
          </div>
          
        </Link>

        <Link href='/'>
          <div className='relative col-start-9 row-start-1 row-span-2 col-span-4 place-items-center cursor-pointer group'>
            <p className='absolute z-10 left-11 bottom-11 text-white text-2xl font-semibold'>
              Decorative Objects
            </p>
            <Image
              className='group-hover:scale-105 transform-gpu duration-200 ease-out'
              src={Decorative}
              alt='Decorative'
              objectFit='cover'
              layout='responsive'
              placeholder='blur'
              placeholder='blur'
              quality={100}
              
            />
          </div>
          
        </Link>





        <Link href='/'>
          <div className='relative row-start-5  col-start-1 row-span-2 col-span-4 place-items-center cursor-pointer group'>
            <p className='absolute z-10 left-11 bottom-11 text-white text-2xl font-semibold'>
              Furniture
            </p>
            <Image
              className='group-hover:scale-105 transform-gpu duration-200 ease-out'
              src={Furniture}
              alt='Furniture'
              objectFit='cover'
              layout='responsive'
              placeholder='blur'
              placeholder='blur'
              quality={100}
            />
          </div>
          
        </Link>

        <Link href='/'>
          <div className='relative col-start-5 row-start-5 row-span-2 col-span-4 place-items-center cursor-pointer group'>
            <p className='absolute z-10 left-11 bottom-11 text-white text-2xl font-semibold'>
              Lightning
            </p>
            <Image
              className='group-hover:scale-105 transform-gpu duration-200 ease-out'
              src={Lightning}
              alt='Lightning'
              objectFit='cover'
              layout='responsive'
              placeholder='blur'
              placeholder='blur'
              quality={100}
            />
          </div>
          
        </Link>

        <Link href='/'>
          <div className='relative col-start-9 row-start-5 row-span-2 col-span-4 place-items-center cursor-pointer group'>
            <p className='absolute z-10 left-11 bottom-11 text-white text-2xl font-semibold'>
              Sitting Area Furniture
            </p>
            <Image
              className='group-hover:scale-105 transform-gpu duration-200 ease-out'
              src={Sitting}
              alt='Sitting'
              objectFit='cover'
              layout='responsive'
              placeholder='blur'
              placeholder='blur'
              quality={100}
              
            />
          </div>
          
        </Link>
        
        </div>
        </div>
        </Screen>
    )
}

export default Shop
