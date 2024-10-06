import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex  flex-col sm:flex-row gap-y-20 sm:gap-2 justify-around mb-20'>
        <div className='flex flex-col items-center gap-4'> 
            <img className='items-center' src={assets.exchange_icon} alt="" />
            <div className=' text-center space-y-2'>
            <p className='text-lg font-semibold'>Easy exchange policy</p>
            <p className=''>We offer hassel free exchange policy to customer</p>

            </div>
        </div>
        <div className='flex flex-col items-center gap-4'> 
            <img className='items-center' src={assets.exchange_icon} alt="" />
            <div className=' text-center space-y-2'>
            <p className='text-lg font-semibold'>7 days return policy</p>
            <p className=''>we provide 7days free return policy</p>

            </div>
        </div>
        <div className='flex flex-col items-center gap-4'> 
            <img className='items-center' src={assets.exchange_icon} alt="" />
            <div className=' text-center space-y-2'>
            <p className='text-lg font-semibold'>Best customer support</p>
            <p className=''>we offers 24/7 customer support</p>

            </div>
        </div>
      
    </div>
  )
}

export default OurPolicy
