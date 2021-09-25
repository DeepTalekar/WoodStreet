/*
  @author Deep
  @contributor 
*/

import React from 'react';
import Link from 'next/link';

export default function Button(props) {
  return (
    <Link href={props.href}>
      <button
        className={`px-10 py-2 border-2 text-base text-center font-semibold bg-transparent ${props.buttonStyle} transition-all duration-300 ease-in-out`}>
        {props.title}
      </button>
    </Link>
  );
}
