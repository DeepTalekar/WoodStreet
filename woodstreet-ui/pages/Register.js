/*
  @author Deep
  @contributor 
*/

import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { object } from 'yup';

import { email, name, password, username } from '../config/validation';

import { register } from './../redux/actions/auth';

import Screen from './../components/Screen';
import Input from './../components/Input';
import Button from './../components/Button';

const validationSchema = object().shape({
  firstName: name.label('First Name'),
  lastName: name.label('Last Name'),
  username,
  email,
  password,
});

const initialValues = {
  firstName: '',
  lastName: '',
  username: '',
  email: '',
  password: '',
};

export default function Register(props) {
  const router = useRouter();

  const registerSuccess = useSelector((state) => state.auth.registerSuccess);
  const registerFail = useSelector((state) => state.auth.registerFail);
  const loading = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const formRef = useRef(null);

  const onSubmit = (values, { setSubmitting }) => {
    console.log('Values in On Submit: ', values);

    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(
        register(
          values.firstName,
          values.lastName,
          values.username,
          values.email,
          values.password
        )
      );
    }

    formRef.current.reset();
    setSubmitting(false);
  };

  if (typeof window !== 'undefined' && isAuthenticated) router.push('/');

  if (registerSuccess) router.push('/Login');

  return (
    <Screen title='Create Account | WoodStreet'>
      <div className='mx-auto bg-footerBg'>
        {registerSuccess == true && (
          <div className='pt-8 space-y-4'>
            <section className='w-500 bg-green-500 text-white text-lg font-semibold text-center mx-auto py-2 rounded-full'>
              <p>Your Account is Successfully Created</p>
            </section>
            <section className='w-500 flex flex-row justify-center items-center text-link text-lg font-semibold text-center mx-auto py-2 rounded-full'>
              <ExclamationCircleIcon className='w-10 h-10' />
              <p>
                <b>Please don't refresh the page,</b> it will automatically
                redirect you to Login
              </p>
            </section>
          </div>
        )}
        {registerFail == true && (
          <div className='pt-8'>
            <section className='w-500 bg-error text-white text-lg font-semibold text-center mx-auto py-2 rounded-full'>
              <p>
                An <b>Error</b> occured while registering your account{' '}
              </p>
            </section>
          </div>
        )}
        <section
          className={`flex flex-col justify-center items-center px-4% ${
            registerFail == true || registerSuccess == true ? 'py-6' : 'py-24'
          } bg-transparent space-y-3`}>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form
                ref={formRef}
                className='flex flex-col justify-center text-center w-500 space-y-3'>
                <h2 className='text-primary font-bold text-3xl'>
                  Create Account
                </h2>
                <Input name='firstName' type='text' placeholder='First Name' />
                <Input name='lastName' type='text' placeholder='Last Name' />
                <Input name='username' type='text' placeholder='Username' />
                <Input name='email' type='email' placeholder='Email' />
                <Input name='password' type='password' placeholder='Password' />
                <div className='self-start'>
                  <Button
                    formButton
                    type='submit'
                    disabled={isSubmitting}
                    buttonStyle='border-primary text-white text-sm font-bold bg-primary hover:bg-secondary hover:border-secondary hover:text-primary'
                    title='Create'
                  />
                </div>
              </Form>
            )}
          </Formik>
          <Link href='/'>
            <a className='text-primary text-base font-bold hover:text-link'>
              Return to Store
            </a>
          </Link>
        </section>
      </div>
    </Screen>
  );
}
