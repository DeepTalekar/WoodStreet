/*
  @author Deep
  @contributor 
*/

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { consts } from 'react-elastic-carousel';

function CarouselArrow({ type, onClick, isEdge }) {
  const className = 'text-primary hover:text-secondary';

  const cursor = isEdge ? 'cursor-not-allowed invisible' : 'cursor-pointer';

  return (
    <button className={`${cursor}`} onClick={onClick} disabled={isEdge}>
      {type === consts.PREV ? (
        <ChevronLeftIcon className={className} width={30} height={30} />
      ) : (
        <ChevronRightIcon className={className} width={30} height={30} />
      )}
    </button>
  );
}

export default CarouselArrow;
