import Link from 'next/link';

import Screen from './../components/Screen';
import Input from './../components/Input';
import Button from './../components/Button';

export default function Register(props) {
  return (
    <Screen title='Create Account | WoodStreet'>
      <div className='mx-auto bg-footerBg'>
        <section className='flex flex-col justify-center items-center px-4% py-24 bg-transparent space-y-3'>
          <form className='flex flex-col justify-center text-center w-500 space-y-3'>
            <h2 className='text-primary font-bold text-3xl'>Create Account</h2>
            <Input type='text' placeholder='First Name' />
            <Input type='text' placeholder='Last Name' />
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <div className='self-start'>
              <Button
                buttonStyle='border-primary text-white text-sm font-bold bg-primary hover:bg-secondary hover:border-secondary hover:text-primary'
                href='/'
                title='Create'
              />
            </div>
          </form>
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
