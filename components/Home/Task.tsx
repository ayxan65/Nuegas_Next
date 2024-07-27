import React from 'react';
import Image from 'next/image';
import Bar from '../../public/DashBoard/Bar.svg';
import Activity from './Activity';

const Task = () => {
  return (
    <div className='block mt-7   lg:mx-2 lg:mt-7 lg:flex lg:gap-8  lg:flex-nowrap'>
        <div className='px-2 h-[16vh] w-[92vw] sm:h-[30vh] sm:w-[20vw] md:h-[30vh] md:w-[20vw] lg:h-[30vh] lg:w-[13.5vw] bg-coal rounded-xl'>
        <div className='flex justify-between sm:flex md:block lg:block'>
        <div>
         <div className='text-lg text-white font-semibold p-4'>Running Task</div>
         <div className='text-3xl px-4 text-white font-semibold'>65</div>
         </div>
           <div className='px-4 pt-4 flex items-center gap-4' >
           <Image alt='Bar' src={Bar} ></Image>
           <div className='text-xl text-white font-semibold'><div>100</div>
           <div className='text-second font-normal text-sm'>Task</div>
           </div>
           </div>
        </div>

        </div>
        <Activity/>
    </div>
  )
}

export default Task