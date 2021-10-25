import React from 'react'
import CategoryPage from '../components/CategoryPage';
import Furniture from '../public/images/Shop_LivingRooms.jpg';
import YellowChair from '../public/images/Yellow Chair.jpg'
import GreenChair from '../public/images/Green Chair.jpg'
import WoodenChair from '../public/images/Slatted Wooden Chair.jpg'
import Sofa from '../public/images/Rugged Sofa.jpg'

const FurniturePage = () => {
    return (
        <div>
            <CategoryPage image={Furniture} image1={YellowChair} image2={GreenChair} image3={WoodenChair} image4={Sofa} 
                       name="Furniture" name1="Yellow Chair" name2="Green chair" name3="Wooden Chair" name4="Rugged Sofa" 
                       text="Furniture"
                       Description="Iconic, comfortable, modern furniture."
                       />
        </div>
    )
}

export default FurniturePage
