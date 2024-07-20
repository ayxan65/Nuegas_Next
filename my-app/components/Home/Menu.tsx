import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/Menu/logo.svg';
import icon1 from '../../public/Menu/icon1.svg';
import icon2 from '../../public/Menu/icon2.svg';
import icon3 from '../../public/Menu/icon3.svg';
import icon4 from '../../public/Menu/icon4.svg';
import icon5 from '../../public/Menu/icon5.svg';


const Menu = () => {
  return (
    <div className='w-[15vw] border h-[94vh]'>
    <div className='flex'>
    <Image alt='logo ' src={Logo} width={36} height={36} ></Image>
    <div className='text-black font-semibold text-4xl ml-2'><Link href='/'>Nuegas</Link></div>
    </div>
<div className='p-3 mt-7 '>  <div className='flex items-center gap-3'>  <Image alt='icon' src={icon1} width={32} height={32} className='py-4'></Image>
<div className='text-black font-semibold'><Link href='/'>Overview</Link></div>
</div>
<div className='flex items-center gap-3'>  <Image alt='icon' src={icon2} width={32} height={32} className='py-4'></Image>
<div className='text-second font-semibold'><Link href='/Task'>Task</Link></div>
</div>
<div className='flex items-center gap-3'>  <Image alt='icon' src={icon3} width={32} height={32} className='py-4'></Image>
<div className='text-second font-semibold'><Link href='/Mentors'>Mentors</Link></div>
</div>
<div className='flex items-center gap-3'>  <Image alt='icon' src={icon4} width={32} height={32} className='py-4'></Image>
<div className='text-second font-semibold'><Link href='/Message'>Message</Link></div>
</div>
<div className='flex items-center gap-3'>  <Image alt='icon' src={icon5} width={32} height={32} className='py-4'></Image>
<div className='text-second font-semibold'><Link href='/Settings'>Settings</Link></div>
</div></div>
        {/* Just use loops :( */}
        
    </div>
  )
}

export default Menu