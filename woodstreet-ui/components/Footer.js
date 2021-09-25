/*
  @author Deep
  @contributor 
*/

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';

import FooterCategroies from './FooterCategroies';

const footerCategories = [
  {
    title: 'Living Rooms',
    titleHref: '/',
    subCategories: [
      {
        label: 'Lighting',
        href: '/',
      },
      {
        label: 'Furniture',
        href: '/',
      },
      {
        label: 'Decorative Objects',
        href: '/',
      },
    ],
  },

  {
    title: 'Sitting Area',
    titleHref: '/',
    subCategories: [
      {
        label: 'Furniture',
        href: '/',
      },
      {
        label: 'Accessories',
        href: '/',
      },
    ],
  },

  {
    title: 'Artwork',
    titleHref: '/',
    subCategories: [
      {
        label: 'Architectural Photography',
        href: '/',
      },
    ],
  },

  {
    title: 'Store Information',
    titleHref: '/',
    subCategories: [
      {
        label: 'About Us',
        href: '/',
      },
      {
        label: 'Contact',
        href: '/',
      },
    ],
  },
];

const socialList = [
  {
    href: 'https://www.facebook.com',
    icon: faFacebook,
  },
  {
    href: 'https://www.instagram.com',
    icon: faInstagram,
  },
  {
    href: 'https://www.youtube.com',
    icon: faYoutube,
  },
  {
    href: 'https://www.twitter.com',
    icon: faTwitter,
  },
  {
    href: 'https://www.pinterest.com',
    icon: faPinterest,
  },
];

export default function Footer(props) {
  return (
    <footer className='bg-footerBg py-8 px-4%'>
      <div className='grid grid-cols-3 py-8 border-t-2 border-b-2 border-primary'>
        <div className='col-span-1 grid grid-rows-3 gap-y-5'>
          <section className='row-span-1 row-start-1 row-end-1'>
            <Link href='/'>
              <a className='text-4xl font-bold text-primary hover:text-link'>
                WoodStreet
              </a>
            </Link>
            <p className='text-primary text-base font-normal mt-4'>
              &copy; 2021 WoodStreet.
            </p>
          </section>
          <section className='row-span-1'>
            <address className='text-primary font-normal text-base'>
              <p>Address: </p>
              <p>Udyog Mandir, Pitamber Road,</p>
              <p>Mahim, Mumbai - 400016</p>
            </address>
          </section>
          <section className='row-span-1'>
            <p className='text-base font-bold'>Follow Us</p>
            <div className='flex flex-row justify-between items-center w-1/2 mt-4'>
              {socialList.map((company) => (
                <Link key={company.href} href={company.href} prefetch={false}>
                  <a className='text-primary hover:text-link'>
                    <FontAwesomeIcon icon={company.icon} size='lg' />
                  </a>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <div className='col-span-2 grid grid-cols-4 gap-x-5'>
          {footerCategories.map((element) => (
            <FooterCategroies
              key={element.title}
              title={element.title}
              titleHref={element.titleHref}
              subCategories={element.subCategories}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}
