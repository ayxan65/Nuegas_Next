import React from 'react';
import Image from 'next/image';
import DropDown from '../../Utils/DropDown';
import Task from '../../public/Activity/task.svg';
import graph from '../../public/Activity/Graph.svg';
import point from "../../public/Activity/point.svg";

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
           <div > <Image width={500} className='m-auto mt-7' alt='graph' src={graph}></Image>
          
           <Image alt='task' className=' relative bottom-[10.5vw] left-[8.2vw]' src={Task} ></Image>
           <Image alt='point' src={point} className=' relative bottom-[10.5vw] left-[10.1vw]'></Image>
           
           </div>
            

        </div>
    </div>
  )
}

export default Activity