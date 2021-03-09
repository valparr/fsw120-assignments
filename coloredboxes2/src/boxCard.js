import React from 'react'

function boxCard(props) {
    return (
        <div style={{backgroundColor:props.bgcolor, color:props.color, textAlign:"center", }}>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
            <p>{props.description}</p>
        </div>
  )
}

export default boxCard