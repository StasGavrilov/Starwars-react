import React from "react"
import { Link, useLocation } from 'react-router-dom'

// Button styling:
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Card styling:
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import character from '../css/character.css'

const Character = () => {
    const location = useLocation()
    const { data } = location.state
    const linkStyling = {
        textDecoration: "none",
        color: 'White',
        fontFamily: 'Gotham Rounded, sans-serif'
    }

    return (
        <div>
            <h1>{data.name}</h1>

            <Card sx={{ width: 165, marginBottom: 1 }}>
                <CardContent>
                    <Typography sx={{ fontFamily: 'Gotham Rounded, sans-serif' }}>
                        <div className='info'>Character Info:</div>
                        Height: {data.height}
                        <br />
                        Mass: {data.mass}
                        <br />
                        Hair: {data.hair_color}
                        <br />
                        Skin: {data.skin_color}
                        <br />
                        Birth: {data.birth_year}
                        <br />
                        Gender: {data.gender}
                        <br />
                    </Typography>
                </CardContent>
            </Card>

            <Button variant="contained" size="small">
                <Link to={'/'} style={linkStyling}>
                    Back!
                </Link>
            </Button>
        </div>
    )
}

export default Character