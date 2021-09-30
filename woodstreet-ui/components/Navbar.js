/*
  author @Deep
  contributor 
*/
import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import {
  ChevronDownIcon,
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  XIcon,
} from '@heroicons/react/outline';

import IconUser from '../assets/svg/IconUser';

export default function Navbar(props) {
  const [state, setState] = useState({
    isMenuOpen: false,
    isSearchEnable: false,
  });

  const hamburgerMenuRef = useRef(null);

  const onHamburgerClick = () => {
    setState({ ...state, isMenuOpen: !state.isMenuOpen });
  };

  const onSearchKeyDownPress = (event) => {
    const isEnterPressed = event.key == 'Enter' ? true : false;
    if (isEnterPressed) {
      console.log('ENTER PRESSED WHEN SEARCH IS ENABLED');
      // Search Logic here
      setState({ ...state, isSearchEnable: false });
    }
  };

  const onSearchIconPress = () => {
    setState({ ...state, isSearchEnable: !state.isSearchEnable });
  };

  return (
    <div className='fixed z-40 bg-white w-full'>
      <header className='grid place-self-center place-items-center grid-cols-8 gap-1 gap-y-6  font-sans py-3 w-full px-4% md:grid-cols-2 xl:grid-cols-10 z-40'>
        <div
          ref={hamburgerMenuRef}
          className='flex justify-center items-center relative w-12 h-12 place-self-center col-span-1 md:hidden'
          onClick={onHamburgerClick}>
          <MenuIcon className='w-8 h-8 text-primary hover:text-primary-backgroundActive cursor-pointer' />
        </div>
        <h2 className='col-span-5 self-center text-center md:col-span-1 md:row-span-1 md:text-left md:place-self-start xl:col-start-1 xl:col-span-3 '>
          <Link href='/'>
            <a className='text-3xl font-sans font-bold md:text-4.5xl'>
              WoodStreet{''}
            </a>
          </Link>
        </h2>
        <div className='col-span-2 self-center grid grid-cols-2 gap-6 place-self-end md:grid-cols-3 md:row-span-1 md:col-span-1 md:gap-3 xl:col-start-9 xl:col-span-3'>
          <div className='place-self-center col-span-1'>
            <SearchIcon
              onClick={onSearchIconPress}
              className='w-6 h-6 text-primary hover:text-link cursor-pointer'
            />
          </div>
          <div className='place-self-center col-span-1 hidden md:inline'>
            <Link href='/'>
              <span>
                <IconUser height={50} width={50} />
              </span>
            </Link>
          </div>
          <div className='place-self-center col-span-1'>
            <Link href='/'>
              <ShoppingCartIcon className='w-6 h-6 text-primary hover:text-link cursor-pointer' />
            </Link>
          </div>
        </div>

        {/* Laptop/Desktop Navigation Start */}
        <ul className='hidden col-span-1 place-self-start place-items-center grid-cols-3 gap-x-6 font-bold text-primary text-base md:row-span-1 md:relative md:grid xl:row-start-1 xl:col-start-4 xl:col-span-4 xl:place-self-center'>
          <li className='hover:text-link'>
            <Link href='/'>
              <a>Shop</a>
            </Link>
          </li>
          <li className='hover:text-link'>
            <Link href='/About'>
              <a>About</a>
            </Link>
          </li>

          <li className='hover:text-link'>
            <Link href='/Contact'>
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        {/* Laptop/Desktop Navigation End */}

        {/* Mobile/Tablet Navigation Start */}
        <Transition
          className='absolute top-0 pt-3 pl-4% flex flex-col justify-between items-start bg-white z-10 w-full md:hidden'
          show={state.isMenuOpen}
          enter='transition ease-in-out duration-300 transform'
          enterFrom='translate-y-full opacity-0'
          enterTo='translate-y-0 opacity-100'
          leave='transition ease-in-out duration-300 transform'
          leaveFrom='translate-y-0 opacity-100'
          leaveTo='translate-y-full opacity-0'>
          <div
            className='flex items-center justify-center w-12 h-12'
            onClick={onHamburgerClick}>
            <XIcon className='w-8 h-8 cursor-pointer text-primary hover:text-primary-backgroundActive' />
          </div>
          <div className='mx-16'>
            <h2 className='text-3xl my-7'>Main Menu</h2>
            <ul className='space-y-4'>
              <Menu as='li'>
                {({ open }) => (
                  <>
                    <div className='group flex flex-row items-center'>
                      <Link href='/'>
                        <a className='text-lg font-normal group-hover:text-link'>
                          Shop
                        </a>
                      </Link>
                      <Menu.Button className='group-hover:text-link'>
                        <ChevronDownIcon className='w-6 h-6 ml-3' />
                      </Menu.Button>
                    </div>
                    <Transition
                      show={open}
                      enter='transition duration-100 ease-out'
                      enterFrom='transform scale-95 opacity-0'
                      enterTo='transform scale-100 opacity-100'
                      leave='transition duration-75 ease-out'
                      leaveFrom='transform scale-100 opacity-100'
                      leaveTo='transform scale-95 opacity-0'>
                      <Menu.Items
                        static
                        as='div'
                        className='absolute space-y-5 flex flex-col justify-between items-start bg-gray-50 rounded-lg shadow-2xl ring-gray-400 p-6'>
                        <Menu.Item>
                          <Link href='/'>
                            <a className='text-base font-normal hover:text-link'>
                              Living Rooms
                            </a>
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link href='/'>
                            <a className='text-base font-normal hover:text-link'>
                              Sitting Areas
                            </a>
                          </Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link href='/'>
                            <a className='text-base font-normal hover:text-link'>
                              Artworks
                            </a>
                          </Link>
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </>
                )}
              </Menu>
              <li>
                <Link href='/About'>
                  <a className='text-lg font-normal hover:text-link'>About</a>
                </Link>
              </li>
              <li>
                <Link href='/Contact'>
                  <a className='text-lg font-normal hover:text-link'>Contact</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className='text-lg font-normal hover:text-link'>
                    Sign In / Sign Up
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </Transition>
        {/* Mobile/Tablet Navigation End */}
      </header>
      <Transition
        className='absolute inset-0 w-full h-screen z-20 bg-black bg-opacity-70 flex flex-col justify-between'
        show={state.isSearchEnable}
        enter='transition ease-in-out duration-500 transform'
        enterFrom='translate-x-full'
        enterTo='translate-x-0'
        leave='transition ease-in-out duration-500 transform'
        leaveFrom='translate-x-0'
        leaveTo='translate-x-full'>
        <div className='ml-8 mt-8'>
          <XIcon
            onClick={() =>
              setState({ ...state, isSearchEnable: !state.isSearchEnable })
            }
            className='w-8 h-8 cursor-pointer text-white hover:text-gray-200'
          />
        </div>
        <div className='flex flex-col justify-center items-center h-full w-full'>
          <input
            placeholder='Press Enter to Search'
            className='w-4/5 md:w-1/2 h-20 bg-transparent border-b-2 border-white text-4xl text-white placeholder-current outline-none'
            type='text'
            onKeyDownCapture={onSearchKeyDownPress}
          />
        </div>
      </Transition>
    </div>
  );
}
