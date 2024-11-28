import Image from "next/image"

export default function Hero () {
    return (
            <div id="#" className="h-screen w-full relative flex ">
                <div className="flex ">
                    <div className="ml-4 mt-48 w-1/2">
                    <div className="text-8xl font-extrabold  text-left ">
                        What&apos;s The Play Productions
                    </div>
                    <div className="text-xl w-2/3 mt-4">
                    Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate morbi dolor libero; efficitur elementum mollis luctus. 
                    Maecenas viverra eget potenti a lobortis imperdiet maecenas egestas. Pharetra hac maecenas tristique nulla libero tristique 
                    amet magnis aliquet.
                    </div>
                    <div className="absolute mt-8 items-end">
                    <a href="#_" className="px-5 py-2.5 relative group overflow-hidden font-medium border text-blue w-64 text-center">
                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-black group-hover:h-full opacity-90"></span>
                        <span className="relative group-hover:text-white text-2xl">Members</span>
                    </a>
                    </div>
                    </div>
                    
                    <div className="w-3/5 h-3/4 content-center items-center mt-7 ">
                        <Image
                            src={`/Lebron.png`}
                            alt="Lebron"
                            width={900}
                            height={500}
                            className="rounded-xl drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
    )
}