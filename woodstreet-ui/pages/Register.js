/*
  @author Deep
  @contributor 
*/

import { useRef } from 'react';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import { object } from 'yup';

import { email, name, password } from '../config/validation';

import Screen from './../components/Screen';
import Input from './../components/Input';
import Button from './../components/Button';

const validationSchema = object().shape({
  firstName: name.label('First Name'),
  lastName: name.label('Last Name'),
  email,
  password,
});

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export default function Register(props) {
  const formRef = useRef(null);

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      formRef.current.reset();
      setSubmitting(false);
    }, 400);
  };

  return (
    <Screen title='Create Account | WoodStreet'>
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
                <h2 className='text-primary font-bold text-3xl'>
                  Create Account
                </h2>
                <Input name='firstName' type='text' placeholder='First Name' />
                <Input name='lastName' type='text' placeholder='Last Name' />
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
