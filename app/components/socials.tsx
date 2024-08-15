import Image from "next/image"

export default function Socials () {
    return (
        <div className="flex flex-col md:flex-row  pt-4 justify-center pl-44 md:pl-0 md:justify-evenly h-auto">
            <a target="_blank" href="https://www.instagram.com/whatstheplayproductions/" rel="noopener">
            <Image
                src={`/Instagram.svg`}
                alt="Instagram"
                height="100"
                width="100"
                className="transfrom transition duration-300 hover:scale-125 pt-12"
            />
            </a>
            <a target="_blank" href="https://twitter.com/WTPlayPodcast" rel="noopener">
            <Image
                src={`/Twitter.svg`}
                alt="Twitter"
                height="100"
                width="100"
                className="transfrom transition duration-300 hover:scale-125 pt-12"
            />
            </a>
            <a target="_blank" href="https://www.youtube.com/@whatstheplayproductions/videos" rel="noopener">
            <Image
                src={`/Youtube.svg`}
                alt="Youtube"
                height="100"
                width="100"
                className="transfrom transition duration-300 hover:scale-125 pt-12"
            />
            </a>
            <a target="_blank" href="https://tiktok.com/@whatstheplaypod" rel="noopener">
            <Image
                src={`/TikTok.svg`}
                alt="TikTok"
                height="90"
                width="90"
                className="transfrom transition duration-300 hover:scale-125 pt-12"
            />
            </a>
        </div>
    )
}