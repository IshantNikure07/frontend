import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const PlaceOrder = () => {
    const [method , setMethod] = useState('cod')
    const {backendUrl , token , cartItems , setcartItems , getTotal , delivery_fee ,products,navigate} = useContext(ShopContext)
    const [formdata , setFormData] = useState({
      firstname:'',
      lastname:'',
      email:'',
      street:'',
      city:'',
      state:'',
      zipcode:'',
      country:'',
      phone:'',
    })

    const onchangeHandler=(event)=>{
      const name = event.target.name
      const value = event.target.value

      setFormData(data =>({...data,[name]:value}))
    }

    const onSubmithandler=async(event)=>{
      event.preventDefault()

      try {
        let orderItems = []

        for(const items in cartItems ){
          for (const item in cartItems[items]){
                   if(cartItems[items][item] > 0){
                  const itemInfo = await  structuredClone(products.find(product => product._id === items))
                    if(itemInfo){
                      itemInfo.size = item
                      itemInfo.quantity = cartItems[items][item]
                      orderItems.push(itemInfo)
                    }
                   }
          }
        }

        let orderData = {
          address:formdata,
          items:orderItems,
          amount:getTotal() + delivery_fee
        }

       

        switch (method) {
          case 'cod':
            const responce = await axios.post(backendUrl + '/api/order/place' , orderData , {headers:{token}})
            console.log(responce.data)
            console.log(responce.data.success)
            if (responce.data.success) {
              setcartItems({})
              navigate('/orders')
            }else{
              toast.error(responce.data.message)
            }
            break;
        
        }
      } catch (error) {
        
      }
    } 


  return (
    <form onSubmit={onSubmithandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-[80vh] border-t'>
      {/* left side */}
        <div className='flex flex-col gap-3 w-full sm:max-w-[380px]  '>
          <div className='text-xl sm:text-2xl my-3'>
            <Title text1={"DELIVERY"} text2={"ADDRESS"} />
          </div>
          <div className='flex gap-3'>
            <input required onChange={onchangeHandler} name='firstname' value={formdata.firstname} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name' />
            <input required onChange={onchangeHandler} name='lastname' value={formdata.lastname} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name ' />
          </div>
            <input required onChange={onchangeHandler} name='email' value={formdata.email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email' />
            <input required onChange={onchangeHandler} name='street' value={formdata.street} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street ' />
          <div className='flex gap-3'>
            <input required onChange={onchangeHandler} name='city' value={formdata.city} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City' />
            <input required onChange={onchangeHandler} name='state' value={formdata.state} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State ' />
          </div>
          <div className='flex gap-3'>
            <input required onChange={onchangeHandler} name='zipcode' value={formdata.zipcode} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zip code' />
            <input required onChange={onchangeHandler} name='country' value={formdata.country} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country' />
          </div>
            <input required onChange={onchangeHandler} name='phone' value={formdata.phone} className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone Number' />
           
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
                 <button type='submit' className=' bg-black text-white rounded-md p-2 mt-20 sm:m-2 '> Place Order </button>
            </div>

        </div>
    </form>
  )
}

export default PlaceOrder
