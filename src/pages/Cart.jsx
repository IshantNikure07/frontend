import React, { useContext, useEffect , useState } from 'react'
import Title  from '../components/Title'
import {ShopContext} from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import CartTotal from '../components/CartTotal'
import EmptyCart from '../components/EmptyCart'


const Cart = () => {
  const [myCartData , setMyCartData]= useState([])
  const {products , cartItems ,currency , updateQuantity ,updateCart, navigate} = useContext(ShopContext)

  useEffect(()=>{
    if (products.length > 0) {
      const tempData = []
    for(const items in cartItems ){
            for(const item in cartItems[items]){
               if (cartItems[items][item] > 0){
                   tempData.push({
                    _id:items,
                    size:item,
                    quantity:cartItems[items][item]
                   })
               }
            }}
            setMyCartData(tempData)}
   
   
  },[cartItems , products])


  return (
    <div>
          <div className='text-2xl'>

          <Title text1={"MY"} text2={"CART"} />
          </div>
      <div>{
        myCartData.map((item,index)=>{
          const productData = products.find((product)=>item._id === product._id);

          return( 
            <div key={index} className='border-b-2 m-3 w-full h-28 flex justify-between '>
                <div className='w-38 h-full flex gap-4'>
                    <img className='m-1 w-26 h- ' src={productData.image} alt="" />
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-sm sm:lg' >{productData.name}</h1>
                          <div className='flex gap-4'>
                          <p className='text-green-700'>{currency} {productData.price}</p>
                                <h1 className='bg-slate-600 text-black w-fit px-2  rounded-md'>{item.size}</h1>
                          </div>
                        </div>
              </div>
                <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id ,item.size , Number(e.target.value))} className='border max-w-1 sm:max-w-20 p-1 h-7 sm:px-0 ' type='number' min={1} defaultValue={item.quantity}/>
              
              <div className='flex justify-center items-start sm:items-center'>
              <img onClick={()=>updateCart( item._id,item.size, 0)} className='w-5  h-5 ' src={assets.bin_icon} alt="" />

              </div>
                
            </div>
          )
          
        })
        }
      </div>

      <div className='w-full sm:m-2  relative'>
        <div>

        { myCartData.length > 0 ? <div className='space-y-5' >
          <div className='flex justify-end  '>
            <CartTotal/>
          </div>
          
           {/* Proceed Button */}
           <div className='flex justify-center items-center absolute right-0 bottom-[-13rem] sm:bottom-[-14rem]'>
              <button 
                onClick={() => navigate('/placeorder')} 
                className='bg-black rounded-md text-white py-1 px-3 w-28 flex justify-center'
              >
                Proceed
              </button>
            </div>

          </div> : <div className='w-full '><EmptyCart/></div> }
        </div>
          
      </div>
    </div>
  )
}

export default Cart
