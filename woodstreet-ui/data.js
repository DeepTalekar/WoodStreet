import yellowChair from '../woodstreet-ui/public/images/products/yellowChair.webp';
export const products = [
  {
    _id: '1',
    name: 'Yellow Chair',
    images: [yellowChair],
    description:
      'Modern Single Seat Corner Sofa Design Single Sofa with Armrests Bed Living Furniture Pink Couch Lazy Sofa',
    category: 'MD/LIVING',
    catalouge: '', // an image will also be fine or something else
    onSale: true,
    discountPrice: 6199.99,
    price: 6699.99,
    countInStock: 5,
    avgRating: 5,
    reviews: [
      {
        rating: 5,
        title: 'Such an incredible product',
        timeStamp: new Date(2017, 0, 9).toString(),
        reviewer: 'Jim',
        description:
          'I was so incredibly thrilled with the quality of this product. Not only did it come exactly as it was shown and described, delivery was effortless. I would absolutely buy from this shop again!',
      },
      {
        rating: 5,
        title: 'An Incredible Product',
        timeStamp: new Date(2017, 0, 11).toString(),
        reviewer: 'Sophia',
        description:
          'I was so incredibly thrilled with the quality of this product. Not only did it come exactly as it was shown and described, delivery was effortless. I would absolutely buy from this shop again!',
      },
    ],
  },
];
