import Image from "next/image"
import { GoArrowDown } from "react-icons/go";

export default function Hero () {
    return (
            <div className="h-[50rem] w-full bg-black  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_80%,black)]"></div>
                    <div className="static z-20 bg-clip-text text-transparent from-neutral-200 to-neutral-500 py-8">
                        <Image
                            src={`/Ellipse.svg`}
                            alt="blue light"
                            height="300"
                            width="300"
                            className=" absolute -top-6 left-28 -z-40"
                        />
                        <Image
                            src={`/Ellipse.svg`}
                            alt="blue light"
                            height="300"
                            width="300"
                            className=" absolute -bottom-20 right-28 -z-40"
                        />
                        <Image
                            src={`/hero.webp`}
                            alt="hero image"
                            height="1200"
                            width="1200"
                            className="object-contain rounded-2xl z-30"
                        />
                        <div className="absolute bottom-48 right-96">
                        <p className="z-0 text-white  text-2xl pb-2">New NBA Episode</p>
                        <button className="border z-0 text-white hover:text-blue rounded-2xl ml-20 px-4 py-1">Watch Now</button>
                        </div>
                        <div className="text-white bottom-0 flex relative justify-center  ">
                        <GoArrowDown
                            className="transfrom transition duration-300 hover:scale-125 pt-12"
                            size={100}
                        />
                        </div>
                        
                    </div>
            </div>
    )
}