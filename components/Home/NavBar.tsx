import React from "react";
import Image from "next/image";
import Bell from "../../public/Menu/bell.svg";
import avatar from "../../public/DashBoard/Avatar.svg";
import Hamburgermenu from '../../public/Menu/Hamburger.svg';


const NavBar = () => {
  

  return (
    <>
      <div className="bg-white flex justify-between p-2 lg:hidden ">
        <Image className="z-10" alt="menu" src={Hamburgermenu}></Image>
     
        <div className="flex gap-2">
          <Image alt="photo" src={Bell}></Image>
          <Image alt="photo" src={avatar}></Image>
        </div>
      </div>
      <div className="hidden sm:hidden  mx-2 w-[55vw] h-[10vh] bg-gray   lg:flex justify-between items-center">
        <div>
          <div className="text-black text-[24px] font-semibold ">
            Hi, Skyler Dias
          </div>
          <div className="mt-2 text-text">Let's finish your task today!</div>
        </div>
        <div className=" flex h-[10vh] gap-3">
          <Image alt="bell" src={Bell} />
          <Image alt="Avatar" src={avatar} />
        </div>
      </div>
    </>
  );
};

export default NavBar;
