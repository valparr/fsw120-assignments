import React from 'react'
import { default as data } from './data.json'
import SuperHero from './SuperHero.js'

function SuperHeroList() {
    const heroComponents = data.map(data => <SuperHero 
        imageName={data.imageName}
        name={data.name}
        show={data.show}
        catchPhrase={data.catchPhrase}
        bgcolor={data.bgcolor}
        color={data.color}
    />)
    return (
        <div>
            {heroComponents}
        </div>
    );
}

export default SuperHeroList