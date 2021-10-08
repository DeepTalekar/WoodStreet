/*
  @author Deep
  @contributor 
*/

import React from 'react';
import Link from 'next/link';

export default function Button({
  buttonStyle,
  formButton = false,
  href,
  title,
  ...props
}) {
  return (
    <>
      {formButton == false && (
        <Link href={href}>
          <button
            className={`outline-none px-10 py-2 border text-center bg-transparent ${buttonStyle} transition-all duration-300 ease-in-out`}
            {...props}>
            {title}
          </button>
        </Link>
      )}
      {formButton == true && (
        <button
          className={`outline-none px-10 py-2 border text-center bg-transparent ${buttonStyle} transition-all duration-300 ease-in-out`}
          {...props}>
          {title}
        </button>
      )}
    </>
  );
}
