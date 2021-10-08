/*
  @author Deep
  @contributor 
*/

import { useRef } from 'react';
import Link from 'next/link';
import { Formik, Form } from 'formik';
import { object } from 'yup';

import { email } from '../config/validation';

import Screen from './../components/Screen';
import Input from './../components/Input';
import Button from './../components/Button';

const validationSchema = object().shape({ email });

const initialValues = { email: '' };

export default function ResetPassword(props) {
  const formRef = useRef(null);

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      formRef.current.reset();
      setSubmitting(false);
    }, 400);
  };

  return (
    <Screen title='Account | WoodStreet'>
      <div className='mx-auto bg-footerBg'>
        <section className='flex flex-col justify-center items-center px-4% py-32 bg-transparent space-y-3'>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form
                ref={formRef}
                className='flex flex-col justify-center text-center w-500 space-y-3'>
                <h2 className='text-primary font-bold text-3xl'>
                  Reset your password
                </h2>
                <p className='font-normal text-base text-primary'>
                  We will send you an email to reset your password.
                </p>
                <Input name='email' type='email' placeholder='Email' />
                <div className='self-start'>
                  <Button
                    formButton
                    type='submit'
                    disabled={isSubmitting}
                    buttonStyle='border-primary text-white text-sm font-bold bg-primary hover:bg-secondary hover:border-secondary hover:text-primary'
                    title='Submit'
                  />
                </div>
              </Form>
            )}
          </Formik>
          <Link href='/Login'>
            <a className='text-primary text-base font-bold hover:text-link'>
              Cancel
            </a>
          </Link>
        </section>
      </div>
    </Screen>
  );
}

ResetPassword;
