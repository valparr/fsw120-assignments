import React from 'react'
import './styles.css'

import VacationSpots from './VacationSpots'

function App() {
    let vacationComponents = VacationSpots.map (VacationCard => <VacationCard key={VacationCard.id} place={VacationCard.place} price={VacationCard.price} timeToGo={VacationCard.timeToGo} />)

    return (
        <div>
            {vacationComponents}  
        </div>
    )
}

export default App