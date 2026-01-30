import React from 'react'

const RightCardContent = () => {
  return (
    <div className='absolute top-0 left-0 h-full  p-10 flex flex-col justify-between'>
         <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
         <div>
          <p className='text-lg  text-white mb-14 leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique eligendi, eius aliquid commodi voluptatibus.</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-8  py-3 rounded-full '>satiesfied</button>
            <button className='bg-blue-600 text-white font-semibold px-4  py-3 rounded-full '><i className="ri-arrow-right-line"></i></button>
          </div>
         </div>
      </div>
  )
}

export default RightCardContent