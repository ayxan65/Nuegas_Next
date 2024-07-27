import React from 'react';
import Image from 'next/image';
import compimg from '../public/upcoming/compimg.svg';
import clock from '../public/upcoming/clock.svg';
import { Slider } from '@mui/material';

interface T {
   img:HTMLImageElement;
   title:string;
   desc:string;
   time:string;
}
const UpcomingTask = () => {
    const Data:T[] = [
        {title:'Creating Mobile App Design',
         desc:'UI UX Design',
         time:'3 Days Remaining',
         img:compimg   
        },
        {title:'Creating Mobile App Design',
            desc:'UI UX Design',
            time:'3 Days Remaining',
            img:compimg   
           }
    ]

  return (
<div className='my-4'>
    <div className='text-xl font-semibold mt-5 '>Upcoming Tasks</div>
 <div  className='h-[100shw] block lg:flex lg:justify-between mt-5'>
 {
       Data.map(({img, time, desc, title}, index) => (
            <div key={index} className=' lg:w-[26vw] lg:mb-5 rounded-lg  bg-white p-4 my-2 '>
               
               <Image alt='photo' className='pt-2' width={400} src={img}></Image>
                <p className='mt-4 font-semibold text-black'>{title}</p>
                <p className='text-sm text-text'>{desc}</p>
                <div className='mt-2 font-semibold text-black'>Progress</div>
                <Slider  
                
                defaultValue={75}
                valueLabelDisplay='auto'
                sx={{"color":'#546FFF',
                 '& .MuiSlider-rail': {
                     color: '#E3E3E3'
                   },              
                  '& .MuiSlider-thumb': {
                     border: '2px solid #546FFF  ',
                     backgroundColor:'white'
                   },
               height:'8.5px' }
               }
                
                />
                <div className='flex gap-2'>
                 <Image alt='clock' src={clock}></Image> 
                 <span>{time}</span>
                </div>
                
            </div>
       ))
    }
 </div>
</div>

  )
}

export default UpcomingTask