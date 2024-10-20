import React from 'react'



const ProductItem = ({ id, price, name, img ,currency }) => {


  return (
<div className="bg-white">
      <div className="mx-auto  px-2 py-8 sm:p-0 sm:mx-3 ">

        <div className="mt-6  gap-x-6 gap-y-10  xl:gap-x-4">
          
            <div className="group relative">
                  <div className="  overflow-hidden rounded-md bg-gray-200  group-hover:scale-105 "><img alt="" src={img} className=" object-cover object-center "/></div>
                  <div className="mt-4 flex justify-between gap-y-3">
                      <div className='flex flex-col w-[80%] '>
                        <h3 className="text-sm text-gray-700"><a href={`/product/${id}`}><span aria-hidden="true" className="absolute inset-0" />{name}</a> </h3>
                        <p className="mt-1 text-sm text-gray-500 opacity-0">{id}</p>
                      </div>
                  <p className="text-sm font-medium text-green-600">{currency}{price}</p>
                  </div>
            </div>
        
        </div>
      </div>
    </div>
  )
}
  

export default ProductItem













// <div className="bg-white">
//   <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

//           <div className="group relative">
//             <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//               <img src={img} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
//             </div>
//             <div className="mt-4 flex justify-between">
//                 <div>
//                     <h3 className="text-sm text-gray-700">
//                       <a href={mo}>
//                         <span aria-hidden="true" className="absolute inset-0" />
//                         {name}
//                       </a>
//                     </h3>
//                 </div>
//                 <p className="text-sm font-medium text-gray-900">{price}</p>
//             </div>
//           </div>

//         </div>
//   </div>
// </div>