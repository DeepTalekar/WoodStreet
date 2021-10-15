/*
  @author Deep
  @contributor 
*/

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/solid';
import {
  StarIcon as OutlineStarIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/outline';
import ReactStars from 'react-rating-stars-component';
import { Formik, Form } from 'formik';
import { object } from 'yup';

import {
  email,
  name,
  rating,
  reviewBody,
  reviewTitle,
} from '../config/validation';
import { colors } from './../config/colors';

import Button from './Button';
import Input from './Input';
import MultiLineInput from './MultiLineInput';

const validationSchema = object().shape({
  name: name.label('Name'),
  email,
  rating,
  reviewBody: reviewBody.label('Review'),
  reviewTitle: reviewTitle.label('Title'),
});

const initialValues = {
  name: '',
  email: '',
  rating: 0,
  reviewBody: '',
  reviewTitle: '',
};

const reactStarProps = {
  a11y: true,
  count: 5,
  isHalf: false,
  color: colors.primary,
  activeColor: colors.secondary,
  emptyIcon: (
    <OutlineStarIcon className='text-primary' width={22} height={22} />
  ),
  filledIcon: <StarIcon className='text-link' width={24} height={24} />,
};

export default function ProductReviewForm(props) {
  const [state, setState] = useState({ rating: 0 });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setState({ ...state, rating: 0 });
      setSubmitting(false);
    }, 400);
    props?.onSubmit && props.onSubmit();
  };
  return (
    <section className='flex flex-col justify-between items-start py-6 space-y-4'>
      <h3 className='text-primary text-base italic'>Write a Review</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ errors, values, isSubmitting, setValues, touched }) => (
          <Form className='flex flex-col justify-between items-start w-full space-y-4'>
            <div className='w-full'>
              <Input
                className='mb-1'
                label='Name'
                name='name'
                type='text'
                placeholder='Enter your name'
              />
            </div>

            <div className='w-full'>
              <Input
                className='mb-1'
                label='Email'
                name='email'
                type='email'
                placeholder='john.smith@example.com'
              />
            </div>

            <div className=''>
              <h3 className='text-primary text-sm font-bold'>Rating</h3>
              <ReactStars
                {...reactStarProps}
                value={state.rating}
                onChange={(value) => {
                  console.log('Value: ', value);
                  setState({ ...state, rating: value });
                  setValues({ ...values, rating: value });
                }}
              />
              {errors.rating && touched.rating && (
                <div className='flex flex-row items-center text-error'>
                  <ExclamationCircleIcon width={24} height={24} />
                  <p className='text-center text-sm font-bold pl-2'>
                    {errors.rating}
                  </p>
                </div>
              )}
            </div>
            <div className='w-full'>
              <Input
                className='mb-1'
                label='Review Title'
                name='reviewTitle'
                type='text'
                placeholder='Give your review a title'
              />
            </div>
            <div className='w-full'>
              <MultiLineInput
                className='mb-1 h-52'
                label='Review Body (max. 1500 characters)'
                name='reviewBody'
                type='text'
                placeholder='Write your comments here'
              />
            </div>
            <div className='self-end'>
              <Button
                formButton
                type='submit'
                disabled={isSubmitting}
                buttonStyle='border-primary text-white text-sm font-bold bg-primary hover:bg-secondary hover:border-secondary hover:text-primary'
                title='Submit Review'
              />
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
}
