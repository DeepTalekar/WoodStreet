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

import { products } from '../../data';

function Product(props) {
  const carouselRef = useRef(null);

  const [state, setState] = useState({
    isNewReview: false,
  });

  const createNewReview = () => {
    setState({ ...state, isNewReview: !state.isNewReview });
  };

  const data = props.data[0];

  console.log('DATA: ', data);

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
          src={data.images[0]}
        />
      );
      images.push(element);
    }
    return images;
  };

  const renderAllReviews = () => {
    const reviews = data.reviews.map((review, index) => {
      return (
        <CustomerReview
          key={review.timeStamp}
          title={review.title}
          rating={review.rating}
          reviewer={review.reviewer}
          reviewDate={new Date(review.timeStamp)}
          review={review.description}
        />
      );
    });

    return reviews;
  };

  return (
    <Screen title={`${data.name} | WoodStreet`}>
      <div className='grid grid-cols-2 gap-x-14 px-4% py-16'>
        <div className='relative col-start-1'>
          <div className=' absolute top-3 left-4 z-10'>
            <ProductBadge
              onSale={!!data?.discountPrice && data?.onSale ? true : false}
            />
          </div>
          <div className='w-full'>
            <Carousel
              ref={carouselRef}
              itemsToShow={1}
              renderArrow={CarouselArrow}
              renderPagination={() => <></>}>
              <Image height={720} width={720} src={data.images[0]} />
              <Image height={720} width={720} src={data.images[0]} />
              <Image height={720} width={720} src={data.images[0]} />
              <Image height={720} width={720} src={data.images[0]} />
            </Carousel>
          </div>
          <section className='flex flex-row justify-center items-start mt-7'>
            {renderAllProductImages()}
          </section>
        </div>
        <div className='col-start-2 '>
          <h1 className='text-primary text-4xl font-bold mb-3'>{data.name}</h1>
          <section className='flex flex-row justify-start items-center mb-5'>
            <ReviewStars starCount={data.avgRating} />
            <span className='text-primary font-normal text-sm ml-1'>
              {data.reviews.length != 0 ? data.reviews.length : 'No'}{' '}
              {data.reviews.length > 1 ? 'reviews' : 'review'}
            </span>
          </section>
          <div className='flex flex-row justify-start items-start mb-5'>
            <Link href='#'>
              <a className='text-primary text-sm font-bold hover:text-link mr-2'>
                {data.category}
              </a>
            </Link>
          </div>
          <section className='flex flex-row mb-3'>
            <p className={`font-semibold text-xl text-link pr-3 `}>
              ₹ {data.discountPrice}
            </p>
            <p className='font-semibold text-xl text-primary text-opacity-60 line-through'>
              ₹ {data.price}
            </p>
          </section>
          <section className='flex flex-col justify-start items-start space-y-3'>
            <p className='text-primary text-sm font-bold'>Quantity</p>
            <Counter />
          </section>
          {data.countInStock <= 10 && (
            <section className='flex flex-row justify-start items-center my-5'>
              <div className='flex flex-row rounded-lg bg-footerBg text-link py-2 pr-7 pl-2'>
                <ExclamationCircleIcon width={24} height={24} />
                <p className='text-sm font-normal ml-2'>
                  Only {data.countInStock} units are available!
                </p>
              </div>
            </section>
          )}
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
            <p>{data.description}</p>
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
          {data.reviews.length > 0 && (
            <div className='flex flex-row'>
              <ReviewStars starCount={data.avgRating} size={24} />
              <p className='text-base font-normal ml-2'>
                Based on {data.reviews.length}{' '}
                {data.reviews.length > 1 ? 'reviews' : 'review'}
              </p>
            </div>
          )}
          {data.reviews.length == 0 && (
            <p className='text-base font-normal ml-2'>No reviews yet</p>
          )}
          <p
            onClick={createNewReview}
            className='text-base text-link font-normal cursor-pointer'>
            Write a Review
          </p>
        </div>
        {data.reviews.length != 0 && <hr className='mt-6' />}
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
        {renderAllReviews()}
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

export async function getServerSideProps(context) {
  console.log('Context: ', context.params);
  const currentProduct = products.filter(
    (product) => product._id == context.params.id
  );

  console.log('Product --> ', currentProduct);

  if (currentProduct === undefined || currentProduct.length === 0)
    return { notFound: true };

  return {
    props: { data: currentProduct },
  };
}

export default Product;
