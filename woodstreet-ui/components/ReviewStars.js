/*
  @author Deep
  @contributor 
*/

import { StarIcon } from '@heroicons/react/solid';
import { StarIcon as OutlineStarIcon } from '@heroicons/react/outline';

export default function ReviewStars(props) {
  const renderReviewStars = () => {
    let stars = [];
    for (let index = 0; index < props.starCount; index++) {
      const element = (
        <StarIcon
          key={index}
          className='text-secondary'
          width={!!props?.size ? props.size : 18}
          height={!!props?.size ? props.size : 18}
        />
      );
      stars.push(element);
    }
    for (let index = props.starCount; index < 5; index++) {
      const element = (
        <OutlineStarIcon
          key={index}
          className='text-primary'
          width={!!props?.size ? props.size - 2 : 16}
          height={!!props?.size ? props.size - 2 : 16}
        />
      );
      stars.push(element);
    }

    return stars;
  };

  return (
    <span className='flex justify-center items-center'>
      {renderReviewStars()}
    </span>
  );
}
