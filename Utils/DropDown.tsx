"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import arrow from '../public/DashBoard/arrow.svg';

const DropDown = () => {
    const [isOpen, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>('This Week');
    const [options, setOptions] = useState<string[]>(['This Week', 'Today', 'This Month', 'This Year']);
  
    const selectOption = (option: string) => {
      setSelectedOption(option);
      setOptions([selectedOption, ...options.filter(opt => opt !== option)]);
    };

    const toggleDropDown = () => {
        setOpen(!isOpen);
    }

  return (
    <div>
        <div className='flex  '>
        <button className='text-lg mx-2' onClick={toggleDropDown}>{selectedOption} </button>
      
       <Image alt='arrow' src={arrow}></Image>
       
        </div>
        {
            isOpen && (
              
               <div className=' absolute w-10 h-10' >
                {options.map(option => (
          <button
            key={option}
            className="block p-2 bg-second w-10"
            onClick={() => selectOption(option)}
          >
            {option}
          </button>
        ))}
             
               
               </div>
            )
        }
    </div>
  )
}

export default DropDown