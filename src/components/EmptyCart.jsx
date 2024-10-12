import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const EmptyCart = () => {
  return (
    <div className=' '>
            <div className='w-full flex flex-col  justify-center items-center z-[-1] gap-1   '>
              <div className='sm:w-[30%] sm:h-[30%] h-[10rem] object-cover flex justify-center items-center  overflow-hidden '>

                     < img  className='' src={assets.emptycart} alt="load" />
              </div>
              <h1 className='text-2xl sm:text-3xl font-bold  ' > !Oops Cart Is Empty</h1>
            <div className=' bg-black text-white rounded-md p-3 mt-10 sm:m-0 '>
                <a href='/collection' className=' '>Shop Now</a>
            </div>
     </div>

    </div>

  )
}

export default EmptyCart
