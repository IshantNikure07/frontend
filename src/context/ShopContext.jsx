import React ,{createContext, useContext, useEffect, useState}from 'react'
import{ products} from '../assets/frontend_assets/assets'
import { toast } from 'react-toastify';


export const ShopContext = createContext();


 const ShopContextProvider = (props) => {
const currency ='$'
const delivery_fee = 20
const [search , setSearch] = useState(" ")
const [showsearch , setShowsearch] = useState(false)
const [cartItems , setcartItems] = useState({})


     const addToCart = async (itemId , size)=>{
       if (!size){
         toast.error('Please Select Size')
         return
        }
        let cartData = structuredClone(cartItems)
        
           if(cartData[itemId]){
                if(cartData[itemId][size]){
                  cartData[itemId][size] += 1
                }
                  else{
                    cartData[itemId][size] = 1
                  }
                  }
                    
           else{
             cartData[itemId] = {};
             cartData[itemId][size] = 1

           }   
           
           setcartItems(cartData)
     }

     const getCardCount = ()=>{
      let totalcount = 0
      for (const items in cartItems){
        for(const item in cartItems[items]){
         try {
          if (cartItems[items][item] > 0) {
            totalcount += cartItems[items][item] 
          }
         } catch (error) {
          
         }
          
      }}return totalcount}
      
      
      
      useEffect(()=>{
        console.log(cartItems)  
      },[cartItems])
      
            const updateCart= async (itemId , size , quantity )=>{
                  let cartData = structuredClone(cartItems)
                  cartData[itemId][size] = quantity
                  setcartItems(cartData)
            }

      const getTotal= ()=>{
        let total = 0
        for(const items in cartItems){
          let iteminfo = products.find((product)=> product._id === items)
          for(const item in cartItems[items]){
                 try {
                  if (cartItems[items][item] > 0) {
                     total +=  iteminfo.price * cartItems[items][item]
                  }

                 } catch (error) {
                  
                 }
            }
          }
          
          return total;
        }
        
      


  //     for(cartItems[items][item] ){
  //       let total = iteminfo.price * cartItems[items][item]
  // console.log(total)

    const value = {
        products , currency , delivery_fee,showsearch,setShowsearch,search,setSearch,
        addToCart,cartItems,getCardCount,updateCart,getTotal
    }

  return (
    <ShopContext.Provider value={value}>
         {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
