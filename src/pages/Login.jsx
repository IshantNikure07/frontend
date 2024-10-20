import React, { useContext, useEffect, useState  } from 'react'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
   const [method , setMethod] = useState("login")
   const {token , setToken , backendUrl , navigate} = useContext(ShopContext)
   const [name , setName] = useState('')
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')

   const handleSubmit = async(event)=>{
      event.preventDefault()
       try {
         if (method === 'sign up') {
            const responce = await axios.post(backendUrl +'/api/user/register' , {name , email , password} )
            console.log(responce.data)

            if (responce.data.success) {
              setToken(responce.data.token)
              console.log(responce.data.token)
              localStorage.setItem("token" , responce.data.token)
            }else{
               toast.error(responce.data.message)
            }
         }else{
            const responce = await axios.post(backendUrl +'/api/user/login' , {email , password} )
            console.log(responce.data)
            if (responce.data.success) {
              setToken(responce.data.token)
              console.log(responce.data.token)
              localStorage.setItem("token" , responce.data.token)
            }else{
               toast.error(responce.data.message)
            }
         }

       } catch (error) {
         console.log(error)
         toast.error(err.message)
       }

   }

   useEffect(()=>{
      if(token){
         navigate('/')
      }
   },[token])

  return (
    <form onSubmit={handleSubmit}  className=' flex justify-center items-center w-full  h-[28rem] bg-slate-500' >
         <div className= 'w-[50%] h-[60%] lg:w-[30%] bg-cyan-400 flex flex-col gap-2  '>
           <div className='flex justify-center items-center w-full'>
                 <h1 className='text-3xl font-serif'>{method}</h1>
           </div>
              {method === 'sign up' ?  <input onChange={(e)=>setName(e.target.value)} value={name} className='border border-gray-300 rounded py-1.5 px-3.5 w-full '  type="text" placeholder='Username' />:' ' }

              <input  onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-gray-300 rounded py-1.5 px-3.5 w-full '  type="email" placeholder='Email' />
              <input onChange={(e)=>setPassword(e.target.value)} value={password}  className='border border-gray-300 rounded py-1.5 px-3.5 w-full ' type="password" placeholder='Password' />
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
