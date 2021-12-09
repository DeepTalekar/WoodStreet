import React from 'react'
import Architectural from '../public/images/Shop_DelicateStructure.jpg';
import Delicate1 from '../public/images/Delicate_Structure_1.jpg'
import Delicate2 from '../public/images/Delicate_Structure_2.jpg'
import portal from '../public/images/Portal.jpg'
import Sharp_Edges from '../public/images/Sharp_Edges.jpg'
import CategoryPage from '../components/CategoryPage';

const Architectural_Photography = () => {
    return (
        <div>
             <CategoryPage image={Architectural} image1={Delicate1} image2={Delicate2} image3={portal} image4={Sharp_Edges} 
                       name="Architectural Photography" name1="Delicate Structure 1" name2="Delicate Structure 2" name3="Portal" name4="Sharp Edges" 
                       text="Architectural Photography"
                       Description=""
                       />
        </div>
    )
}

export default Architectural_Photography
