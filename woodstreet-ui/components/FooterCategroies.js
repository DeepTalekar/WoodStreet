/*
    @author Deep
    @contributor 
*/

import React from 'react';
import Link from 'next/link';

export default function FooterCategroies(props) {
  return (
    <div className={`flex flex-col flex-shrink`}>
      <Link href={props.titleHref}>
        <a className='text-primary text-base font-bold hover:text-link'>
          {props.title}
        </a>
      </Link>
      <ul
        className={`grid grid-rows-${props.subCategories.length} gap-x-4 mt-5`}>
        {props.subCategories.map((element) => (
          <li
            key={element.label}
            className='text-primary font-normal text-base hover:text-link mb-4'>
            <Link href={element.href}>{element.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
