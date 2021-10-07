/*
  @author Aarya
  @contributor Deep
*/

import Image from 'next/image';

import heroImage from '../public/images/contact_hero.webp';

import Screen from '../components/Screen';
import Button from '../components/Button';
import Input from '../components/Input';
import MultiLineInput from '../components/MultiLineInput';

const inputFields = [
  {
    placeholder: 'Name',
    type: 'text',
  },
  {
    placeholder: 'Email',
    type: 'email',
  },
  {
    placeholder: 'Phone Number',
    type: 'number',
  },
];

export default function Home(props) {
  const renderInputFields = () => {
    const list = inputFields.map((field, index) => (
      <Input
        key={index}
        placeholder={field.placeholder}
        type={field.type}
        className='mb-6'
      />
    ));
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
        <form className='px-4%  '>
          {renderInputFields()}
          <MultiLineInput placeholder='Message' className='h-40 mb-6' />
          <div className='flex justify-end'>
            <Button
              title='Send'
              href='/'
              buttonStyle='bg-primary border-primary text-white text-sm hover:bg-secondary hover:border-secondary hover:text-primary font-semibold'
            />
          </div>
        </form>
      </div>
    </Screen>
  );
}
