import React, { useEffect, useState } from 'react';

// List styling:
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import ListItemIcon from '@mui/material/ListItemIcon';
import StarIcon from '@mui/icons-material/Star';

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
                <ListItemText primary={characters.map(char => {
                    return <ListItemButton>
                        {char.name}
                    </ListItemButton>
                })} />
            </ListItem>
        </List>
    )
}

export default CharacterList