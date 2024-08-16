import Image from "next/image"

export default function Footer () {
    return (
        <footer>
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <Image src={`/Logo.png`} alt="Logo" width={60} height={60} className='pr-2'/>
                        <span className="self-center text-2xl font-semibold whitespace-nowrap ">What`&apos;`s The Play</span>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a target="_blank" href="https://open.spotify.com/show/6nLwog5JRvjJqJvvKYrkNf" rel="noopener" className="hover:underline me-4 md:me-6">Podcasts</a>
                        </li>
                        <li>
                            <a target="_blank" href="https://www.youtube.com/@whatstheplayproductions/videos" rel="noopener" className="hover:underline">Youtube</a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div>
                    <h1>
                        Made in Next.Js
                    </h1>
                </div>
            </div>
        </footer>
    )
}