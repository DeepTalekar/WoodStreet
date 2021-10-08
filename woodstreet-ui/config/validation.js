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
