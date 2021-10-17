/*
  @author Aarya
  @contributor Deep
*/

import Image from 'next/image';
import { Formik, Form } from 'formik';
import { object } from 'yup';

import { email, name, mobileNumber, reviewBody } from '../config/validation';

import heroImage from '../public/images/contact_hero.webp';

import Button from '../components/Button';
import Input from '../components/Input';
import MultiLineInput from '../components/MultiLineInput';
import Screen from '../components/Screen';

const inputFields = [
  {
    label: 'Name',
    name: 'name',
    placeholder: 'Name',
    type: 'text',
  },
  {
    label: 'Email',
    name: 'email',
    placeholder: 'Email',
    type: 'email',
  },
  {
    label: 'Phone Number',
    name: 'mobileNumber',
    placeholder: 'Phone Number',
    type: 'number',
  },
  {
    isMultiLine: true,
    label: 'Message (max. 1500 characters)',
    name: 'message',
    placeholder: 'Message',
    type: 'text',
  },
];

const validationSchema = object().shape({
  name: name.label('Name'),
  email,
  mobileNumber: mobileNumber.label('Phone Number'),
  message: reviewBody.label('Message'),
});

const initialValues = {
  name: '',
  email: '',
  mobileNumber: '',
  message: '',
};

export default function Contact(props) {
  const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
      setSubmitting(false);
    }, 400);
  };

  const renderInputFields = () => {
    const list = inputFields.map((field, index) =>
      field?.isMultiLine != true ? (
        <Input
          key={field.name}
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          type={field.type}
          className='mb-1'
        />
      ) : (
        <MultiLineInput
          key={field.name}
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          type={field.type}
          className='h-40 mb-1'
        />
      )
    );
    return list;
  };

  return (
    <Screen title='Contact Us | WoodStreet'>
      <Image
        className='w-full h-350'
        objectFit='cover'
        height={350}
        layout='responsive'
        src={heroImage}
        alt='Contact Hero'
      />
      <div className='text-center mt-14 mb-4 mx-auto'>
        <h1 className='text-3xl font-semibold text-primary mb-2'>Contact Us</h1>
        <p>
          Have a question before you place your order? Contact us using the form
          below and we're happy to reach out prior to your order.
        </p>
      </div>

      <div className='mx-auto px-12% mb-14'>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form className='px-4%'>
              {renderInputFields()}
              <div className='flex justify-end mt-5'>
                <Button
                  formButton
                  type='submit'
                  disabled={isSubmitting}
                  title='Send'
                  buttonStyle='bg-primary border-primary text-white text-sm hover:bg-secondary hover:border-secondary hover:text-primary font-semibold'
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Screen>
  );
}
