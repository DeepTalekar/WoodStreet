/*
  author @Deep
  contributor 
*/

import Image from 'next/image';
import Link from 'next/link';
import {
  PhoneIcon,
  RefreshIcon,
  ThumbUpIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';
import Carousel from 'react-elastic-carousel';

import decorativeObjectsImage from '../public/images/home_decorativeObjects.jpg';
import heroImage from '../public/images/home_hero.webp';
import lightingImage from '../public/images/home_lighting.webp';
import livingRoomsImage from '../public/images/home_livingRooms.webp';
import modernFurnitureImage from '../public/images/home_modernFurniture.webp';
import sittingAreaImage from '../public/images/home_sittingArea.webp';
import yellowChair from '../public/images/products/yellowChair.webp';

import Button from '../components/Button';
import CarouselItem from '../components/CarouselItem';
import CarouselArrow from './../components/CarouselArrow';
import FooterBadges from '../components/FooterBadges';
import SectionHeader from '../components/SectionHeader';
import Screen from '../components/Screen';

const footerBadges = [
  {
    icon: <ThumbUpIcon className='text-white' width={30} height={30} />,
    title: 'Statisfaction Guaranteed',
  },
  {
    icon: <UserGroupIcon className='text-white' width={30} height={30} />,
    title: 'Loyalty Program',
  },
  {
    icon: <RefreshIcon className='text-white' width={30} height={30} />,
    title: 'Free Shipping & Returns',
  },
  {
    icon: <PhoneIcon className='text-white' width={30} height={30} />,
    title: 'Phone Support',
  },
];

export default function Home(props) {
  const renderFooterBadges = () =>
    footerBadges.map((badge, index) => (
      <FooterBadges key={index} icon={badge.icon} title={badge.title} />
    ));

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
          <section className='px-14 py-11'>
            <p className='text-white text-3xl font-semibold mb-2'>
              Modern furniture designed to last
            </p>
            <p className='text-white text-xl font-normal italic mb-4'>
              Made by us, for you
            </p>
            <Button
              title='Shop'
              href='/Shop'
              buttonStyle='text-base font-semibold border-white text-white hover:bg-primary hover:border-primary'
            />
          </section>
        </div>
      </div>
      <SectionHeader
        title='Shop by type'
        subtitle='Browse our most popular products, guaranteed to add style and character to any space.'
      />
      <div className='grid auto-cols-auto auto-rows-min gap-4 px-4% mb-5'>
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
      <SectionHeader
        title='Featured Furniture'
        subtitle='From full sized lounge chairs, to dining chairs'
      />
      <div className='flex flex-row w-full py-5 px-10'>
        <Carousel
          showEmptySlots
          renderPagination={() => {
            return <></>;
          }}
          renderArrow={CarouselArrow}
          itemsToScroll={2}
          itemsToShow={4}
          itemPadding={[0, 15, 0, 15]}>
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
        </Carousel>
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
      <SectionHeader
        title='Featured Lighting'
        subtitle='Our most popular lighting, from pendants to desk lamps'
      />
      <div className='flex flex-row w-full py-5 px-10'>
        <Carousel
          showEmptySlots
          renderPagination={() => {
            return <></>;
          }}
          renderArrow={CarouselArrow}
          itemsToScroll={2}
          itemsToShow={4}
          itemPadding={[0, 15, 0, 15]}>
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
        </Carousel>
      </div>
      <div className='flex flex-row justify-evenly w-full py-16 px-10 bg-porcelain'>
        {renderFooterBadges()}
      </div>
    </Screen>
  );
}
