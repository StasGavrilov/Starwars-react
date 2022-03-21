import React, { useState } from 'react';
import chars from '../css/chars.css'

const Character = () => {
    const [characters, setCharacters] = useState([])

    fetch('https://swapi.dev/api/people/')
        .then(response => response.json())
        .then(data => {
            const chars = data.results

            const people = chars.map(char => {
                return char.name
            })
            setCharacters(people)
        })

    return (
        <div className='container'>
            {characters}
        </div>
    )
}

export default Character