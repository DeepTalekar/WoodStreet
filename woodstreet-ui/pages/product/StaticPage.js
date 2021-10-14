/*
  @author Deep
  @contributor 
*/

import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import Carousel from 'react-elastic-carousel';

import Button from '../../components/Button';
import CarouselArrow from '../../components/CarouselArrow';
import Counter from '../../components/Counter';
import FooterBadgesSection from '../../components/FooterBadgesSection';
import ProductBadge from '../../components/ProductBadge';
import ReviewStars from '../../components/ReviewStars';
import Screen from '../../components/Screen';

import yellowChair from '../../public/images/products/yellowChair.webp';

function Product(props) {
  const carouselRef = useRef(null);

  const onImageClick = (index) => {
    carouselRef.current.goTo(index);
  };

  const renderAllProductImages = () => {
    const images = [];
    for (let index = 0; index < 4; index++) {
      const element = (
        <Image
          className='cursor-pointer px-1'
          key={index}
          onClick={() => onImageClick(index)}
          width={100}
          height={100}
          layout='fixed'
          src={yellowChair}
        />
      );
      images.push(element);
    }
    return images;
  };

  return (
    <Screen title='Product Name | WoodStreet'>
      <div className='grid grid-cols-2 gap-x-14 px-4% py-16'>
        <div className='relative col-start-1'>
          <div className=' absolute top-3 left-4 z-10'>
            <ProductBadge onSale={true} />
          </div>
          <div className='w-full'>
            <Carousel
              ref={carouselRef}
              itemsToShow={1}
              renderArrow={CarouselArrow}
              renderPagination={() => <></>}>
              <Image src={yellowChair} />
              <Image src={yellowChair} />
              <Image src={yellowChair} />
              <Image src={yellowChair} />
            </Carousel>
          </div>
          <section className='flex flex-row justify-center items-start mt-7'>
            {renderAllProductImages()}
          </section>
        </div>
        <div className='col-start-2 '>
          <h1 className='text-primary text-4xl font-bold mb-3'>
            Lil' Buddy Table Lamp
          </h1>
          <section className='flex flex-row justify-start items-center mb-5'>
            <ReviewStars starCount={5} />
            <span className='text-primary font-normal text-sm ml-1'>
              1 review
            </span>
          </section>
          <section className='flex flex-row mb-3'>
            <p className={`font-semibold text-xl text-link pr-3 `}>₹ 1999</p>
            <p className='font-semibold text-xl text-primary text-opacity-60 line-through'>
              ₹ 3999
            </p>
          </section>

          <section className='flex flex-col justify-start items-start space-y-3'>
            <p className='text-primary text-sm font-bold'>Quantity</p>
            <Counter />
          </section>

          <section className='flex flex-row justify-start items-center my-5'>
            <div className='flex flex-row rounded-lg bg-footerBg text-link py-2 pr-7 pl-2'>
              <ExclamationCircleIcon width={24} height={24} />
              <p className='text-sm font-normal ml-2'>
                Only 10 units are available!
              </p>
            </div>
          </section>

          <section className='flex flex-col w-1/2 space-y-5'>
            <Button
              href='#'
              title='Add to Cart'
              buttonStyle='border border-primary text-primary text-sm font-semibold bg-white hover:bg-secondary hover:border-secondary py-3'
            />
            <Button
              href='#'
              title='Buy it now'
              buttonStyle='border border-primary text-white text-sm font-normal bg-primary hover:text-primary hover:bg-secondary hover:border-secondary py-3'
            />
          </section>

          <section className='flex flex-col space-y-5 my-5'>
            <p className='text-link font-bold text-sm'>
              <span className='rounded-sm border-b-2 border-link'>
                Description
              </span>
            </p>
            <p>This is a demonstration store.</p>
            <p>
              If you've been hunting for a new addition to your home, it's here.
              Designed to beautifully fit any space it's in, and guaranteed to
              be the highlight in your home.{' '}
            </p>
          </section>
        </div>
      </div>

      <FooterBadgesSection />
    </Screen>
  );
}

export default Product;
