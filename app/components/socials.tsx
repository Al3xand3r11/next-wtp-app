import Image from "next/image"

export default function Socials () {
    return (
        <div className="flex flex-row  pt-4 justify-evenly">
            <a target="_blank" href="https://instagram.com/whatstheplaypodcast">
            <Image
                src={`/Instagram.svg`}
                alt="Instagram"
                height="100"
                width="100"
                className="transfrom transition duration-300 hover:scale-125 pt-12"
            />
            </a>
            <a target="_blank" href="https://twitter.com/WTPlayPodcast">
            <Image
                src={`/Twitter.svg`}
                alt="Twitter"
                height="100"
                width="100"
                className="transfrom transition duration-300 hover:scale-125 pt-12"
            />
            </a>
            <a target="_blank" href="https://www.youtube.com/@whatstheplayproductions/videos">
            <Image
                src={`/Youtube.svg`}
                alt="Youtube"
                height="100"
                width="100"
                className="transfrom transition duration-300 hover:scale-125 pt-12"
            />
            </a>
            <a target="_blank" href="https://tiktok.com/@whatstheplaypod">
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