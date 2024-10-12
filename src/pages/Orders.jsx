import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'

const Orders = () => {
  const { products, currency } = useContext(ShopContext)

  const orders = products.slice(1, 4)

  return (<>

    <div className='text-xl'>
      <Title text1={"MY"} text2={"ORDERS"} />
    </div>

    <div>
      {orders.map((item, index) => (

        <div key={index} className='border-b-2 m-3 w-full h-28 flex justify-between'>
          <div className=' h-full flex gap-4'>
            <img className='m-1 sm:w-24 w-12 h-full ' src={item.image[0]} alt="" />
            <div className='flex flex-col gap-3'>
              <h1 className='sm:text-sm text-xs  w-32 sm:w-60' >{item.name}</h1>
              <div className=' gap-4  flex flex-col sm:flex-row'>
                <p className='text-green-700'>{currency}{item.price}</p>
                <h1 className='bg-slate-600 text-black w-fit px-2  rounded-md'>{item.sizes[0]}</h1>
              </div>
            </div> 
          </div>
          <div className='flex flex-col justify-center items-center max-w-10 sm:max-w-20'>
            <h1 className=' p-1 sm:px-2'  >dilivered</h1>
          </div>
          <div className='flex justify-center items-center'>
            <div className='flex justify-center bg-black text-white h-fit w-fit py-0.5 px-2 rounded-md '>
              <p className='text-xs sm:text-lg'   > track Now</p>

            </div>

          </div>

        </div>

      ))


      }

    </div>

  </>
  )
}

export default Orders
