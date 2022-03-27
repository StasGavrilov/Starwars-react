import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// List styling:
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

// components:
import Character from './Character'
import characterslist from '../css/characters-list.css'

const CharacterList = () => {
    const [characters, setCharacters] = useState([])

    const linkStyling = {
        textDecoration: "none",
        color: 'Black',
        fontWeight: '600'
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
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts">
            <ListItem disablePadding>
                <ListItemText primary={characters.map((char, index) => {
                    return (
                        <div key={index} className='char-name-list'>
                            <Link to={'/character'} style={linkStyling} state={{ data: char }}>
                                <ListItemButton>
                                    {char.name}
                                </ListItemButton>
                            </Link>
                        </div>
                    )
                })} />
            </ListItem>
        </List>
    )
}

export default CharacterList