import React from 'react'
import Sitting from '../public/images/Shop_SittingArea-Furniture.jpg';
import WhiteLeatherChair from '../public/images/White Leather Chair.jpg'
import couch from '../public/images/Rounded Modern Couch.jpg' 
import Lounge from '../public/images/Leather Metal Lounge.jpg'
import SideChair from '../public/images/Molded Plastic Side Chair.jpg'
import CategoryPage from '../components/CategoryPage';

const SittingAreaP = () => {
    return (
        <div>
            <CategoryPage image={Sitting} image1={WhiteLeatherChair} image2={couch} image3={Lounge} image4={SideChair} 
                       name="Sitting Area Furniture" name1="White Leather Chair" name2="Rounded Modern Couch" name3="Leather Metal Lounge" name4="Molded Plastic Side Chair" 
                       text="Sitting Area Furniture"
                       Description="Informal, cozy and beautifully modern lounge furniture."
                       />
        </div>
    )
}

export default SittingAreaP
