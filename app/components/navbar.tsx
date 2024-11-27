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
            <div className=" mx-auto pt-2 ">
                <div className="flex h-24 md:flex hidden items-center justify-between pb-16 pt-6 mx-8">
                    <a href="#">
                    <span className="text-4xl text-black hover:text-blue font-semibold hover:ease-in">What&apos;s The Play Productions</span>
                    </a>
                    <div className="flex space-x-4 text-black text-2xl">
                    <a href="#Members" className="hover:text-blue">Home</a>
                        <a href="#Members" className="hover:text-blue">Members</a>
                        <a href="#Content" className="hover:text-blue">Articles</a>
                    </div>
                    <a href="#_" className="px-5 py-2.5 relative group overflow-hidden font-medium border text-blue w-64 text-center">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white text-2xl">Newsletter</span>
                    </a>
                </div>
            </div>
            <div onClick={handleNav} className="md:hidden z-10">
                <FaBars size={30} className="mr-4 cursor-ponter pl-2" />
            </div>
            {/* Mobile Menu */}
            <div 
            className={
                nav 
                ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-black left-0 top-0 w-full h-screen bg-white px-4 py-7 flex flex-col" 
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