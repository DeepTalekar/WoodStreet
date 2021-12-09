import React from 'react'

import Image from 'next/image';
import Screen from '../components/Screen';
import Category from '../components/Category';

const CategoryPage = (props) => {
    return (
        <Screen title={props.text}>
            <Image
             className='w-full h-350'
             objectFit='cover'
             height={200}
             layout='responsive'
             src={props.image}
             alt={props.name}
            /> 
            <div className="my-20 mx-10">
                <h1 className="text-4xl font-bold">{props.text}</h1>
                <p className="mt-2">{props.Description} </p>
                <div className="grid grid-cols-3 gap-16  my-16 ">
                  <Category image={props.image1} name={props.name1}/>
                  <Category image={props.image2} name={props.name2} />
                  <Category image={props.image3} name={props.name3} />
                  <Category image={props.image4} name={props.name4} />
                 
                  
                </div>
            </div>
        </Screen>
    )
}

export default CategoryPage
