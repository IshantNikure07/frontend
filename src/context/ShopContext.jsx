import React, { createContext, useContext, useEffect, useState } from 'react'
// import{ products} from '../assets/frontend_assets/assets'
import { toast } from 'react-toastify';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const ShopContext = createContext();


const ShopContextProvider = (props) => {
  const currency = '$'
  const delivery_fee = 20
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [search, setSearch] = useState(" ")
  const [showsearch, setShowsearch] = useState(false)
  const [cartItems, setcartItems] = useState({})
  const [products, setProducts] = useState([])
  const [token, setToken] = useState('')
  const navigate = useNavigate()


  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Please Select Size')
      return
    }
    let cartData = structuredClone(cartItems)

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1
      }
      else {
        cartData[itemId][size] = 1
      }
    }

    else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1

    }

    setcartItems(cartData)

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/add', { itemId, size }, { headers: { token } })
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
  }

  const getCardCount = () => {
    let totalcount = 0
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalcount += cartItems[items][item]
          }
        } catch (error) {

        }

      }
    } return totalcount
  }




  // TOTAL QUANTITY OF CART
  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems)
    cartData[itemId][size] = quantity
    setcartItems(cartData)

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })
      }
      catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
  }



  // useEffect(()=>{
  //   console.log(cartItems)  
  // },[cartItems])

  const updateCart = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems)
    cartData[itemId][size] = quantity
    setcartItems(cartData)

    if (token) {
      try {
        await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity }, { headers: { token } })
      }
      catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }
  
  }

  const getTotal = () => {
    let total = 0
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items)
      // console.log("the item info is" , itemInfo)

      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            total += itemInfo.price * cartItems[items][item]
          }

        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    }

    return total;
  }





  const getProducts = async () => {
    try {

      const responce = await axios.get(backendUrl + '/api/product/list')
      if (responce.data.success) {
        setProducts(responce.data.products)
        // console.log(responce.data.products)
      } else {
        toast.error(responce.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  const getUserCart = async (token) => {
    try {
      const responce = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } })
      if (responce.data.success) {
        setcartItems(responce.data.cartData)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }


  useEffect(() => {
    getProducts()

  }, [])




  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      setToken(localStorage.getItem("token"))
      getUserCart(localStorage.getItem("token"))
    }
  }, [])

  const value = {
    products, currency, delivery_fee, showsearch, setShowsearch, search, setSearch, navigate,
    addToCart, cartItems, setcartItems, getCardCount, updateCart, getTotal, backendUrl, token, setToken, updateQuantity
  }

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
