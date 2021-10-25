/*
  @author Aarya
  @contributor Deep
*/

import Accessories from '../public/images/Shop_Accessories.jpg';
import Architectural from '../public/images/Shop_DelicateStructure.jpg';
import Decorative from '../public/images/Shop_DecorativeObjects.jpg';
import Furniture from '../public/images/Shop_LivingRooms.jpg';
import Lightning from '../public/images/Shop_Lighting.jpg';
import Sitting from '../public/images/Shop_SittingArea-Furniture.jpg';
import ShopCategories from '../components/ShopCategories';

import Screen from '../components/Screen';

const Shop = (props) => {
  return (
    <Screen title='Collection | WoodStreet'>
      <div className='bg-footerBg pt-16 pb-10'>
        <p className='text-primary text-3xl font-bold text-center mb-6'>
          Shop by collection
        </p>
        <div className='grid grid-cols-9 auto-rows-min gap-7 px-4%'>
          <div className='relative row-start-1 col-start-1 row-span-3 col-span-3 place-items-center cursor-pointer group'>
            <ShopCategories name='Accessories' image={Accessories} href='/Accessoriespage' />
          </div>

          <div className='relative col-start-4 row-start-1 row-span-3 col-span-3 place-items-center cursor-pointer group'>
            <ShopCategories
              name='Architectural Photography'
              image={Architectural}
              href='/Architectural_Photography'
            />
          </div>

          <div className='relative col-start-7 row-start-1 row-span-3 col-span-3 place-items-center cursor-pointer group'>
            <ShopCategories
              name='Decorative Objects'
              image={Decorative}
              href='/DecorativePages'
            />
          </div>

          <div className='relative row-start-4  col-start-1 row-span-3 col-span-3 place-items-center cursor-pointer group'>
            <ShopCategories name='Furniture' image={Furniture} href='/FurniturePage' />
          </div>

          <div className='relative col-start-4 row-start-4 row-span-3 col-span-3 place-items-center cursor-pointer group'>
            <ShopCategories name='Lighting' image={Lightning} href='/LightningP' />
          </div>

          <div className='relative col-start-7 row-start-4 row-span-3 col-span-3 place-items-center cursor-pointer group'>
            <ShopCategories
              name='Sitting Area Furniture'
              image={Sitting}
              href='/SittingAreaP'
            />
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default Shop;
