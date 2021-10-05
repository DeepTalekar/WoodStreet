import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Shopp = (props) => {
    return (
        <div>
         <p className='absolute z-10 left-11 bottom-11 text-white text-2xl font-semibold'>
             {props.name}
         </p>
         <Image
              className='group-hover:scale-105 transform-gpu duration-200 ease-out'
              src={props.image}
              alt={props.name}
              objectFit='cover'
              layout='responsive'
              placeholder='blur'
              placeholder='blur'
              quality={100}
            />
            
        </div>
    )
}

export default Shopp
