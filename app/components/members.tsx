import Image from "next/image"

export default function Members () {
    return (
        <div id="Members" className="h-screen">
            <div className="pt-16 text-left font-semibold text-5xl pl-20">
                <h1>Meet the Members</h1>
                <div className="justify-between">
                    <div className="grid grid-cols-3 ">
                        <div className="flex items-center justify-center mt-12">
                            <div
                                className="relative block  bg-gray-900 group rounded-3xl"
                            >
                                <Image
                                    className="absolute inset-0 object-cover rounded-3xl
                                            w-full h-full group-hover:opacity-50"
                                    src={`/Brian.jpeg`}
                                    height={300}
                                    width={300}
                                    alt="Brian"
                                />
                                <div className="relative p-5">
                                    <div className="mt-40">
                                        {/* Hidden content */}
                                        <div
                                            className="transition-all transform 
                                            translate-y-8 opacity-0 
                                            group-hover:opacity-100 
                                            group-hover:translate-y-0"
                                        >
                                            <div className="p-2">
                                                <p className="text-lg text-white">
                                                Brian - Football, Baseball,<br/> Basketball
                                                </p>
                                                <button
                                                    className="px-4 py-2 text-sm 
                                                        text-white bg-blue rounded-lg hover:bg-red-400"
                                                >
                                                    Instagram
                                                </button>
                                            </div>
                                        </div>
                                        {/* End of hidden content */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-12 rounded-full">
                            <div
                                className="relative block  bg-gray-900 group rounded-3xl"
                            >
                                <Image
                                    className="absolute inset-0 object-cover rounded-3xl
                                            w-full h-full group-hover:opacity-50"
                                    src={`/CT.jpg`}
                                    height={300}
                                    width={300}
                                    alt="CT"
                                />
                                <div className="relative p-5">
                                    <div className="mt-40">
                                        {/* Hidden content */}
                                        <div
                                            className="transition-all transform 
                                            translate-y-8 opacity-0 
                                            group-hover:opacity-100 
                                            group-hover:translate-y-0"
                                        >
                                            <div className="p-2">
                                                <p className="text-lg text-white">
                                                Christian - Football, Baseball,<br/> Basketball
                                                </p>
                                                <button
                                                    className="px-4 py-2 text-sm 
                                                        text-white bg-blue rounded-lg hover:bg-red-400"
                                                >
                                                    Instagram
                                                </button>
                                            </div>
                                        </div>
                                        {/* End of hidden content */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-12">
                            <div
                                className="relative block  bg-gray-900 group rounded-3xl"
                            >
                                <Image
                                    className="absolute inset-0 object-cover rounded-3xl
                                            w-full h-full group-hover:opacity-50"
                                    src={`/JB.jpeg`}
                                    height={300}
                                    width={300}
                                    alt="JB"
                                />
                                <div className="relative p-5">
                                    <div className="mt-40">
                                        {/* Hidden content */}
                                        <div
                                            className="transition-all transform 
                                            translate-y-8 opacity-0 
                                            group-hover:opacity-100 
                                            group-hover:translate-y-0"
                                        >
                                            <div className="p-2">
                                                <p className="text-lg text-white">
                                                Demarco - Basketball, Football
                                                </p>
                                                <button
                                                    className="px-4 py-2 text-sm 
                                                        text-white bg-blue rounded-lg hover:bg-red-400" 
                                                >
                                                    Instagram
                                                </button>
                                            </div>
                                        </div>
                                        {/* End of hidden content */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-12">
                            <div
                                className="relative block  bg-gray-900 group rounded-3xl"
                            >
                                <Image
                                    className="absolute inset-0 object-cover rounded-3xl
                                            w-full h-full group-hover:opacity-50"
                                    src={`/JG.jpeg`}
                                    height={300}
                                    width={300}
                                    alt="JG"
                                />
                                <div className="relative p-5">
                                    <div className="mt-40">
                                        {/* Hidden content */}
                                        <div
                                            className="transition-all transform 
                                            translate-y-8 opacity-0 
                                            group-hover:opacity-100 
                                            group-hover:translate-y-0"
                                        >
                                            <div className="p-2">
                                                <p className="text-lg text-white">
                                                Jalen - Baseball, Football, <br/> Basketball
                                                </p>
                                                <button
                                                    className="px-4 py-2 text-sm 
                                                        text-white bg-blue rounded-lg hover:bg-red-400"
                                                >
                                                    Instagram
                                                </button>
                                            </div>
                                        </div>
                                        {/* End of hidden content */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-12">
                            <div
                                className="relative block  bg-gray-900 group rounded-3xl"
                            >
                                <Image
                                    className="absolute inset-0 object-cover rounded-3xl
                                            w-full h-full group-hover:opacity-50"
                                    src={`/Nate.jpeg`}
                                    height={300}
                                    width={300}
                                    alt="Nate"
                                />
                                <div className="relative p-5">
                                    <div className="mt-40">
                                        {/* Hidden content */}
                                        <div
                                            className="transition-all transform 
                                            translate-y-8 opacity-0 
                                            group-hover:opacity-100 
                                            group-hover:translate-y-0"
                                        >
                                            <div className="p-2">
                                                <p className="text-lg text-white">
                                                    Nate - Football, Soccer    
                                                </p>
                                                <button
                                                    className="px-4 py-2 text-sm 
                                                        text-white bg-blue rounded-lg hover:bg-red-400"
                                                >
                                                    Instagram
                                                </button>
                                            </div>
                                        </div>
                                        {/* End of hidden content */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center mt-12">
                            <div
                                className="relative block  bg-gray-900 group rounded-3xl"
                            >
                                <Image
                                    className="absolute inset-0 object-cover rounded-3xl
                                            w-full h-full group-hover:opacity-50"
                                    src={`/Caleb.jpeg`}
                                    height={300}
                                    width={300}
                                    alt="Caleb"
                                />
                                <div className="relative p-5">
                                    <div className="mt-40">
                                        {/* Hidden content */}
                                        <div
                                            className="transition-all transform 
                                            translate-y-8 opacity-0 
                                            group-hover:opacity-100 
                                            group-hover:translate-y-0"
                                        >
                                            <div className="p-2">
                                                <p className="text-lg text-white">
                                                Caleb - Videographer, Basketball, <br/> Football
                                                </p>
                                                <button
                                                    className="px-4 py-2 text-sm 
                                                        text-white bg-blue rounded-lg hover:bg-red-400"
                                                >
                                                    Instagram
                                                </button>
                                            </div>
                                        </div>
                                        {/* End of hidden content */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}