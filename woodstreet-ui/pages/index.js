/*
  author @Deep
  contributor 
*/

import Image from 'next/image';
import Link from 'next/link';

import heroImage from '../public/images/home_hero.webp';
import decorativeObjectsImage from '../public/images/home_decorativeObjects.jpg';
import lightingImage from '../public/images/home_lighting.webp';
import livingRoomsImage from '../public/images/home_livingRooms.webp';
import sittingAreaImage from '../public/images/home_sittingArea.webp';
import modernFurnitureImage from '../public/images/home_modernFurniture.webp';

import Screen from '../components/Screen';
import Button from '../components/Button';

export default function Home(props) {
  return (
    <Screen title='WoodStreet'>
      <div className='flex flex-row w-full h-auto'>
        <Image
          className='w-2/3'
          src={heroImage}
          alt='HomeHero'
          placeholder='blur'
        />
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
              buttonStyle='text-base font-semibold border-white text-white hover:bg-primary hover:border-primary'
            />
          </div>
        </div>
      </div>
      <div className='py-11 px-4%'>
        <h2 className='text-primary text-3xl font-semibold mb-4'>
          Shop by type
        </h2>
        <p>
          Browse our most popular products, guaranteed to add style and
          character to any space.
        </p>
      </div>
      <div className='grid auto-cols-auto auto-rows-min gap-4 px-4%'>
        <Link href='/'>
          <div className='relative row-start-1 col-start-1 row-span-2 col-span-4 place-items-center cursor-pointer group'>
            <p className='absolute z-10 left-11 bottom-11 text-white text-2xl font-semibold'>
              Decorative Objects
            </p>
            <Image
              className='group-hover:scale-105 transform-gpu duration-200 ease-out'
              src={decorativeObjectsImage}
              alt='Decorative Objects'
              objectFit='cover'
              layout='responsive'
              placeholder='blur'
              placeholder='blur'
              quality={100}
            />
          </div>
        </Link>
        <Link href='/'>
          <div className='relative col-start-5 row-start-1 row-span-3 col-span-9 place-items-center cursor-pointer group'>
            <p className='absolute z-10 left-11 bottom-11 text-white text-2xl font-semibold'>
              Living Room
            </p>
            <Image
              className='group-hover:scale-105 transform-gpu duration-200 ease-in'
              src={livingRoomsImage}
              alt='Living Room'
              objectFit='cover'
              layout='responsive'
              placeholder='blur'
              quality={100}
            />
          </div>
        </Link>
        <Link href='/'>
          <div className='relative row-start-4 row-span-2 row-end-7 col-start-1 col-span-9 place-items-center cursor-pointer group'>
            <p className='absolute z-10 left-11 bottom-11 text-white text-2xl font-semibold'>
              Lighting
            </p>
            <Image
              className='group-hover:scale-105 transform-gpu duration-200 ease-in'
              src={lightingImage}
              alt='Lighting'
              objectFit='cover'
              objectPosition='center'
              layout='responsive'
              placeholder='blur'
              quality={100}
            />
          </div>
        </Link>
        <Link href='/'>
          <div className='relative row-start-4 row-span-1 col-start-10 col-span-4 place-items-center cursor-pointer group'>
            <p className='absolute z-10 left-11 bottom-11 text-white text-2xl font-semibold'>
              Sitting Areas
            </p>
            <Image
              className='group-hover:scale-105 transform-gpu duration-200 ease-in'
              src={sittingAreaImage}
              alt='Sitting Area'
              objectFit='cover'
              layout='responsive'
              placeholder='blur'
              quality={100}
            />
          </div>
        </Link>
      </div>
      <div className='w-full py-4'>
        <div className='flex flex-row bg-secondary-slightLight h-full'>
          <Image
            className='group-hover:scale-105 transform-gpu duration-200 ease-in'
            src={modernFurnitureImage}
            alt='Modern Furniture'
            placeholder='blur'
            quality={100}
          />
          <div className='flex flex-col flex-auto justify-center w-1/3 my-auto mx-0 h-full bg-transparent'>
            <div className='py-11 px-14'>
              <p className='text-3xl font-semibold text-primary mb-3'>
                Modern furniture
              </p>
              <p className='text-primary text-base font-normal mb-4'>
                Inspired by timeless design
              </p>
              <Button
                buttonStyle='border-primary hover:border-secondary hover:bg-secondary font-normal'
                title='Our Story'
                href='/About'
              />
            </div>
          </div>
        </div>
      </div>
    </Screen>
  );
}
