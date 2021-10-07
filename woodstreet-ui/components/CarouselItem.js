/*
  @author Deep
  @contributor 
*/

import Link from 'next/link';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/solid';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/outline';

import ProductBadge from './ProductBadge';

export default function CarouselItem(props) {
  const renderReviewStars = () => {
    let stars = [];
    for (let index = 0; index < props.starCount; index++) {
      const element = (
        <StarIcon
          key={index}
          className='text-secondary'
          width={18}
          height={18}
        />
      );
      stars.push(element);
    }
    for (let index = props.starCount; index < 5; index++) {
      const element = (
        <OutlineStarIcon
          key={index}
          className='text-primary'
          width={16}
          height={16}
        />
      );
      stars.push(element);
    }

    return stars;
  };

  return (
    <div className='relative flex flex-col justify-between items-start w-400 h-500 p-1 bg-white border border-carouselBorder'>
      {props?.onSale !== undefined && (
        <div className=' absolute top-3 left-4 z-10'>
          <ProductBadge onSale={props.onSale} />
        </div>
      )}
      <Image src={props.image} alt={props?.imageAlt} />
      <section className='flex flex-col flex-auto p-3'>
        <Link href='#'>
          <a className='font-normal text-primary text-base mb-3'>
            {props.name}
          </a>
        </Link>
        <div className='flex flex-row justify-between items-center mb-3'>
          {renderReviewStars()}
          <p className='text-primary font-normal text-sm'>
            {props.reviews} review
          </p>
        </div>
        <div className='flex flex-row'>
          <p
            className={`font-semibold text-base ${
              !!props?.discountPrice ? 'text-link pr-3' : 'text-primary'
            }`}>
            ₹ {!!props?.discountPrice ? props.discountPrice : props.price}
          </p>
          {!!props.discountPrice && (
            <p className='font-semibold text-base text-mineShaft line-through'>
              ₹ {props.price}
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
