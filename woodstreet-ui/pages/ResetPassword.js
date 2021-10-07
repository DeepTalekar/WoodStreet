import Link from 'next/link';

import Screen from './../components/Screen';
import Input from './../components/Input';
import Button from './../components/Button';

export default function ResetPassword(props) {
  return (
    <Screen title='Account | WoodStreet'>
      <div className='mx-auto bg-footerBg'>
        <section className='flex flex-col justify-center items-center px-4% py-32 bg-transparent space-y-3'>
          <form className='flex flex-col justify-center text-center w-500 space-y-3'>
            <h2 className='text-primary font-bold text-3xl'>
              Reset your password
            </h2>
            <p className='font-normal text-base text-primary'>
              We will send you an email to reset your password.
            </p>
            <Input type='email' placeholder='Email' />
            <div className='self-start'>
              <Button
                buttonStyle='border-primary text-white text-sm font-bold bg-primary hover:bg-secondary hover:border-secondary hover:text-primary'
                href='/'
                title='Submit'
              />
            </div>
          </form>
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
