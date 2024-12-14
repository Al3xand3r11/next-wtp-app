'use client'
import { useState } from "react"

export default function Members () {
    const [isHover, setIsHover] = useState<boolean>(false);
    const [isCalebHover, setCalebHover] = useState<boolean>(false);
    const [isChristianHover, setChristianHover] = useState<boolean>(false);
    const [isDemarcoHover, setDemarcoHover] = useState<boolean>(false);
    const [isJalenHover, setJalenHover] = useState<boolean>(false);
    const [isNateHover, setNateHover] = useState<boolean>(false);


    const handleOnMouseOver =  () => {
        setIsHover(true)
    }

    const handleMouseOut = () => {
        setIsHover(false)
    }

    const handleCalebIn = () => {
        setCalebHover(true)
    }
    const handleCalebOut = () => {
        setCalebHover(false)
    }
    const handleChristianIn = () => {
        setChristianHover(true)
    }
    const handleChristianOut = () => {
        setChristianHover(false)
    }
    const handleDemarcoIn = () => {
        setDemarcoHover(true)
    }
    const handleDemarcoOut = () => {
        setDemarcoHover(false)
    }
    const handleJalenIn = () => {
        setJalenHover(true)
    }
    const handleJalenOut = () => {
        setJalenHover(false)
    }
    const handleNateIn = () => {
        setNateHover(true)
    }
    const handleNateOut = () => {
        setNateHover(false)
    }

    return (
        <>
            <div className="view text-center text-7xl lg:text-[128px] font-extrabold mt-24">
                <div className="section">
                <h1 className=" opacity-30 hover:opacity-100 hover:cursor-default" onMouseOver={handleOnMouseOver} onMouseOut={handleMouseOut}>
                    Brian
                </h1>
                {isHover &&
                    <p className="text-xl font-semibold">
                    A lifelong Celtics, Yankees and Giants fan. The writer of Brian&apos;s Deductions. Analyst for the NBA, MLB NFL, WWE and WNBA.
                    </p>
                }
                <hr className="w-3/4 m-auto h-12"/>
                </div>
                <div className="section">
                <h1 className="opacity-30 hover:opacity-100 hover:cursor-default" onMouseOver={handleCalebIn} onMouseOut={handleCalebOut}>
                    Caleb
                </h1>
                {isCalebHover &&
                    <p className="text-xl font-semibold">
                    Our videographer, a Ravens and Thunder fan. The main one behind the camera.
                    </p>
                }
                <hr className="w-3/4 m-auto h-12"/>
                </div>
                <div className="section">
                <h1 className="opacity-30 hover:opacity-100 hover:cursor-default" onMouseOver={handleChristianIn} onMouseOut={handleChristianOut}>
                    Christian
                </h1>
                {isChristianHover &&
                    <p className="text-xl font-semibold">
                    Unfortunately a Commanders and Braves fan. Luckily a Celtics with valuable insight on the NBA, NFL, and the WWE.
                    </p>
                }
                <hr className="w-3/4 m-auto h-12"/>
                </div>
                <div className="section">
                <h1 className="opacity-30 hover:opacity-100 hover:cursor-default" onMouseOver={handleDemarcoIn} onMouseOut={handleDemarcoOut}>
                    Demarco
                </h1>
                {isDemarcoHover &&
                    <p className="text-xl font-semibold">
                    A Celtics fan with humor to add. An NBA anylyst with the occasion NFL opinion.
                    </p>
                }
                <hr className="w-3/4 m-auto h-12"/>
                </div>
                <div className="section">
                <h1 className="opacity-30 hover:opacity-100 hover:cursor-default" onMouseOver={handleJalenIn} onMouseOut={handleJalenOut}>
                    Jalen
                </h1>
                {isJalenHover &&
                    <p className="text-xl font-semibold">
                    A Cardinals fan for good reason. While the rest of his fandom lies in LA with the Dodgers and Lakers. Adept at the NBA, NFL and MLB.
                    </p>
                }
                <hr className="w-3/4 m-auto h-12"/>
                </div>
                <div className="section">
                <h1 className="opacity-30 hover:opacity-100 hover:cursor-default" onMouseOver={handleNateIn} onMouseOut={handleNateOut}>
                    Nate
                </h1>
                {isNateHover &&
                    <p className="text-xl font-semibold">
                    The only one who cares about the beautiful game. A Celtics fan with insight on the EPL, NBA and WWE.
                    </p>
                }
                <hr className="w-3/4 m-auto h-12"/>
                </div>
            </div>
        </>
    )
}