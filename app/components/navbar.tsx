'use client'
import React, {useState} from "react";
import {
    FaBars,
  } from 'react-icons/fa';
  import { IoIosClose } from "react-icons/io";

export default function NavBar () {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const handleScroll = () => {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        })
    }

    return (
        <nav className="z-50 w-full fixed">
            <div className="max-w-5xl mx-auto pt-2 ">
                <div className="flex h-24 md:flex hidden items-center justify-between pb-16">
                    <a href="#">
                    <span className="text-2xl text-white hover:text-blue font-semibold">What&apos;s The Play Productions</span>
                    </a>
                    <div className="flex space-x-4 text-white">
                        <a href="#Members" className="hover:text-blue">Members</a>
                        <a href="#Content" className="hover:text-blue">Articles</a>
                        <a href="#Newsletter" className="hover:text-blue">Newsletter</a>
                    </div>
                </div>
            </div>
            <div onClick={handleNav} className="md:hidden z-10">
                <FaBars size={30} className="mr-4 cursor-ponter pl-2" />
            </div>
            {/* Mobile Menu */}
            <div 
            className={
                nav 
                ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col" 
                : "absolute top-0 h-screen left-[-100%] ease-in"
            }
        >
            <div
              className="hidden max-lg:block fixed right-0  px-8 py-4 cursor-pointer"
              onClick={() => {
                setNav(!nav);
              }}
            >
              <IoIosClose className={
                nav
                ?
                "text-4xl md:hidden"
                :
                "text-4xl hidden md:hidden"
                } />
            </div>
            <ul className="h-full w-full text-center pt-12">
                <li className='text-2xl py-8'>
                    <a href='#'>Home</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='#Members'>Members</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='#Content'>Articles</a>
                </li>
                <li className='text-2xl py-8'>
                    <a href='#Newsletter'>Newsletter</a>
                </li>
            </ul>
                
        </div>
        </nav>
    )
}