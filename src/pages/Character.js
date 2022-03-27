import React, { useState } from "react"
import { Link, useLocation } from 'react-router-dom'

// Button styling:
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Card styling:
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import character from '../css/character.css'

const Character = () => {
    const location = useLocation()
    const { data } = location.state
    const linkStyling = {
        textDecoration: "none",
        color: 'White',
        fontWeight: '500'
    }

    return (
        <div>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        Gender: {data.gender}
                    </Typography>
                    <Typography variant="h5" component="div">
                        <h1>{data.name}</h1>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Birth: {data.birth_year}
                    </Typography>
                    <Typography variant="body2">
                        Height: {data.height}
                        <br />
                        Mass: {data.mass}
                        <br />
                        Skin: {data.skin_color}
                        <br />
                        Hair: {data.hair_color}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Stack direction="row" spacing={2}>
                        <Button variant="contained" size="small">
                            <Link to={'/'} style={linkStyling}>
                                Back!
                            </Link>
                        </Button>
                    </Stack>
                </CardActions>
            </Card>
        </div>
    )
}

export default Character