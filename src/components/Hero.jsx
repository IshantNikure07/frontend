import React from 'react'
import {assets} from '../assets/frontend_assets/assets'

const Hero = () => {
  return (
    <div className=' w-full  border relative border-gray-500 flex flex-col sm:flex-row '>
      {/* left side */}
      <div className='flex sm:w-1/2  w-full h- justify-center items-center '>
        <div className='flex flex-col text-left sm:gap-2 py-16 sm:p-0'>
            <div className='flex flex-row items-center gap-2' >
              <div className='h-[2px] w-8 bg-slate-800 flex '></div>
              <p className='sm:text-lg text-xs text-center' > OUR BEST SELLERS</p>
            </div>

            <div className='text-3xl sm:text-5xl'>Latest Arrivals</div>

            <div className='flex flex-row items-center gap-2' >
              <p className='sm:text-lg text-xs text-center' > SHOP NOW</p>
              <div className='h-[2px] w-8 bg-slate-800 flex '></div>
            </div>
        </div>
      </div>

      {/* right side */}
      <div className='w-full sm:w-1/2 flex justify-center items-center shrink-0 '>
      <img className='flex items-center overflow-hidden object-cover  ' src={assets.hero_img} alt="" />

       </div>


      
    </div>
  )
}

export default Hero
