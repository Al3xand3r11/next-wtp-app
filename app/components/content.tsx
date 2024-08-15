import Image from "next/image"

export default function Content () {
    return (
        <div id="Content" className="h-auto ">
            <h1 className="pb-16 text-right font-semibold text-5xl pr-2 md:pr-24 pt-12">Content</h1>
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4 ">
                <div className=" justify-items-center w-9/12 pl-20 ">
                <div className="flex flex-row transfrom transition duration-300 hover:scale-110">
                <h1 className="text-3xl">Brian's Deductions -  </h1>
                <a target="_blank" href="https://briansdeductions.com/">
                <Image  className="pl-2 pt-1" height={60} width={40} src={`/File.svg`} alt="article"/>
                </a>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-16" />
                <div className="flex flex-row transfrom transition duration-300 hover:scale-110">
                <h1 className="text-3xl">NBA Rookie Draft -  </h1>
                <a target="_blank" href="https://youtu.be/KRslsVf2heM?si=Stvj07dO_zvH4DzF" rel="noopener">
                <Image  className="pl-2 pt-1" height={60} width={40} src={`/Youtube.svg`} alt="article"/>
                </a>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-16" />
                <div className="flex flex-row transfrom transition duration-300 hover:scale-110">
                <h1 className="text-3xl">NFL Rookie CB Comps - </h1>
                <a target="_blank" href="https://www.instagram.com/p/C54EC-yOn0W/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" rel="noopener">
                <Image  className="pl-2 pt-1" height={60} width={40} src={`/Instagram.svg`} alt="instagram"/>
                </a>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-16" />
                <div className="flex flex-row transfrom transition duration-300 hover:scale-110">
                <h1 className="text-3xl">Latest TikToks - </h1>
                <a target="_blank" href="https://tiktok.com/@whatstheplaypod" rel="noopener">
                <Image  className="pl-2 pt-1" height={60} width={40} src={`/TikTok.svg`} alt="tiktok"/>
                </a>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-16" />
                <div className="flex flex-row transfrom transition duration-300 hover:scale-110">
                <h1 className="text-3xl">Latest Tweets - </h1>
                <a target="_blank" rel="noopener" href="https://twitter.com/WTPlayPodcast">
                <Image  className="pl-2 pt-1" height={60} width={40} src={`/Twitter.svg`} alt="twitter"/>
                </a>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-16" />
                </div>
                <div className="pl-14 md:pl-0">
                <div className=" w-9/12 md:h-4/5 border rounded-xl transfrom transition duration-300 hover:scale-110">
                <a target="_blank" href="https://briansdeductions.com/2024/07/08/what-if-steve-nash-dwelled-in-dallas/">
                    <Image className="rounded-t-xl" src={`/Article.webp`} alt="Article" height={500} width={800} />
                </a>
                <div className="p-5">
                    <a target="_blank" href="https://briansdeductions.com/2024/07/08/what-if-steve-nash-dwelled-in-dallas/">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">What if Steve Nash Dwelled in Dallas?</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-400 md:pt-20">Brian's Deductions - July 8th</p>
                    <a target="_blank" href="https://briansdeductions.com/2024/07/08/what-if-steve-nash-dwelled-in-dallas/" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                </div>
                </div>
                </div>
            </div>
        </div>

    )
}