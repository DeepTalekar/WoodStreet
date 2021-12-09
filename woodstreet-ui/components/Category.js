import React from 'react'
import Image from 'next/image'
import Button from '../components/Button';

const Category = (props) => {
    return (
        <div ><Image className="hover:scale-105 transform-gpu transition-all duration-300 ease-out" src={props.image} alt={props.name} layout='responsive'/>
        <h1 className="text-2xl font-bold py-2">{props.name}</h1>
        <p className="py-1">Price: Rs200</p> 
        <Button href='' title='Add To cart'
         buttonStyle='border border-primary text-primary text-sm font-semibold bg-white hover:bg-secondary hover:border-secondary py-3'/> </div>
    )
}

export default Category
