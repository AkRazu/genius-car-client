import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products,setProducts]= useState([]);
    useEffect(()=>{
        fetch('Products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div>
            <div>
                <p className='text-center font-bold text-xl text-orange-600'>Popular Products</p>
                <h1 className='font-bold text-center
                text-[#151515] text-5xl my-5'>Browse Our Products</h1>
                
                <p className='text-center capitalize text-[#737373] mb-12'>the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 md:grid-cols-3 grid-cols-1 my-12'>
                {
                    products.map(product=><Product key={product._id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Products;