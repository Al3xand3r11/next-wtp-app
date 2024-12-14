import Image from "next/image"
import { Reveal } from "./ui/Reveal"
import Articles from "./Content/Articles"
import Scoreboard from "./Content/Scoreboard"

export default function Content () {
    return (
        <div id="Content" className="h-auto">
            <div className="flex justify-between view">
                <div className="section">
                    <Articles/>
                </div>
                
            

            </div>
        </div>

    )
}