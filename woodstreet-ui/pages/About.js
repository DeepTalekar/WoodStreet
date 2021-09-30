import Image from 'next/image';

import heroImage from '../public/images/about_hero.webp';

import Screen from '../components/Screen';

const About = () => {
  return (
    <Screen title='About | WoodStreet'>
      <Image
        className='w-full h-350'
        objectFit='cover'
        height={350}
        layout='responsive'
        src={heroImage}
        alt='About Hero'
      />

      <div className='w-2/3 py-14 mx-auto'>
        <div>
          <h1 className='text-3xl mb-4 font-bold text-center'>
            About WoodStreet
          </h1>
        </div>
        <div className=''>
          <p className='text-base font-normal mb-2'>
            Our story began in 2001 in a small studio in the middle of nowhere.
            With only one desk and next to no free time, our brand was born. Our
            passion for unique design and collaboration brought our vision, and
            products, to life.
          </p>
          <p className='text-base font-normal'>
            Our products bring together the finest materials and stunning design
            to create something very special. We believe in quality, care, and
            creating unique products that everyone can enjoy. Colorful,
            creative, and inspired by what we see everyday, each product
            represents what we love about the world we live in. We hope they’ll
            inspire you too.
          </p>
        </div>
      </div>
    </Screen>
  );
};

export default About;
