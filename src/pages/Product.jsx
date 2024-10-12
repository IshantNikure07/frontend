import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import {assets} from '../assets/frontend_assets/assets'
import ProductItem from '../components/ProductItem';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const [productdata , setProductdata] = useState(false);
  const [size , setSize] = useState('')
  const {products , currency , addToCart} = useContext(ShopContext)
  const {productId} = useParams()
  const [similarproduct , setSimilarproduct] = useState([])


  const fetchdata = async ()=>{
    products.map((item)=>{
      if (item._id === productId){
        setProductdata(item)
        return null}
    })
  }
 
   


  useEffect(()=>{
    fetchdata()
  } , [productId , products])

 
 


  return ( productdata ?
    <div className='mt-6 border-b pb-10'>
        <div className='flex flex-col justify-around sm:flex-row w-full h-auto '>
            {/* left side */}
            <div className='leftside h-[80%] w-full  sm:w-[45%]  lg:w-[34%] m-2'>
              <img className='w-full h-full rounded-md' src={productdata.image} alt="" />
            </div>

            {/* right side */}
            <div className='rightside w-full sm:w-[50%] space-y-7  '>
                <div className="space-y-6 ">
                        <h1 className="text-lg font-bold tracking-tight text-black sm:text-2xl my-3">{productdata.name}</h1>
                        <div className=" flex h-5 ">
                          <img src={assets.star_icon} alt="" />
                          <img src={assets.star_icon} alt="" />
                          <img src={assets.star_icon} alt="" />
                          <img src={assets.star_icon} alt="" />
                          <img src={assets.star_dull_icon} alt="" />
                          <h2 className='ml-4 flex items-center text-sm'>(1432 reviews)</h2>
                        </div>
                        <p className='text-sm' >{productdata.description}</p>
                </div>

                {/* rate */}
                <div className=' text-xl'>
                  <p className='text-green-500'>{currency} {productdata.price}</p>
                </div>
              
              {/* sizes */}
                <div className='sizes flex flex-col gap-3'>
                  <p className='font-medium'>Select size</p>
                  <div className='flex gap-2 my-2'>
                    { productdata.sizes?.map((item , index) =>(
                      <button onClick={()=> setSize(item)} key={index} className={`bg-slate-400 font-bold p-3 m-1 rounded-full w-12 border border-opacity-0 border-black text-center text-black ${item === size ? 'border-opacity-100 ' : ''} `}  > {item}</button>
                    ))}
                  </div>
                </div>

                <div>
                <button onClick={()=>addToCart(productdata._id , size)} className='px-6 py-2 bg-teal-600 text-black border  flex justify-center items-center rounded-md'>
                  Add to cart
                </button>
                </div>
              
            </div>
        </div>
           <div>
           <div className='w-full h-96 border-t border-b '>
                <button className='px-6 py-2  text-black flex justify-center font-medium items-center rounded-md '>REVIEWS</button>
                <p className=' text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error harum, laudantium deleniti impedit cupiditate iure mollitia non sit accusantium, beatae modi esse earum quidem temporibus nisi est doloribus repellendus, rerum doloremque magnam incidunt sunt quo. Vel nemo, voluptate eveniet quia id magnam aperiam blanditiis corporis?</p></div>
           </div>

           <div>
           <RelatedProducts category={productdata.category}  subcategory={productdata.subCategory}/>
           </div>
    </div>

    : <div className='opacity-0'></div>
    
  )
}

export default Product
