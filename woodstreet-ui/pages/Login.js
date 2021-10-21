/*
  @author Deep
  @contributor 
*/

import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { object } from 'yup';

import { username, password } from '../config/validation';

import {
  login,
  resetLoginSuccess,
  resetRegisterSuccess,
} from './../redux/actions/auth';

import Screen from './../components/Screen';
import Input from './../components/Input';
import Button from './../components/Button';

const validationSchema = object().shape({ username, password });

const initialValues = { username: '', password: '' };

export default function Login(props) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loginSuccess = useSelector((state) => state.auth.loginSuccess);
  const loginError = useSelector((state) => state.auth.loginError);
  const loading = useSelector((state) => state.auth.loading);

  const router = useRouter();

  const formRef = useRef(null);

  const onSubmit = (values, { setSubmitting }) => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(login(values.username, values.password));
    }

    formRef.current.reset();
    setSubmitting(false);
  };

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(resetRegisterSuccess());
      dispatch(resetLoginSuccess());
    }
  }, []);

  if (typeof window !== 'undefined' && isAuthenticated) router.push('/');

  return (
    <Screen title='Account | WoodStreet'>
      <div className='mx-auto bg-footerBg'>
        {loginSuccess && (
          <div className='pt-8 space-y-4'>
            <section className='w-500 bg-green-500 text-white text-lg font-semibold text-center mx-auto py-2 rounded-full'>
              <p>You Have Logged In Successfully</p>
            </section>
            <section className='w-500 flex flex-row justify-center items-center text-link text-lg font-semibold text-center mx-auto py-2 rounded-full'>
              <ExclamationCircleIcon className='w-10 h-10' />
              <p>
                <b>Please don't refresh the page,</b> it will automatically
                redirect you to Home Page
              </p>
            </section>
          </div>
        )}
        {loginError && loginError == 'Authentication Failed!' && (
          <div className='pt-8'>
            <section className='w-500 flex flex-row justify-center items-center bg-error text-white text-lg font-semibold text-center mx-auto py-2 rounded-full'>
              <ExclamationCircleIcon className='w-8 h-8' />
              <p className='ml-2'>Invalid Username or Password!</p>
            </section>
          </div>
        )}
        <section className='flex flex-col justify-center items-center px-4% py-24 bg-transparent space-y-3'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form
                ref={formRef}
                className='flex flex-col justify-center text-center w-500 space-y-3'>
                <h2 className='text-primary font-bold text-3xl'>Login</h2>
                <Input name='username' type='text' placeholder='Username' />
                <Input name='password' type='password' placeholder='Password' />
                <div className='self-start'>
                  <Button
                    formButton
                    type='submit'
                    disabled={isSubmitting}
                    buttonStyle='border-primary text-white text-sm font-bold bg-primary hover:bg-secondary hover:border-secondary hover:text-primary'
                    title='Sign In'
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
          <Link href='/Register'>
            <a className='text-primary text-base font-bold hover:text-link'>
              Register
            </a>
          </Link>
          <Link href='/ResetPassword'>
            <a className='text-primary text-base font-bold hover:text-link'>
              Forgot your password?
            </a>
          </Link>
        </section>
      </div>
    </Screen>
  );
}
