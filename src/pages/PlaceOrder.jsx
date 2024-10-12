import React, { useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'

const PlaceOrder = () => {
    const [method , setMethod] = useState('cod')

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-[80vh] border-t'>
      {/* left side */}
        <div className='flex flex-col gap-3 w-full sm:max-w-[380px]  '>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={"DELIVERY"} text2={"ADDRESS"} />
          </div>
          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name ' />
          </div>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street ' />
          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State ' />
          </div>
          <div className='flex gap-3'>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zip code' />
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
          </div>
            <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' />
           
        </div>

        <div className='mt-8 flex flex-col items-start '>
            
            <div className='my-8 min-w-80 h-28 '>
               <CartTotal/>
            </div>
            <div className='mt-12 xl:right-52 w-full space-y-10'>
               <Title text1={"Payment"} text2={"Method"}/> 
               <div className='flex gap-3 justify-between flex-row '>

                     <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 mx-3 cursor-pointer'>
                         <p className={`min-w-3.5 h-3.5 border ${method === "stripe" ? 'bg-green-600' : ''} rounded-full`} ></p>
                         <img className='h-5 mx-5' src={assets.stripe_logo} alt="" />
                     </div>
                     <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 mx-3 cursor-pointer'>
                         <p className={`min-w-3.5 h-3.5 border ${method === "razorpay" ? 'bg-green-600' : ''} rounded-full`} ></p>
                         <img className='h-5 mx-5' src={assets.razorpay_logo} alt="" />
                     </div>
                     <div onClick={()=>setMethod('cod') } className='flex items-center gap-3  border p-2 mx-3 cursor-pointer'>
                         <p className={`min-w-3.5 h-3.5 border ${method === "cod" ? 'bg-green-600' : ''} rounded-full`} ></p>
                         <p className='text-gray-500 text-sm font-medium  mx-' >COD</p>
                     </div>

               </div>
            </div>
            <div className='w-full flex justify-end '>
                 <div className=' bg-black text-white rounded-md p-2 mt-20 sm:m-2 '>
                           <a href='/orders' className=' '>My Orders</a>
                 </div>
            </div>

        </div>
    </div>
  )
}

export default PlaceOrder
