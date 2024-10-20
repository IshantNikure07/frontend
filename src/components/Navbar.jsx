import React, { useContext, useState , } from 'react'
import { Link, NavLink , useNavigate} from 'react-router-dom'
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { assets } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'


const Navbar = () => {
  const [visible, setVisible] = useState(false)
  const {showSearch , setShowsearch ,getCardCount,navigate ,token ,setToken , setcartItems} = useContext(ShopContext)
 
  
  const logout=()=>{
    localStorage.removeItem("token")
    setToken('')
    setcartItems({})
    navigate('/login')
  }

  return (
    <div className='flex items-center w-full justify-between py-5 font-medium border-b pb-5'>
      <div className=' h-4 w-36 flex pt-2 justify-center items-center'><img src={assets.logo} alt="" /></div>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='group flex flex-col items-center gap-1'>
          <p className=''>HOME</p>
          <hr className='group-hover:opacity-100 border-none w-2/4  bg-gray-900 h-[1.5px] opacity-0 ' ></hr>
        </NavLink>
        <NavLink to='/collection' className='group flex flex-col items-center gap-1'>
          <p className=' '>COLLECTION</p>
          <hr className='group-hover:opacity-100 border-none w-2/4  bg-gray-900 h-[1.5px] opacity-0' ></hr>
        </NavLink>
        <NavLink to='/contact' className='group flex flex-col items-center gap-1'>
          <p className=' '>CONTACT US</p>
          <hr className='group-hover:opacity-100 border-none w-2/4  bg-gray-900 h-[1.5px] opacity-0' ></hr>
        </NavLink>
        <NavLink to='/about' className='group flex flex-col items-center gap-1'>
          <p className=' '>ABOUT US</p>
          <hr className='group-hover:opacity-100 border-none w-2/4  bg-gray-900 h-[1.5px] opacity-0' ></hr>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        <img onClick={()=>setShowsearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

        <div className='group relative'>
          <img onClick={()=>token ? null : navigate("/login")} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-10'>
            {token ? <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p onClick={()=>navigate("/orders")} className='cursor-pointer hover:text-black'>Orders</p>
              <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
            </div> : ""}
          </div>
        </div>

        <Link to="/cart" className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white rounded-full text-sm'>{getCardCount()}</p>
        </Link>
          <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />


        <div>

          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>

              {/* Close Button */}
              <div onClick={() => setVisible(false)} className='flex  items-center gap-4 p-3 cursor-pointer'>
                <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="back" />
                <p>Back</p>
              </div>

              {/* Navigation Links */}
              <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/'>
                Home
              </NavLink>
              <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/collection'>
                Collection
              </NavLink>
              <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/about'>
                About
              </NavLink>
              <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border-b' to='/contact'>
                Contact
              </NavLink>
            </div>
          </div>
        </div>






      </div>
    </div>

  )
}

export default Navbar
