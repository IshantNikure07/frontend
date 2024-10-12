import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const CartTotal =  () => {
   
    const {currency , getTotal , delivery_fee} = useContext(ShopContext)

  return  (
    <div className='  w-full sm:w-[40%] absolute pr-10   items-end  '>
    <div className='flex text-left border-b mb-3'>
         {/* <h1 className='text-xl m-3' >Order Summary</h1> */}
         <Title text1={"ORDER"} text2={"SUMMERY"} />
          
    </div>

    <div className='flex flex-col gap-2'>
         <div className='flex gap-5 justify-between mx-3'>
             <h1 className='text-sm sm:text-lg font-medium '>Sub Total</h1>
             <p className='text-green-600 '>{currency} {getTotal()}.00</p>
         </div>
         <div className='flex gap-5 justify-between mx-2' >
             <h1 className='text-sm sm:text-lg font-medium '>Delivery fee</h1>
             <p className='text-green-600'>{currency} {getTotal() === 0 ? 0 : delivery_fee}.00</p>
         </div>
         <div className=' flex gap-5 justify-between mx-2'>
             <h1 className='text-sm sm:text-lg font-medium '>Total</h1>
             <p className='text-green-600'>{currency} {  getTotal() === 0 ? 0 : getTotal() + delivery_fee}.00</p>
         </div>
    </div>
    
         
    
 </div>
  )
}

export default CartTotal
