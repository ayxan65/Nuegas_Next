import React from 'react';
import Image from 'next/image';
import DropDown from '../../Utils/DropDown';
import Task from '../../public/Activity/task.svg';
import graph from '../../public/Activity/Graph.svg';

const Activity = () => {
  return (
    <div className='h-[34vh] w-10/12 bg-active   rounded-xl'>
        <div className='p-5'>
            <div className=' flex justify-between '><div className='font-semibold text-xl'>
            Activity</div>
            <div >
            <div><DropDown/></div>
              
            </div>
            </div>
            <Image width={500} className='m-auto mt-7' alt='graph' src={graph}></Image>
            <Image alt='task' className='bg-red absolute top-10' src={Task} ></Image>

        </div>
    </div>
  )
}

export default Activity