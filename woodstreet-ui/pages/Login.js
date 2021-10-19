/*
  @author Deep
  @contributor 
*/

import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Formik, Form } from 'formik';
import { object } from 'yup';

import { username, password } from '../config/validation';

import { login, resetRegisterSuccess } from './../redux/actions/auth';

import Screen from './../components/Screen';
import Input from './../components/Input';
import Button from './../components/Button';

const validationSchema = object().shape({ username, password });

const initialValues = { username: '', password: '' };

export default function Login(props) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const router = useRouter();

  const formRef = useRef(null);

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      formRef.current.reset();
      setSubmitting(false);
    }, 400);
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(login(values.username, values.password));
    }
  };

  useEffect(() => {
    if (dispatch && dispatch !== null && dispatch !== undefined) {
      dispatch(resetRegisterSuccess());
    }
  }, []);

  if (typeof window !== 'undefined' && isAuthenticated) router.push('/');

  return (
    <Screen title='Account | WoodStreet'>
      <div className='mx-auto bg-footerBg'>
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
