/*
  @author Deep
  @contributor 
*/

import ReviewStars from './ReviewStars';

export default function CustomerReview(props) {
  return (
    <div className='flex flex-col items-start w-full py-3'>
      <ReviewStars starCount={props.rating} size={24} />
      <h3 className='text-base text-primary font-medium italic'>
        {props.title}
      </h3>
      <p className='text-primary text-sm font-normal mb-3'>
        <strong className='font-bold italic'>{props.reviewer} </strong> on{' '}
        <strong className='font-bold italic'>
          {props.reviewDate.toLocaleDateString()}
        </strong>
      </p>
      <p className='text-sm text-primary font-normal'>{props.review}</p>
    </div>
  );
}
