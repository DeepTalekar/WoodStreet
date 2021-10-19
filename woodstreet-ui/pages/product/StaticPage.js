/*
  @author Deep
  @contributor 
*/

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import Carousel from 'react-elastic-carousel';

import Button from '../../components/Button';
import CarouselArrow from '../../components/CarouselArrow';
import CarouselItem from '../../components/CarouselItem';
import Counter from '../../components/Counter';
import CustomerReview from '../../components/CustomerReview';
import FooterBadgesSection from '../../components/FooterBadgesSection';
import ProductBadge from '../../components/ProductBadge';
import ProductReviewForm from '../../components/ProductReviewForm';
import ReviewStars from '../../components/ReviewStars';
import Screen from '../../components/Screen';

import yellowChair from '../../public/images/products/yellowChair.webp';
import description1 from '../../public/images/products/product_description1.webp';
import description2 from '../../public/images/products/product_description2.webp';

function Product(props) {
  const carouselRef = useRef(null);

  const [state, setState] = useState({
    isNewReview: false,
  });

  const createNewReview = () => {
    setState({ ...state, isNewReview: !state.isNewReview });
  };

  const reviewDate = new Date(2017, 0, 9);

  const onImageClick = (index) => {
    carouselRef.current.goTo(index);
  };

  const renderAllProductImages = () => {
    const images = [];
    for (let index = 0; index < 4; index++) {
      const element = (
        <Image
          className='cursor-pointer px-1'
          key={index}
          onClick={() => onImageClick(index)}
          width={100}
          height={100}
          layout='fixed'
          src={yellowChair}
        />
      );
      images.push(element);
    }
    return images;
  };

  return (
    <Screen title='Product Name | WoodStreet'>
      <div className='grid grid-cols-2 gap-x-14 px-4% py-16'>
        <div className='relative col-start-1'>
          <div className=' absolute top-3 left-4 z-10'>
            <ProductBadge onSale={true} />
          </div>
          <div className='w-full'>
            <Carousel
              ref={carouselRef}
              itemsToShow={1}
              renderArrow={CarouselArrow}
              renderPagination={() => <></>}>
              <Image src={yellowChair} />
              <Image src={yellowChair} />
              <Image src={yellowChair} />
              <Image src={yellowChair} />
            </Carousel>
          </div>
          <section className='flex flex-row justify-center items-start mt-7'>
            {renderAllProductImages()}
          </section>
        </div>
        <div className='col-start-2 '>
          <h1 className='text-primary text-4xl font-bold mb-3'>Yellow Chair</h1>
          <section className='flex flex-row justify-start items-center mb-5'>
            <ReviewStars starCount={5} />
            <span className='text-primary font-normal text-sm ml-1'>
              1 review
            </span>
          </section>
          <div className='flex flex-row justify-start items-start mb-5'>
            <Link href='#'>
              <a className='text-primary text-sm font-bold hover:text-link mr-2'>
                MD/Living
              </a>
            </Link>
          </div>
          <section className='flex flex-row mb-3'>
            <p className={`font-semibold text-xl text-link pr-3 `}>₹ 1999</p>
            <p className='font-semibold text-xl text-primary text-opacity-60 line-through'>
              ₹ 3999
            </p>
          </section>
          <section className='flex flex-col justify-start items-start space-y-3'>
            <p className='text-primary text-sm font-bold'>Quantity</p>
            <Counter />
          </section>
          <section className='flex flex-row justify-start items-center my-5'>
            <div className='flex flex-row rounded-lg bg-footerBg text-link py-2 pr-7 pl-2'>
              <ExclamationCircleIcon width={24} height={24} />
              <p className='text-sm font-normal ml-2'>
                Only 10 units are available!
              </p>
            </div>
          </section>
          <section className='flex flex-col w-1/2 space-y-5'>
            <Button
              href='#'
              title='Add to Cart'
              buttonStyle='border border-primary text-primary text-sm font-semibold bg-white hover:bg-secondary hover:border-secondary py-3'
            />
            <Button
              href='#'
              title='Buy it now'
              buttonStyle='border border-primary text-white text-sm font-normal bg-primary hover:text-primary hover:bg-secondary hover:border-secondary py-3'
            />
          </section>
          <section className='flex flex-col space-y-5 my-5'>
            <p className='text-link font-bold text-sm'>
              <span className='rounded-sm border-b-2 border-link'>
                Description
              </span>
            </p>
            <p>This is a demonstration store.</p>
            <p>
              If you've been hunting for a new addition to your home, it's here.
              Designed to beautifully fit any space it's in, and guaranteed to
              be the highlight in your home.{' '}
            </p>
          </section>
        </div>
      </div>

      <FooterBadgesSection />

      <section className='flex flex-col px-4% py-4%'>
        <h1 className='text-primary text-3xl font-bold mb-3'>
          Customer Reviews
        </h1>
        <div className='flex flex-row justify-between items-center'>
          <div className='flex flex-row'>
            <ReviewStars starCount={3} size={24} />
            <p className='text-base font-normal ml-2'>Based on 1 review</p>
          </div>
          <p
            onClick={createNewReview}
            className='text-base text-link font-normal cursor-pointer'>
            Write a Review
          </p>
        </div>
        <hr className='mt-6' />
        {state.isNewReview && (
          <>
            <ProductReviewForm
              onSubmit={() =>
                setState({ ...state, isNewReview: !state.isNewReview })
              }
            />
            <hr className='mt-6' />
          </>
        )}
        <CustomerReview
          title={'Such an incredible product'}
          rating={3}
          reviewer='Jim Sample Reviewer'
          reviewDate={reviewDate}
          review='I was so incredibly thrilled with the quality of this product. Not only
          did it come exactly as it was shown and described, delivery was
          effortless. I would absolutely buy from this shop again!'
        />
        <CustomerReview
          title={'Such an incredible product'}
          rating={3}
          reviewer='Jim Sample Reviewer'
          reviewDate={reviewDate}
          review='I was so incredibly thrilled with the quality of this product. Not only
          did it come exactly as it was shown and described, delivery was
          effortless. I would absolutely buy from this shop again!'
        />
        <CustomerReview
          title={'Such an incredible product'}
          rating={3}
          reviewer='Jim Sample Reviewer'
          reviewDate={reviewDate}
          review='I was so incredibly thrilled with the quality of this product. Not only
          did it come exactly as it was shown and described, delivery was
          effortless. I would absolutely buy from this shop again!'
        />
      </section>
      <section className='grid grid-cols-2 w-full'>
        <article className='col-start-1 text-center my-auto'>
          <h1 className='text-3xl text-primary font-bold mb-2'>
            Unique Brand Feature
          </h1>
          <h2 className='text-primary text-xl font-medium italic mb-2'>
            Feature subtitle
          </h2>
          <h3 className='text-primary text-base mb-2'>Feature Subheading</h3>
        </article>
        <Image className='col-start-2' layout='responsive' src={description1} />

        <Image className='col-start-1' layout='responsive' src={description2} />
        <article className='col-start-2 text-center my-auto'>
          <h1 className='text-3xl text-primary font-bold mb-2'>
            Unique Brand Feature
          </h1>
          <h2 className='text-primary text-xl font-medium italic mb-2'>
            Feature subtitle
          </h2>
          <h3 className='text-primary text-base mb-2'>Feature Subheading</h3>
        </article>
      </section>
      <h1 className='text-center text-3xl text-primary font-bold mb-4 mt-11'>
        Related Products
      </h1>
      <div className='flex flex-row w-full py-5 px-10'>
        <Carousel
          showEmptySlots
          renderPagination={() => {
            return <></>;
          }}
          renderArrow={CarouselArrow}
          itemsToScroll={2}
          itemsToShow={4}
          itemPadding={[0, 15, 0, 15]}>
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
          <CarouselItem
            name={'Yellow Chair'}
            image={yellowChair}
            onSale={true}
            price={800}
            reviews={1}
            starCount={4}
          />
        </Carousel>
      </div>
    </Screen>
  );
}

export default Product;
