import React from 'react';
import Image from 'next/image';
import Bell from '../../public/Menu/bell.svg';
import avatar from '../../public/DashBoard/Avatar.svg';

const NavBar = () => {
  return (
    <div className="w-[55vw] h-[10vh] bg-grey sm:p-[8vw] lg:p-4 flex justify-between items-center">
      <div>
        <div className="text-black text-3xl font-semibold">
          Hi, Skyler Dias
        </div>
        <div className="mt-2 text-text">Let's finish your task today!</div>
      </div>
      <div className=" flex h-[10vh] gap-3">
        <Image alt="bell" src={Bell} />
        <Image alt="Avatar" src={avatar} />
      </div>
    </div>
  );
}

export default NavBar;
