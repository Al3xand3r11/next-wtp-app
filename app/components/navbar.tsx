'use client'
import React, {useState} from "react";

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
        <nav>
            <div className="max-w-5xl mx-auto px-4 justify-between ">
            <div className="flex items-center justify-between h-16 hidden md:flex">
            <span className="text-2xl text-white font-semibold">What's The Play Productions</span>
                <div className="flex space-x-4 text-white">
                    <a href="#">Home</a>
                    <a href="#Stats">Info</a>
                    <a href="#Members">Members</a>
                    <a href="#Contact">Contact</a>
                </div>
            </div>
        </div>
        </nav>
    )
}