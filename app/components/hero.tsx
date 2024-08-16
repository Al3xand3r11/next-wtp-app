import Image from "next/image"
import { GoArrowDown } from "react-icons/go";
import { Spotlight } from "./ui/spotlight";

export default function Hero () {
    return (
            <div id="#" className="h-[50rem] w-full md:bg-black  bg-dot-white/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center md:bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
                    <div className="static z-20 bg-clip-text text-transparent from-neutral-200 to-neutral-500 py-8">
                    <Spotlight
                        className="-top-40 left-0 md:left-60 md:-top-20 -z-50"
                        fill="#39adf5"
                    />
                        <h1 className="md:hidden text-center  "><span className="font-extrabold text-8xl  pt-24 bg-gradient-to-r from-blue to-sky-400 bg-clip-text">
                            What&apos;s The Play
                        </span>
                        </h1>
                        <div className="hidden md:flex">
                        <Image
                            src={`/Ellipse.svg`}
                            alt="blue light"
                            height="300"
                            width="300"
                            priority
                            className=" md:absolute md:-bottom-20 md:right-28 md:-z-40 "
                        />
                        </div>
                        <div className="pt-20 hidden md:flex">
                        <Image
                            src={`/hero.webp`}
                            alt="hero image"
                            height="1200"
                            width="1200"
                            priority
                            className=" md:object-contain md:rounded-xl md:z-30 "
                        />
                        </div>
                        <div className="md:absolute md:bottom-48 md:right-96 pt-16 md:pt-0 pl-20 md:pl-0 z-50">
                        <p className="z-0 text-white text-lg md:text-2xl pb-2 pl-16 md:pl-0">New NBA Episode</p>
                        <a target="_blank" href="https://youtu.be/rIaFNKuQFOQ?si=wGAziDKMvh8OxL2i">
                        <button className="border z-0 text-white hover:text-blue rounded-2xl ml-20 md:ml-20 px-4 py-1">Watch Now</button>
                        </a>
                        </div>
                        <div className="text-white bottom-0 flex relative justify-center pt-28 md:pt-0 ">
                        <a href="#Members">
                        <GoArrowDown
                            className="transfrom transition duration-300 hover:scale-125 pt-12 md:pt-12"
                            size={100}
                        />
                        </a>
                        </div>
                        
                    </div>
            </div>
    )
}