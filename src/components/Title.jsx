import React from 'react'

const Title = ({text1, text2}) => {
  return (
    <div>
      <div className='flex flex-row items-center gap-2 ' >
              <p className=' text-gray-700 text-center' >{text1} <span className='text-gray-950' >{text2}</span> </p>
              <div className='h-[2px] w-8 bg-slate-800 flex '></div>
        </div>
    </div>
  )
}

export default Title