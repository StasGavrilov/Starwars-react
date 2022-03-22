import React, { useEffect, useState } from 'react';

const Character = () => {
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => {
                const chars = data.results
                setCharacters(chars)
            })
    }, [])

    return (
        <ul>
            {characters.map(char => {
                return <li>{char.name}</li>
            })}
        </ul>
    )
}

export default Character