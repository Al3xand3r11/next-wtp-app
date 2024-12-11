import { Scores } from "../Data/SportsData";

export default function Scoreboard () {
    return (
        <div className="mt-6 mr-6 justify-items-end grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8 font-bold">
            {Scores.map(Scores => 
                <div key={Scores.id} className="border-black bg-blue text-black rounded-xl w-72 h-40 bg-opacity-50 text-end backdrop-blur-md drop-shadow-[0_35px_35px_rgba(0,0,0,0.50)]">
                    <div className="p-4">
                        <div className="flex flex-row justify-between">
                            <h1>{Scores.homeTeam} </h1>
                            <h1>{Scores.homeScore} </h1>
                        </div>
                        <div className="flex flex-row justify-between">
                            <h2>{Scores.awayTeam}  </h2>
                            <h2>{Scores.awayScore}</h2>
                        </div>
                    
                   
                        <div className="mt-4">
                            <h2>{Scores.quarter} {Scores.time}</h2>
                            <h3>{Scores.arena}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}