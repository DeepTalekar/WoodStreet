/*
  @author Deep
  @contributor 
*/

import * as Yup from 'yup';

export const name = Yup.string()
  .matches('^[aA-zZ s]+$', 'Only alphabets are allowed')
  .min(3)
  .max(35)
  .required();

export const email = Yup.string()
  .required()
  .email('Must be a Valid Email')
  .label('Email');
export const password = Yup.string()
  .required()
  .matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
    'Must Contain 1 Uppercase, Lowercase, Integer and Special Case Character'
  )
  .label('Password')
  .min(8, 'Minimum 8 characters are required!');

export const rating = Yup.number().required().max(5).min(1).label('Rating');

export const reviewTitle = Yup.string().required().max(256).min(3);

export const reviewBody = Yup.string().required().max(1500).min(3);
