"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../../public/Menu/logo.svg";
import icon1 from "../../public/Menu/icon1.svg";
import icon2 from "../../public/Menu/icon2.svg";
import icon3 from "../../public/Menu/icon3.svg";
import icon4 from "../../public/Menu/icon4.svg";
import icon5 from "../../public/Menu/icon5.svg";
import Help from "./Help";


const Menu = () => {
  const currentPath = usePathname();

  const menuItems = [
    { href: "/", label: "Overview", icon: icon1 },
    { href: "/Task", label: "Task", icon: icon2 },
    { href: "/Mentors", label: "Mentors", icon: icon3 },
    { href: "/Message", label: "Message", icon: icon4 },
    { href: "/Settings", label: "Settings", icon: icon5 },
  ];

  return (
    <div className="w-[17vw]  h-[94vh] bg-white sm:hidden md:hidden lg:block xl:block">
      <div className="flex  p-2 px-4  ">
        <Image alt="logo" src={Logo} width={36} height={36} />
        <div className="text-black font-semibold text-4xl ml-2">
          <Link href="/">Nuegas</Link>
        </div>
      </div>
      <div className="p-3  mt-7">
        {menuItems.map((item) => (
          <div
            key={item.href}
            className={
              currentPath === item.href
                ? "flex items-center gap-3 px-2  bg-grey rounded-lg"
                : "flex items-center gap-3 px-2 "
            }
          >
            <Image
              alt="icon"
              src={item.icon}
              width={32}
              height={32}
              className={
                currentPath === item.href ? "py-2" : "color-second py-2"
              }
            />
            <div
              className={
                currentPath === item.href
                  ? "text-black text-sm font-semibold"
                  : "text-second text-sm font-semibold"
              }
            >
              <Link href={item.href}>{item.label}</Link>
            </div>
          </div>
        ))}
      </div>
  <Help/>
    </div>
  );
};

export default Menu;
