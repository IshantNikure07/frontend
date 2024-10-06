import React ,{createContext, useContext, useState}from 'react'
import{ products} from '../assets/frontend_assets/assets'

export const ShopContext = createContext();


 const ShopContextProvider = (props) => {
const currency ='$'
const delivery_fee = 20
const [search , setSearch] = useState(" ")
const [showsearch , setShowsearch] = useState(false)

    const value = {
        products , currency , delivery_fee,showsearch,setShowsearch,search,setSearch
    }

  return (
    <ShopContext.Provider value={value}>
         {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
