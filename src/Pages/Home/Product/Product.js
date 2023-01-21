import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid'

const Product = ({product}) => {
    const{picture,name,price}=product;
    return (
        <div className='card border h-auto p-8 rounded-lg  hover:shadow-xl cursor-pointer bg-base-100'>
            <div className='bg-[#F3F3F3] flex items-center justify-center rounded-lg   h-3/4'>
                <img className='w-40 py-8 mx-auto' src={picture} alt="" />
            </div>
            <div className='flex justify-center pt-8'>
            <StarIcon className="h-5 w-5  text-[#FF912C]"/>
            <StarIcon className="h-5 w-5  text-[#FF912C]"/>
            <StarIcon className="h-5 w-5  text-[#FF912C]"/>
            <StarIcon className="h-5 w-5  text-[#FF912C]"/>
            <StarIcon className="h-5 w-5  text-[#FF912C]"/>
            </div>
            <div className=''>
                <h2 className='text-[#444444] my-3 font-bold text-2xl text-center'>{name}</h2>
                <p className='font-semibold text-xl text-[#FF3811] text-center'>${price}</p>
            </div>
        </div>
    );
};

export default Product;