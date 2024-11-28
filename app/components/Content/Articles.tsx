import Image from "next/image";

export default function Articles () {
    return (
        <div className="  w-11/12 pl-20 ">
                <h1 className="text-5xl mb-16">Articles</h1>
                <div className="flex flex-row transfrom transition duration-300 hover:scale-110">
                <h1 className="text-3xl">Brian&apos;s Deductions -  </h1>
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
                <Image  className="pl-2 pt-1 " height={60} width={40} src={`/Twitter.svg`} alt="twitter"/>
                </a>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-16" />
                </div>
    )
}