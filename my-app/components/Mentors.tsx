import React from 'react';
import Image from 'next/image';
import mentor1 from '../public/mentors/mentoe1.svg';
import starimg from '../public/mentors/star.svg';
import taskimg from '../public/mentors/task.svg';
import FollowButton from '../Utils/FollowButton';

interface T {
    name:string;
    job:string;
    task:string;
    star:string;
    img:HTMLImageElement;
}

const Mentors = () => {
    const Data:T[] = [
        {
            name:"Curious George",
            job:"UI UX Design",
            task:"40 Tasks",
            star:"4.7 (750 rewiew)",
            img:mentor1
        },
        {
            name:"Curious George",
            job:"UI UX Design",
            task:"40 Tasks",
            star:"4.7 (750 rewiew)",
            img:mentor1
        }

    ]
    
    return (
        <div className='mt-5 '>
            <div className='text-3xl font-bold my-4'>Monthly Mentors</div>
         <div className='flex justify-between'>
         {Data.map(({ name, job, star, task, img }) => (
            <div className='h-[20vh] w-[25vw] bg-white rounded-lg mt-3 shadow-lg' key={name}> 
            <div className='p-6'>
           <div className='flex items-center gap-4'>
           <Image alt='img' src={img}></Image>
             <div>
             <div className='font-semibold'>{name}</div>
             <div className='text-gray'>{job}</div>
             </div>
            <div className='ml-16'> <FollowButton/></div>
           </div>
             <div className='flex justify-between mt-5'>
             <div className='flex gap-2'><Image alt='task' src={taskimg}></Image>
              {task}</div>
             <div className='flex gap-2'><Image alt='star' src={starimg}></Image>
              {star}</div>
             </div>
            </div>
            </div>
          ))}
         </div>
        </div>
      );
      
    }
export default Mentors