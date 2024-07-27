import React from 'react';
import Image from 'next/image';
import compimg from '../../../public/upcoming/compimg.svg';
import clock from '../../../public/upcoming/clock.svg';
import { Slider } from '@mui/material';

interface T {
    img:HTMLImageElement;
    title:string;
    desc:string;
    time:string;
 }

const RightTask = () => {
    const Data:T[] = [
        {title:'Creating Awesome Mobile Apps',
         desc:'UI UX Design',
         time:'1 Days Remaining',
         img:compimg   
        }]

  return (
    <div>
    <div className='text-xl font-semibold mt-5 lg:ml-0 ml-12  '>Task Today</div>
 <div className='flex justify-center lg:block'>
 <div  className='flex justify-between mt-5'>
 {
       Data.map(({img, time, desc, title}, index) => (
            <div key={index} className=' lg:w-[25svw] mb-5 rounded-lg  bg-white p-4'>
               
               <Image alt='photo' className='pt-2' width={340} src={img}></Image>
                <p className='mt-4 font-semibold text-black'>{title}</p>
                <p className='text-sm text-text'>{desc}</p>
                <div className='mt-2 font-semibold text-black'>Progress</div>
                <Slider  
                
                defaultValue={90}
                valueLabelDisplay='auto'
                sx={{"color":'#546FFF',
                 '& .MuiSlider-rail': {
                     color: '#E3E3E3'
                   },              
                  '& .MuiSlider-thumb': {
                     border: '2px solid #546FFF  ',
                     backgroundColor:'white'
                   },
               height:'8.5px',
               width:'22vw'
             }
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
</div>

  
  )
}

export default RightTask