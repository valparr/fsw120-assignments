import React from "react"
import VacationCard from "./VacationCard"

function App() {
    return (
        <div className="contacts">
            <VacationCard 
                place="Meridian, Idaho" 
                price="$40" 
                timeToGo="Spring"
            />
            <VacationCard 
                place="Cancun" 
                price="$900" 
                timeToGo="Winter"
                />
            <VacationCard 
                place="China" 
                price="$1200" 
                timeToGo="Fall"
            />
            <VacationCard 
                place="Russia" 
                price="$1100" 
                timeToGo="Summer"
            />
            <VacationCard 
                place="Lebonon" 
                price="$400" 
                timeToGo="Spring"
            />
        </div>
    )
}

export default App