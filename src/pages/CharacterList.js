import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// List styling:
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

// components:
import characterslist from '../css/characters-list.css'

const CharacterList = () => {
    const [characters, setCharacters] = useState([])

    const linkStyling = {
        textDecoration: "none",
        color: 'White',
        fontFamily: 'Gotham Rounded, sans-serif',
        fontSize: 30
    }

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => {
                const chars = data.results
                setCharacters(chars)
            })
    }, [])

    return (
        <div>
            <h1 className='title'>Starwars</h1>

            <List sx={{ maxWidth: 360 }}>
                <ListItem disablePadding>
                    <ListItemText primary={characters.map((char, index) => {
                        return (
                            <div key={index} className='char-name-list'>
                                <Link to={'/character'} style={linkStyling} state={{ data: char }}>
                                    <ListItemButton sx={{ justifyContent: 'center' }}>
                                        {char.name}
                                    </ListItemButton>
                                </Link>
                            </div>
                        )
                    })} />
                </ListItem>
            </List>
        </div>
    )
}

export default CharacterList