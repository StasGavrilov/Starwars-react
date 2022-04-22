import React from "react"
import { Link, useLocation } from 'react-router-dom'
import { Button, Card, CardContent, Typography } from '@mui/material/'

const Character = () => {
    const location = useLocation()
    const { data } = location.state

    return (
        <>
            <h1 className='char-name'>{data.name}</h1>

            <Card className="card">
                <CardContent>
                    <Typography component='div' sx={{ fontFamily: 'Gotham Rounded, sans-serif' }}>
                        <div className='char-info'>Character Info</div>
                        <div className='char-stat'>Height: <span className='char-stat-span'>{data.height}</span></div>
                        <div className='char-stat'>Mass: <span className='char-stat-span'>{data.mass}</span></div>
                        <div className='char-stat'>Hair: <span className='char-stat-span'>{data.hair_color}</span></div>
                        <div className='char-stat'>Skin: <span className='char-stat-span'>{data.skin_color}</span></div>
                        <div className='char-stat'>Birth: <span className='char-stat-span'>{data.birth_year}</span></div>
                        <div className='char-stat'>Gender: <span className='char-stat-span'>{data.gender}</span></div>
                    </Typography>
                </CardContent>
            </Card>

            <div className='back-button'>
                <Button variant="contained">
                    <Link to={`/?page=${location.state.page}`} className='back-btn-link'>
                        Back!
                    </Link>
                </Button>
            </div>
        </>
    )
}

export default Character