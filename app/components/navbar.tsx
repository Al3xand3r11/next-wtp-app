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
        <nav className=" bg-opacity-0">
            <div className="max-w-5xl mx-auto justify-between pt-3 ">
            <div className="flex h-16 md:flex justify-between">
            <span className="text-2xl text-white font-semibold">What's The Play Productions</span>
                <div className="flex space-x-6 text-white">
                    <a href="#">Home</a>
                    <a href="#Stats">Members</a>
                    <a href="#Members">Articles</a>
                </div>
            </div>
        </div>
        </nav>
    )
}