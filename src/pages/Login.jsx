import React, { useState } from 'react'

const Login = () => {
   const [method , setMethod] = useState("login")
   const handleSubmit = async(event)=>{
      event.preventDefault()
   }

  return (
    <form onSubmit={handleSubmit()}  className=' flex justify-center items-center w-full  h-[28rem] bg-slate-500' >
         <div className= 'w-[50%] h-[60%] lg:w-[30%] bg-cyan-400 flex flex-col gap-2  '>
           <div className='flex justify-center items-center w-full'>
                 <h1 className='text-3xl font-serif'>{method}</h1>
           </div>
              {method === 'sign up' ?  <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full '  type="text" placeholder='Username' />:' ' }

              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full '  type="email" placeholder='Email' />
              <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="password" placeholder='Password' />
           <div className='flex justify-between'>
              <p className='font-medium cursor-pointer '>forgot password ?</p>
              {method === 'login'? 
                     <p onClick={()=>setMethod('sign up')} className='font-medium cursor-pointer'>Create account</p>:
                     <p onClick={()=>setMethod('login')} className='font-medium cursor-pointer'>Login here</p>


              }
           </div>
           <div className='flex justify-center items-center w-full mt-3 ' >
              <button  className='bg-black text-white w-[90%] py-1 rounded-md'>{method === 'login' ? 'Sign Up' : 'Sign In'}</button>
           </div>
        </div>
    </form>
  )
}

export default Login
