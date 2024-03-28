"use client"
import React,{ useState } from "react"
import { mainLinks, userLinks } from "@/constants"
import {signOut} from "next-auth/react"

// icons
import {
    AiOutlineUser,
    AiOutlineShoppingCart,
    AiOutlineHeart,
  } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart, CiShoppingBasket } from "react-icons/ci";

import Link from "next/link";
import {User} from "@prisma/client"
import { open } from "fs";
import { CartIcon } from "@/app/(shoppingCart)/components/ui/CartIcon";

interface NavbarProps{
    user?: User | undefined
}

const NavBar = ({user}: NavbarProps) => {
    const[openMobileMenu, setOpenMobileMenu] = useState(false)
    const [openUserMenu, setOpenUserMenu] = useState(false)
    

    const handleMobileMenu = ()=>{
        setOpenMobileMenu(!openMobileMenu)
    }
    const handleUserMenu = ()=>{
        setOpenUserMenu(!openUserMenu)
    }

  return (
    <nav>
        <div className="relative flex items-center justify-between px-10 py-4 text-white bg-gray-900 border-b border-1">
            <Link href={'/'}>
                <div className="flex items-center gap-1 text-xl font-medium text-white">
                    <h1>CopyEcommerce</h1>
                    <CiShoppingBasket/>
                </div>
            </Link>
            <ul className="flex gap-10 max-md:hidden">
                {mainLinks?.map((item, index)=>(
                    <Link key={index} href={item.route}>
                        <li className="text-lg font-normal ">{item.label}</li>
                    </Link>
                ))}
            </ul>
            <div className=" flex text-xl gap-5 [&>*]:cursor-pointer">
                <CartIcon/>
                <CiHeart/>
                <div className=" max-md:hidden"
                onClick={handleUserMenu}
                >
                    <AiOutlineUser/>
                </div>
                <div className="md:hidden"
                onClick={handleMobileMenu}
                >
                    {openMobileMenu ? <MdClose/> : <FiMenu/>}
                </div>
            </div>
            {/* USERMENU */}
            {openUserMenu && (
                <div className="z-10 right-0 absolute top-[40px] text-center shadow-md rounded-md bg-gray-700 w-28 max-md:hidden text-white py-2">
                    {!user ? (
                         <ul>
                            <Link href={"/sign-in"} onClick={()=>setOpenUserMenu(false)}>
                            <li>Log In</li>
                            </Link>
                            <Link href={"/sign-up"} onClick={()=>setOpenUserMenu(false)}>
                            <li>Sign Up</li>
                            </Link>
                       </ul>
                    ):(
                        <ul>
                            {userLinks.map((link, index)=>(
                                <Link key={index} href={link.route} onClick={()=>setOpenUserMenu(false)}>
                                    <li className="text-lg font-normal ">{link.label}</li>
                                </Link>
                            ))}
                            <li
                                className="cursor-pointer"
                                onClick={() => signOut()}
                                >
                                Sign Out
                            </li>
                        </ul>
                    )}
                </div>
            )}
        </div>
        {/* MOBILE MENU */}
        {openMobileMenu && (
            <div className="md:hidden">
                <div className=" absolute right-5 w-48 z-[99999] rounded-md py-2 shadow-md text-center bg-gray-900 text-white">
                    <ul className="flex flex-col gap-5 ">
                        {mainLinks?.map((item, index)=>(
                            <Link key={index} href={item.route}>
                                <li className="text-lg font-normal ">{item.label}</li>
                            </Link>
                        ))}
                        {!user ? (
                         <>
                            <Link href={"/sign-in"} onClick={()=>setOpenUserMenu(false)}>
                            <li className="text-lg font-normal">Log In</li>
                            </Link>
                            <Link href={"/sign-up"} onClick={()=>setOpenUserMenu(false)}>
                            <li className="text-lg font-normal">Sign Up</li>
                            </Link>
                       </>
                    ):(
                        <>
                            {userLinks.map((link, index)=>(
                                <Link key={index} href={link.route} onClick={()=>setOpenUserMenu(false)}>
                                    <li className="text-lg font-normal ">{link.label}</li>
                                </Link>
                            ))}
                            <li
                                className="text-lg font-normal cursor-pointer "
                                onClick={() => signOut()}
                                >
                                Sign Out
                            </li>
                        </>
                    )}
                    </ul>

                </div>
                
            </div>
        )}

    </nav>
  )
}

export default NavBar
