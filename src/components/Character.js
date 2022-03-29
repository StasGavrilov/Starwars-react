import React from "react"
import { Link, useLocation } from 'react-router-dom'
import { Button, Card, CardContent, Typography } from '@mui/material/'
import character from '../css/character.css'

const Character = () => {
    const location = useLocation()
    const { data } = location.state
    const linkStyling = { textDecoration: "none", color: 'White', fontFamily: 'Gotham Rounded, sans-serif' }

    return (
        <div>
            <h1 className='char-name'>{data.name}</h1>

            <div className="card">
                <Card sx={{ marginBottom: 1 }}>
                    <CardContent>
                        <Typography component={'div'} sx={{ fontFamily: 'Gotham Rounded, sans-serif' }}>
                            <div className='char-info'>Character Info</div>
                            <span className='char-stat'>Height:</span> {data.height}
                            <br />
                            <span className='char-stat'>Mass:</span> {data.mass}
                            <br />
                            <span className='char-stat'>Hair:</span> {data.hair_color}
                            <br />
                            <span className='char-stat'>Skin:</span> {data.skin_color}
                            <br />
                            <span className='char-stat'>Birth:</span> {data.birth_year}
                            <br />
                            <span className='char-stat'>Gender:</span> {data.gender}
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
            </div>

            <div className='back-button'>
                <Button variant="contained">
                    <Link to={'/'} style={linkStyling}>
                        Back!
                    </Link>
                </Button>
            </div>
        </div>
    )
}

export default Character