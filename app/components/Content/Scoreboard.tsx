import { Scores } from "../Data/SportsData";

export default function Scoreboard () {
    return (
        <>
            {Scores.map(Scores => 
                <div key={Scores.id} className="border bg-black text-white">
                    <h1>{Scores.homeScore} {Scores.awayScore}</h1>
                    <h2>{Scores.homeTeam} {Scores.awayTeam}</h2>
                    <h2>{Scores.quarter} {Scores.time}</h2>
                    <h3>{Scores.arena}</h3>
                </div>
            )}
        </>
    )
}