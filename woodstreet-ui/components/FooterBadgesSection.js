/*
  @author Deep
  @contributor 
*/

import {
  PhoneIcon,
  RefreshIcon,
  ThumbUpIcon,
  UserGroupIcon,
} from '@heroicons/react/outline';

import FooterBadges from './FooterBadges';

const footerBadges = [
  {
    icon: <ThumbUpIcon className='text-white' width={30} height={30} />,
    title: 'Statisfaction Guaranteed',
  },
  {
    icon: <UserGroupIcon className='text-white' width={30} height={30} />,
    title: 'Loyalty Program',
  },
  {
    icon: <RefreshIcon className='text-white' width={30} height={30} />,
    title: 'Free Shipping & Returns',
  },
  {
    icon: <PhoneIcon className='text-white' width={30} height={30} />,
    title: 'Phone Support',
  },
];

export default function FooterBadgesSection(props) {
  const renderFooterBadges = () =>
    footerBadges.map((badge, index) => (
      <FooterBadges key={index} icon={badge.icon} title={badge.title} />
    ));
  return (
    <div className='flex flex-row justify-evenly w-full py-16 px-10 bg-porcelain'>
      {renderFooterBadges()}
    </div>
  );
}
