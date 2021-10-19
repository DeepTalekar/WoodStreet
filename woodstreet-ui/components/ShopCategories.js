/*
  @author Aarya
  @contributor Deep
*/

import Image from 'next/image';
import Link from 'next/link';

const ShopCategories = (props) => {
  return (
    <Link href={props.href}>
      <div className='relative'>
        <div className='flex justify-center items-center bg-black bg-opacity-25 absolute z-10 inset-0'>
          <p className='text-white text-3xl font-semibold'>{props.name}</p>
        </div>
        <Image
          className='group-hover:scale-105 transform-gpu transition-all duration-300 ease-out'
          src={props.image}
          alt={props.name}
          objectFit='cover'
          layout='responsive'
          placeholder='blur'
          quality={100}
        />
      </div>
    </Link>
  );
};

export default ShopCategories;
