import React, { useContext, useEffect, useState } from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'
import ProductItem from '../components/ProductItem'


const Collection = () => {
  const {products , currency , showSearch, search} = useContext(ShopContext)
  const [Showfilter , setShowfilter] = useState(false)
  const [filterproducts , setFilterproducts] = useState([])
  const [category , setCategory] = useState([])
  const [subcategory , setSubcategory] = useState([])
  const [sortType , setSortType] = useState('relavent')



 
   const toggleCategory = (e)=>{
    if (category.includes(e.target.value)){
    setCategory(previous => previous.filter(item => item != e.target.value))
  }
  else{
    setCategory(previous =>[...previous , e.target.value])} }


  const toggleSubcategory = (e)=>{
    if (subcategory.includes(e.target.value)){
    setSubcategory(previous => previous.filter(item => item != e.target.value))
  }
  else{
    setSubcategory(previous =>[...previous , e.target.value])} }


    // apply filter

  const applyfilter =()=>{
    let productcopy = products.slice()

    if (search.length > 0){
      productcopy = productcopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0){
      productcopy = productcopy.filter(item => category.includes(item.category))
    }
    if (subcategory.length > 0){
      productcopy = productcopy.filter(item => subcategory.includes(item.subCategory))
    }
    setFilterproducts(productcopy)
  } 
  
  // sort option
  const sortProducts = ()=>{
    let fpcopy = filterproducts.slice()

    switch(sortType){
      case 'Low-High' :
        setFilterproducts(fpcopy.sort((a,b)=>(a.price - b.price)));
        break;

      case 'High-Low' :
        setFilterproducts(fpcopy.sort((a,b)=>(b.price - a.price  )));
        break;

      default :
      applyfilter();
      break

    }
  }

  useEffect(()=>{
    sortProducts()

  },[sortType])

  useEffect(()=>{
    applyfilter()

  },[category,subcategory , search , showSearch])

  useEffect(()=>
  {setFilterproducts(products)}
  ,[])


  return (
    <div className='flex flex-row'>
      {/* filter  */}
      <div className=' m-4 flex-col text-left space-y-4w-full sm:w-[25%]'>
              
            <h1 onClick={()=>setShowfilter(!Showfilter)} className='text-xl font-semibold flex items-center'> FILTER<img  className={`ml-2 h-4 sm:hidden ${Showfilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" /></h1>
            <div className={`space-y-4 sm:block ${Showfilter ? '' : 'hidden'}`}>

            {/* Category */}
            <div className='border border-grey-500 rounded-sm p-2  '>
              <h1 className='text '>CATEGORY</h1>
                <div className='flex gap-2 ml-3 '>
                  <p className=''> <input type="checkbox"  value="Men" onClick={toggleCategory}/> Mens</p>
                </div>
                <div className='flex gap-2 ml-3 '>
                  <p><input type="checkbox"  value="Women"  onClick={toggleCategory}/> Womens</p>
                </div>
                <div className='flex gap-2 ml-3'>
                  <p><input type="checkbox"  value="Kids"  onClick={toggleCategory}/> Kids</p>
                </div>
            </div>


            {/* subcategory */}

            <div className='border border-grey-500   p-2'>
              <h1 className='text '>SUBCATEGORY</h1>
                <div className='flex gap-2 ml-3 '>
                  <p className=''> <input type="checkbox"  value="Topwear" onClick={toggleSubcategory}/> Top wear</p>
                </div>
                <div className='flex gap-2 ml-3 '>
                  <p><input type="checkbox"  value="Bottomwear" onClick={toggleSubcategory}/> Bottom wear</p>
                </div>
                <div className='flex gap-2 ml-3'>
                  <p><input type="checkbox"  value="Winterwear" onClick={toggleSubcategory}/> Winter wear</p>
                </div>
            </div>
     
            </div>

      </div>



      <div className='flex-1 '>
        <div className='flex justify-between mx-5'>
            <div className='Heading flex flex-row items-center gap-2 ' >
                  <div className='h-[2px] w-8 bg-slate-800 flex '></div>
                  <p className='sm:text-2xl text-xl text-gray-700 text-center' > LATEST <span className='text-gray-950' >COLLECTION</span> </p>
            </div>
            <div>
              <select onChange={(e)=> setSortType(e.target.value)} className='sortOption flex justify-center items-center border border-gray-500 rounded-sm p-1.5 ' name="Sort " id="Sort"> Sort by
                <option value="Relavent">Relavent</option>
                <option value="Low-High">Low-High</option>
                <option value="High-Low">High-Low</option>
              </select>
            </div>
        </div>

{/* products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
         {  filterproducts.map((item,index)=>(<ProductItem key={index} id={item._id}  img={item.image} name={item.name} price={item.price} currency={currency} />))}
        </div>
      </div>

      

    </div>
  )
}

export default Collection