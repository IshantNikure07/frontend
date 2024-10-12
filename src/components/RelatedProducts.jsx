import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const RelatedProducts = ({category , subcategory}) => {
   const {products , currency} = useContext(ShopContext)
   const [related , setRelated]= useState([])

   useEffect(()=>{
    if (products.length > 0){
        let productCopy = products.slice()

       productCopy = productCopy.filter((item)=>category === item.category)
       productCopy = productCopy.filter((item)=>subcategory === item.subCategory)

      setRelated(productCopy.slice(0,5))
    }

       },[products])


  return (
    < >
    
   

    <div className='flex flex-row items-center gap-2 mt-10 ml-4' >
         <div className='h-[2px] w-8 bg-slate-800 flex '></div>
         <p className='sm:text-3xl text-xl text-gray-700 text-center' > RELATED <span className='text-gray-950' >PRODUCTS</span> </p>
   </div>



    <div className=' grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5'>
      {related.map((item , index)=>(
        <ProductItem key={index} id={item._id}  img={item.image} name={item.name} price={item.price} currency={currency} />
      ))}
    </div>
    </>
    
  )
}

export default RelatedProducts
