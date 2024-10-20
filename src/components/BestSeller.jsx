import React , {useState , useContext , useEffect} from 'react'
import {ShopContext}  from '../context/ShopContext'
import ProductItem from './ProductItem';

const BestSeller = () => {
  const {products ,currency} = useContext(ShopContext);
  const [bestseller , setBestseller] = useState([])

   
  useEffect(()=>{
    const bestProducts = products.filter((item)=>(item.bestseller))
    setBestseller(bestProducts.slice(0,4))
  },[products])

  return (

    <div className='my-10 flex flex-col justify-center items-center gap-3'>
    <div className='flex flex-row items-center gap-2 ' >
         <div className='h-[2px] w-8 bg-slate-800 flex '></div>
         <p className='sm:text-3xl text-xl text-gray-700 text-center' > BEST <span className='text-gray-950' >SELLERS</span> </p>
   </div>
   <div>
     <p className='sm:text-lg text:sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda cumque esse soluta.</p>
   </div>

   <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4'>
       {
        bestseller.map((item,index) =>( <ProductItem key={index} id={item._id}  img={item.image} name={item.name} price={item.price} currency={currency}/>) )
       }
   </div>
</div>
  )
}

export default BestSeller
