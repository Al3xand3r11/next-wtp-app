'use client'
import React, {useState} from "react";
import Link from "next/link";
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
        <nav className="z-50 w-full h-auto">
            <div className=" mx-auto ">
                <div className="flex md:flex hidden items-center justify-between mx-8 slide-in">
                    <a href="#">
                    <span className="text-4xl text-white hover:text-blue font-semibold hover:ease-in">What&apos;s The Play Productions</span>
                    </a>
                    <a href="#Newsletter" className="px-3 py-2.5 relative group overflow-hidden font-medium border text-white w-64 text-center mt-6">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-grey text-2xl">Newsletter</span>
                    </a>
                </div>
            </div>
        </nav>
    )
}