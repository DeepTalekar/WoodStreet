import React from 'react'
import CategoryPage from '../components/CategoryPage'
import Lightning from '../public/images/Shop_Lighting.jpg';
import TableLamp from '../public/images/LilBuddy1.jpg'
import TableLamp1 from '../public/images/LilBuddyTableLamp2.jpg'
import Pendant from '../public/images/ModernPendant.jpg'
import WoodenPendant from '../public/images/WoodFormedPolyPendant.jpg'


const LightningP = () => {
    return (
        <div>
            <CategoryPage image={Lightning} image1={TableLamp} image2={TableLamp1} image3={Pendant} image4={WoodenPendant} 
                       name="Lightning" name1="Lil' Buddy Table Lamp" name2="Lil' Buddy #2 Table Lamp" name3="Modern Pendant" name4="Wood Formed Poly Pendant" 
                       text="Lightning"
                       Description="Pendants, floor lamps, and table lights."
                       />
        </div>
    )
}

export default LightningP
