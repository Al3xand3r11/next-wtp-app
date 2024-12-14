import Image from "next/image"

export default function Hero () {
    return (
            <div id="#" className="h-auto w-full relative flex ">
                <div className="flex ">
                    <div className="ml-4 w-full">
                    <div className="text-7xl lg:text-[256px] font-extrabold text-center lg:text-left opacity-70 leading-none hover:cursor-default slide-right mt-8 lg:mt-0">
                    What&apos;s The <br/> <div className="text-blue"> Play </div>  Productions
                    </div>
                    <div className="text-lg text-center lg:text-2xl lg:absolute lg:bottom-72 lg:right-16 slide-left lg:mx-0 mx-4 mt-8 lg:mt-0 w-1/2">
                    An elite casts of analysts with a multitude of talents within the sports space. Creating youtube videos, podcasts episodes and bitesized
                    opinions that compete with the best. If you&apos;re looking for fantasy info, mock drafts, and weekly predictions, you&apos;re in the right place.
                    </div>
                    </div>
                </div>
            </div>
    )
}