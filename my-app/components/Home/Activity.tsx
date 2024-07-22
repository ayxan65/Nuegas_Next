import ThisWeek from '@/Utils/ThisWeek'
import React from 'react'

const Activity = () => {
  return (
    <div className='h-[10vh] w-10/12 bg-active   rounded-xl'>
        <div className='p-5'>
            <div className=' flex justify-between '><div className='font-semibold text-xl'>
            Activity</div>
            <div >
            <div><ThisWeek/></div>
              
            </div>
            </div>
        </div>
    </div>
  )
}

export default Activity