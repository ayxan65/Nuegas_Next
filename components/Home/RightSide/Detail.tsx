import React from 'react'

const Detail = () => {
  return (
    <div className='bg-white w-[23vw] p-4 '>
      <div className='flex justify-between'>
        <div className='font-semibold'>Detail Task</div>
        <div className='text-text'> UI/UX desing</div>
      </div>
      <div>
        <div className='py-5 flex items-center gap-3'>
            <div className='h-[3em] w-[3em] rounded-md bg-grey flex items-center justify-center font-bold  '>1</div>
            <div>Understanding the tools in Figma</div>
        </div>
        <div className=' flex items-center gap-3'>
            <div className='h-[3em] w-[3em] rounded-md bg-grey flex items-center justify-center font-bold  '>2</div>
            <div>Understand the basics of making designs</div>
        </div>
        <div className='py-5 flex items-center gap-3'>
            <div className='h-[3em] w-[3em] rounded-md bg-grey flex items-center justify-center font-bold  '>3</div>
            <div>Design a mobile application with figma</div>
        </div>
      </div>
      <button className=' rounded-lg mx-auto my-7 h-10 w-[20em] bg-purple text-white flex items-center justify-center'>Go To Detail</button>

    </div>
  )
}

export default Detail