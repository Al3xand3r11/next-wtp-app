import Image from "next/image"

export default function Socials () {
    return (
        <div className="flex flex-row  pt-4 justify-evenly">
            <Image
                src={`/Instagram.svg`}
                alt="Instagram"
                height="100"
                width="100"
                className="transfrom transition duration-300 hover:scale-125 pt-12"
            />
            <Image
                src={`/Twitter.svg`}
                alt="Twitter"
                height="100"
                width="100"
                className="transfrom transition duration-300 hover:scale-125 pt-12"
            />
            <Image
                src={`/Youtube.svg`}
                alt="Youtube"
                height="100"
                width="100"
                className="transfrom transition duration-300 hover:scale-125 pt-12"
            />
            <Image
                src={`/TikTok.svg`}
                alt="TikTok"
                height="90"
                width="90"
                className="transfrom transition duration-300 hover:scale-125 pt-12"
            />
        </div>
    )
}