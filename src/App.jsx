import React from 'react'
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import Navbar from './components/Navbar'
import Searchbar from './components/Searchbar'


const App = () => {
  return (
    <div className='px-4 sm:px[5vw] md:px-[7vw] lg:[9vw] '>
        <Navbar/>
        <Searchbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
         < Route path='/About' element={<About/>}/>
         < Route path='/Cart' element={<Cart/>}/>
         < Route path='/Collection' element={<Collection/>}/>
         < Route path='/Contact' element={<Contact/>}/>
         < Route path='/Login' element={<Login/>}/>
         < Route path='/Orders' element={<Orders/>}/>
         < Route path='/PlaceOrder' element={<PlaceOrder/>}/>
         < Route path='/Product/:productId' element={<Product/>}/>
        </Routes>
    </div>

   
     
    
  )
}

export default App
