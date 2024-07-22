"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import arrow from '../public/DashBoard/arrow.svg';

const ThisWeek = () => {
    const [isOpen, setOpen] = useState(false)

    const toggleDropDown = () => {
        setOpen(!isOpen);
    }

  return (
    <div>
        <div className='flex  '>
        <button className='text-lg mx-2' onClick={toggleDropDown}>This Week </button>
      
       <Image alt='arrow' src={arrow}></Image>
       
        </div>
        {
            isOpen && (
               <div >
                <button className='border-red p-2 block'>Today</button>
                <button className='border-red p-2 block'>This Month</button>
                <button className='border-red p-2 block'>This Year</button>
               </div>
            )
        }
    </div>
  )
}

export default ThisWeek