import Link from 'next/link';

import Accessories from '../public/images/Shop_Accessories.jpg';
import Architectural from '../public/images/Shop_DelicateStructure.jpg'
import Decorative from '../public/images/Shop_DecorativeObjects.jpg'
import Furniture from '../public/images/Shop_LivingRooms.jpg'
import Lightning from '../public/images/Shop_Lighting.jpg'
import Sitting from '../public/images/Shop_SittingArea-Furniture.jpg'
import Shopp from '../components/Shopp';

import Screen from '../components/Screen';

import React from 'react'

const Shop = (props) => {
    return (
        <Screen>
            <div className="mt-16 mb-10">
                  <div className='grid auto-cols-auto auto-rows-min gap-4 px-4%'>
        <Link href='/'>
          <div className='relative row-start-1  col-start-1 row-span-2 col-span-4 place-items-center cursor-pointer group'>
           <Shopp
             name="Accessories"
             image={Accessories}
             />
           </div>
          
        </Link>

        <Link href='/'>
          <div className='relative col-start-5 row-start-1 row-span-2 col-span-4 place-items-center cursor-pointer group'>
          <Shopp
             name="Architectural Photography"
             image={Architectural}
             />
          </div>
          
        </Link>

        <Link href='/'>
          <div className='relative col-start-9 row-start-1 row-span-2 col-span-4 place-items-center cursor-pointer group'>
          <Shopp
             name="Decorative Objects"
             image={Decorative}
             />
          </div>
        </Link>

        <Link href='/'>
          <div className='relative row-start-5  col-start-1 row-span-2 col-span-4 place-items-center cursor-pointer group'>
          <Shopp
             name="Furniture"
             image={Furniture}
             />
          </div>
        </Link>

        <Link href='/'>
          <div className='relative col-start-5 row-start-5 row-span-2 col-span-4 place-items-center cursor-pointer group'>
          <Shopp
             name="Lightning"
             image={Lightning}
             />
          </div>
         </Link>

        <Link href='/'>
          <div className='relative col-start-9 row-start-5 row-span-2 col-span-4 place-items-center cursor-pointer group'>
          <Shopp
             name="Sitting area Furniture"
             image={Sitting}
             />
          </div>
         </Link>
        
         </div>
        </div>
        </Screen>
    )
}

export default Shop
