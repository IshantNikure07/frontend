import { useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import Grid from '@mui/material/Grid'
import { blue, blueGrey, deepOrange, green, purple, red } from '@mui/material/colors'
import { Avatar, LinearProgress, Rating } from '@mui/material'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard'
import { mens_kurta } from '../../../data/mens_kurta'
import { Navigate, useNavigate } from 'react-router-dom'





const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
  
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
  ],
  colors: [
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    { name: 'Red', class: 'bg-red-900', selectedClass: 'ring-gray-900' },
    { name: 'Gray', class: 'bg-green-400', selectedClass: 'ring-gray-900' },
    { name: 'Blue', class: 'bg-blue-900', selectedClass: 'ring-gray-900' },
    { name: 'Orange', class: 'bg-Orange-500', selectedClass: 'ring-gray-900' },
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedSize, setSelectedSize] = useState(product.sizes[2])
  const navigate = useNavigate();
  const handleProductBuyNow = ()=>{
    navigate("/cart")
  }
 
  return (

    
  
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol role="list" className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a href={breadcrumb.href} className="mr-2 text-sm font-medium text-gray-900">
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a href={product.href} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
                {product.name}
              </a>
            </li>
          </ol>
        </nav>


<section className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 '>
        {/* Image gallery */}
 <div className="lg:h-[800px] w-4/5  ">
          <div >
            <img
              src={product.images[0].src}
              alt={product.images[0].alt}
              className=" h-76 m-3 p-10 pt-8  pb-4 object-cover object-center rounded-lg  "
            />
           </div >
                <div className="grid grid-cols-3  p-[3.5rem] pl-5 pt-1 w-full ml-8 gap-1 ">
                    <div className=" ">
                      <img
                        src={product.images[1].src}
                        alt={product.images[1].alt}
                        className="  object-cover object-center rounded-r-md"
                      />
                    </div>
                    <div >
                      <img
                        src={product.images[2].src}
                        alt={product.images[2].alt}
                        className="object-cover object-center rounded-r-md"
                      />
                    </div> 
                  
                    <div >
                    <img
                      src={product.images[3].src}
                      alt={product.images[3].alt}
                      className=" rounded-r-md"
                    />
                    </div>
            </div>
          
        </div>

     {/* Product info */}
              <div className="">
                <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                  <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl my-3">Cotton Candy</h1>
                </div>

                {/* Options */}
                <div className="mt-4 lg:row-span-3 lg:mt-0">
                  <h2 className="sr-only">Product information</h2>
                  <p className="text-3xl tracking-tight text-gray-900">$999 <span className='opacity-75 line-through text-2xl'>$999</span></p>
                  <p className='text-green-400 m-2'>70% off</p>


                  {/* Reviews */}
                  <div className="mt-6">
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      <div className="flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{reviews.average} out of 5 stars</p>
                      <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        {reviews.totalCount} reviews
                      </a>
                    </div>
             ~     </div>

                  <form className="mt-10">
                    {/* Colors */}
                    <div >
                      <h3 className="text-sm font-medium text-gray-900">Color</h3>

                      <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                        <RadioGroup.Label className="sr-only">Choose a color</RadioGroup.Label>
                        <div className="flex items-center space-x-3 ">
                          {product.colors.map((color) => (
                            <RadioGroup.Option
                              key={color.name}
                              value={color}
                              className={({ active, checked }) =>
                                classNames(
                                  color.selectedClass,
                                  active && checked ? 'ring ring-offset-1' : '',
                                  !active && checked ? 'ring-2' : '',
                                  'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none'
                                )
                              }
                            >
                              <RadioGroup.Label as="span" className="sr-only">
                                {color.name}
                              </RadioGroup.Label>
                              <span
                                aria-hidden="true"
                                className={classNames(
                                  color.class,
                                  'h-8 w-8 rounded-full border border-black border-opacity-10'
                                )}
                              />
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Sizes */}
                    <div className="mt-10 w-2/5 h-3/4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium text-gray-900">Size</h3>
                        <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                          Size guide
                        </a>
                      </div>

                      <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                        <RadioGroup.Label className="sr-only">Choose a size</RadioGroup.Label>
                        <div className="w-full grid grid-cols-4 gap-4 sm:grid-cols-3 space-x-2 lg:grid-cols-4 ">
                          {product.sizes.map((size) => (
                            <RadioGroup.Option
                              key={size.name}
                              value={size}
                              disabled={!size.inStock}
                              className={({ active }) =>
                                classNames(
                                  size.inStock
                                    ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                                    : 'cursor-not-allowed bg-gray-50 text-gray-200',
                                  active ? 'ring-2 ring-indigo-500' : '',
                                  'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                                )
                              }
                            >
                              {({ active, checked }) => (
                                <>
                                  <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                                  {size.inStock ? (
                                    <span
                                      className={classNames(
                                        active ? 'border' : 'border-2',
                                        checked ? 'border-indigo-500' : 'border-transparent',
                                        'pointer-events-none absolute -inset-px rounded-md'
                                      )}
                                      aria-hidden="true"
                                    />
                                  ) : (
                                    <span
                                      aria-hidden="true"
                                      className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                    >
                                      <svg
                                        className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                        viewBox="0 0 100 100"
                                        preserveAspectRatio="none"
                                        stroke="currentColor"
                                      >
                                        <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                      </svg>
                                    </span>
                                  )}
                                </>
                              )}
                            </RadioGroup.Option>
                          ))}
                        </div>
                      </RadioGroup>
                    </div>
                  <section className='flex flex-row space-x-2'>
                    <button onClick={handleProductBuyNow}
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Add to bag
                    </button>

                    <button onClick={handleProductBuyNow}
                      type="submit"
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Buy Now
                    </button>
                    
                    </section>
                  </form>
                </div>

                <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
                  {/* Description and details */}
                  <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                      <p className="text-base text-gray-900">{product.description}</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                    <div className="mt-4">
                      <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                        {product.highlights.map((highlight) => (
                          <li key={highlight} className="text-gray-400">
                            <span className="text-gray-600">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h2 className="text-sm font-medium text-gray-900">Details</h2>

                    <div className="mt-4 space-y-6">
                      <p className="text-sm text-gray-600">{product.details}</p>
                    </div>
                  </div>
                </div>
              </div>

</section>
       
<div className='border-t-2 border-indigo-100'/>
<section className='m-8 '>
  <Grid container spacing={7} lg={12} md={12} sm={1}   >

    <Grid item lg={6} md={6}  sx={{border:red } } >
        <h1 className='font-bold w-80 mb-5 '>Reviews and Rating</h1>
        <div className='flex flex-row mb-3' >
            <div><Avatar sx={{bgcolor: deepOrange[400]}} className='p-0 mt-2 w-0' >S</Avatar></div>
            <div className='text-sm ml-5 '>
              <p className='font-medium text-lg'>Sunil Pandit </p>
              <p>Nice Product</p>
              <Rating name="simple-controlled " defaultValue={4.5} precision={0.5} readOnly/>
              <p>18 may 2023</p>
            </div>
        </div>

        <div className='flex flex-row mb-3' >
            <div><Avatar sx={{bgcolor: green[400]}} className='p-0 mt-2 w-0' >K </Avatar></div>
            <div className='text-sm ml-5 '>
              <p className='font-medium text-lg'>Kumar arun </p>
              <p>Happy !</p>
              <Rating name="half-rating " defaultValue={3} precision={0.5} readOnly/>
              <p>26 April 2023</p>
            </div>
        </div>

        <div className='flex flex-row mb-3' >
            <div><Avatar sx={{bgcolor:blue[400]}} className='p-0 mt-2 w-0' >J</Avatar></div>
            <div className='text-sm ml-5 '>
              <p className='font-medium text-lg'>Jethalal Gada</p>
              <p>Quality Product</p>
              <Rating name="controlled " defaultValue={4} precision={0.5} readOnly/>
              <p>2 Nov 2023</p>
            </div>
        </div>
           

    </Grid>
          
          
    
    <Grid item lg={6} md={6}   sx={{border:red}}>
      <section>
        <h2 className='font-bold text-lg w-80 mb-5'>Product Rating</h2>
        <Rating name="controlled " defaultValue={4} precision={0.5} readOnly></Rating>

        <div className='flex flex-row pb-1'>
          <LinearProgress className='mt-1.5' sx={{bgcolor:blueGrey[100] , borderRadius:3, height:8 , width:400 }} variant='determinate' value={70} color='success'/>
          <p className='p-0 pl-2 text-sm font-medium'>Excellent</p>
        </div>
   
        <div className='flex flex-row pb-1'>
          <LinearProgress className='mt-1.5' sx={{bgcolor:blueGrey[100] , borderRadius:3, height:8 , width:400 }} variant='determinate' value={80} color='info'/>
          <p className='p-0 pl-2 text-sm font-medium'>Very Good</p>
        </div>

        <div className='flex flex-row pb-1'>
          <LinearProgress className='mt-1.5' sx={{bgcolor:blueGrey[100] , borderRadius:3, height:8 , width:400 }} variant='determinate' value={40} color='warning'/>
          <p className='p-0 pl-2 text-sm font-medium'>Poor</p>
        </div>
       
        <div className='flex flex-row pb-1'>
          <LinearProgress className='mt-1.5' sx={{bgcolor:blueGrey[100] , borderRadius:3, height:8 , width:400 }} variant='determinate' value={5} color='error' />
          <p className='p-0 pl-2 text-sm font-medium'>Very Poor</p>
        </div>
     
      </section>
    </Grid>
    
  </Grid>
</section>
<div className='border-t-2 border-indigo-100'/>

<section className=''>
<h1 className='font-bold text-xl m-8' >Similar Products</h1>
<div className='m-8' >
  <div className='flex  flex-wrap space-x-5' >
  {mens_kurta.map((item)=> <HomeSectionCard products={item} className='m-1 w-12'/> )}
    
  </div>

</div>
</section>





             
            </div>
          </div>
        )
      }

        

