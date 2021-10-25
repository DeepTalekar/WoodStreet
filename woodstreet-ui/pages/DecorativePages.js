import React from 'react'
import Pillow from '../public/images/Pillow.jpg'
import CheekyPlant from '../public/images/Cheeky Plant.jpg'
import Antlers from '../public/images/Wall Antlers.jpg'
import Basket from '../public/images/Metal-Basket-of-Firewood.jpg'
import Decorative from '../public/images/Shop_DecorativeObjects.jpg';
import CategoryPage from '../components/CategoryPage'

const DecorativePages = () => {
    return (
        <div>
             <CategoryPage image={Decorative} image1={Pillow} image2={CheekyPlant} image3={Antlers} image4={Basket} 
                       name="Decorative Object" name1="Pillow" name2="Cheeky Plant" name3="Antlers" name4="Stack o Wood" 
                       text="Decorative Object"
                       Description="Small accents and touches for any room in your home."
                       />
        </div>
    )
}

export default DecorativePages
