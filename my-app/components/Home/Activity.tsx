import React from 'react';
import Image from 'next/image';
import Bar from '../../public/DashBoard/Bar.svg';

const Activity = () => {
  return (
    <div className='mx-2 mt-7 flex'>
        <div className='h-[30vh] w-[12.5vw] bg-coal rounded-xl'>
            <div className='text-lg text-white font-semibold p-4'>Running Task</div>
            <div className='text-3xl px-4 text-white font-semibold'>65</div>
           <div className='px-4 pt-4 flex items-center gap-4' >
           <Image alt='Bar' src={Bar} ></Image>
           <div className='text-xl text-white font-semibold '><div>100</div>
           <div className='text-second font-normal text-sm'>Task</div>
           </div>
           </div>

        </div>
    </div>
  )
}

export default Activity