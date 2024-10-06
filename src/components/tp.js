<div>








<div className='flex items-center gap-6'>
        <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

        <div className='group relative'>
          <img className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='cursor-pointer hover:text-black'>My Profile</p>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
        </div>

        <Link to="/cart" className='relative'>
          <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
          <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white'>3</p>
        </Link>
        <img onClick={()=>setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer' alt="" />


      </div>

      <div className={`absolute top-0 right-0 bottom-0 w-64 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0' }`}>
        <div className='flex flex-col text-gray-600'>

          {/* Close Button */}
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
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