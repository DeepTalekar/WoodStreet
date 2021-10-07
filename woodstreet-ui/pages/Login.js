import Link from 'next/link';

import Screen from './../components/Screen';
import Input from './../components/Input';
import Button from './../components/Button';

export default function Login(props) {
  return (
    <Screen title='Account | WoodStreet'>
      <div className='mx-auto bg-footerBg'>
        <section className='flex flex-col justify-center items-center px-4% py-24 bg-transparent space-y-3'>
          <form className='flex flex-col justify-center text-center w-500 space-y-3'>
            <h2 className='text-primary font-bold text-3xl'>Login</h2>
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <div className='self-start'>
              <Button
                buttonStyle='border-primary text-white text-sm font-bold bg-primary hover:bg-secondary hover:border-secondary hover:text-primary'
                href='/'
                title='Sign In'
              />
            </div>
          </form>
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
