import React from 'react'
import CategoryPage from '../components/CategoryPage';
import Stapler from '../public/images/Golden Stapler.jpg'
import Frame from  '../public/images/Frame.jpg'
import Globe from '../public/images/Globe.jpg'
import Plants from '../public/images/Plants.jpg'
import Accessories from '../public/images/Shop_Accessories.jpg';

const Accessoriespage = () => {
    return (
       <div>
         <CategoryPage image={Accessories} image1={Stapler} image2={Frame} image3={Globe} image4={Plants} 
                       name="Accessories" name1="Golden Stapler" name2="Frame" name3="Globe" name4="Plants" 
                       text="Accessories"
                       Description="Beautiful accessories for your home. From found-objects to practical and beautiful statement pieces."
                       />
        
       </div>
    )
}
export default Accessoriespage
