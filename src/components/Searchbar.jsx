import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/frontend_assets/assets'
import { useLocation } from 'react-router-dom'


const Searchbar = () => {
    const {showsearch , setShowsearch ,search , setSearch}=useContext(ShopContext)
    const [show , setShow] = useState(false)

    const location = useLocation()

    useEffect(()=>{
      if(location.pathname.includes('collection')){
        setShow(true)
        console.log(search)
      }
      else{
        setShow(false)
      }
    },[location ]
    )
    
    // const hi =(e)=>{setSearch(e.target.value)
    //   console.log(search)
    // }


  return showsearch && show ? (
    <div className=' border-b  text-center '>
        <div className="inline-flex justify-center items-center border border-gray-400 px-5 py-2 my-2 mx-3 rounded-full sm:w-1/2 w-3/4">
            <input value={search} id='searchtext' onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' placeholder='search' type="text" />
            <img className='w-3' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setShowsearch(false)} className='inline cursor-pointer w-3' src={assets.cross_icon} alt="" />
    </div>
  ) : ''
}

export default Searchbar
