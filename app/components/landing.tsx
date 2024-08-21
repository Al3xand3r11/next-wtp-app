import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import anime from 'animejs'

type LandingProps = {
    finishLoading: any
  };


const Landing = ({finishLoading}: LandingProps) => {
    const [isMounted, setIsMounted] = useState(false);

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        })

        loader.add({
            targets: "#logo",
            delay: 0,
            scale: 1,
            duration: 2000,
            easing: "easeInOutBounce",
        })
    }

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10)
        animate()
        return () => clearTimeout(timeout)
    },[])
    
    
    return(
        <div
            className='flex h-screen items-center justify-center'
        >
            <Image id="logo" src="/WTP.png" alt="logo" width={400} height={4000}/>
        </div>
    )
}

export default Landing;