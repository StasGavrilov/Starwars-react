import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// List styling:
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

// components:
import Character from './Character'

const CharacterList = () => {
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
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} aria-label="contacts">
            <ListItem disablePadding>
                <ListItemText primary={characters.map((char, index) => {
                    return (
                        <Link to={'/character'} key={index}>
                            <ListItemButton >
                                {char.name}
                            </ListItemButton>
                        </Link>
                    )
                })} />
            </ListItem>
        </List>
    )
}

export default CharacterList