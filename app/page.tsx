'use client'
import NavBar from "./components/navbar";
import Hero from "./components/hero";
import Socials from "./components/socials";
import Members from "./components/members";
import Footer from "./components/footer";
import Newsletter from "./components/newsletter";
import Content from "./components/content";
import Landing from "./components/landing";
import { usePathname } from "next/navigation";
import { path } from "animejs"
import { useEffect, useState } from "react";

export default function Home() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [ isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading)
    return
  },[isLoading])
  return (
    <main className="bg-black text-white">
      {isLoading && isHome ? (
        <Landing finishLoading={() => setIsLoading(false)}/>
      ) : (
        <>
        <NavBar/>
        <Hero/>
        <Socials/>
        <Members/>
        <Content/>
        <Newsletter/>
        <Footer/>
        </>
      )}
     
    </main>
  );
}
