/*
  @author Deep
  @contributor 
*/

import { useState } from 'react';

export default function Counter(props) {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <section className='flex flex-row justify-between items-center text-mineShaft'>
      <button
        className={`border border-mineShaft border-opacity-60 text-sm font-normal px-3 py-2 bg-mineShaft bg-opacity-5 ${
          count == 1 ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
        disabled={count == 1} // Minimum Quantity customer can order
        onClick={decrement}>
        -
      </button>
      <p className='border-t border-b border-mineShaft border-opacity-60 text-sm font-normal px-3 py-2'>
        {count}
      </p>
      <button
        className={`border border-mineShaft border-opacity-60 text-sm font-normal px-3 py-2 bg-mineShaft bg-opacity-5 ${
          count == 10 ? 'cursor-not-allowed' : 'cursor-pointer'
        }`}
        disabled={count == 10} // Maximum Quantity customer can order
        onClick={increment}>
        +
      </button>
    </section>
  );
}
