/*
  author @Deep
  contributor 
*/
import React from 'react';

export default function IconUser({
  props,
  width,
  height,
  stroke,
  isAuthenticated,
}) {
  return (
    <svg
      className={`stroke-current text-primary ${
        isAuthenticated
          ? 'group-hover:stroke-current group-hover:text-link'
          : 'hover:stroke-current hover:text-link'
      }`}
      width={width}
      height={height}
      viewBox='0 0 50 50'
      cursor='pointer'
      {...props}>
      <g
        stroke='currentColor'
        strokeWidth={1.6}
        fill='none'
        fillRule='evenodd'
        strokeLinecap='round'
        strokeLinejoin='round'>
        <path d='M34 34v-2c0-2.21-2.015-4-4.5-4h-9c-2.485 0-4.5 1.79-4.5 4v2' />
        <circle cx={25} cy={20} r={4} />
      </g>
    </svg>
  );
}
