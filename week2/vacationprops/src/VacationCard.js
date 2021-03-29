import React from "react"

function VacationCard(props) {
    return (
        <div className="vacation-card">
            <h3>{props.place}</h3>
            <p>{props.price}</p>
            <p>{props.timeToGo}</p>
        </div>
    )
}

export default VacationCard