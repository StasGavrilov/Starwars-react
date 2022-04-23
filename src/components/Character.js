import React from "react"
import { Link, useLocation } from 'react-router-dom'
import { Button, Card, CardContent, Typography } from '@mui/material/'

const Character = () => {
    const location = useLocation()
    const { data } = location.state
    const { page } = location.state

    return (
        <>
            <h1 className='char-name'>{data.name}</h1>

            <Card className="card">
                <CardContent sx={{ fontFamily: 'Gotham Rounded, sans-serif' }}>
                    <p className='char-info'>Character Info</p>
                    <p className='char-stat'>Height: <span className='char-stat-span'>{data.height}</span></p>
                    <p className='char-stat'>Mass: <span className='char-stat-span'>{data.mass}</span></p>
                    <p className='char-stat'>Hair: <span className='char-stat-span'>{data.hair_color}</span></p>
                    <p className='char-stat'>Skin: <span className='char-stat-span'>{data.skin_color}</span></p>
                    <p className='char-stat'>Birth: <span className='char-stat-span'>{data.birth_year}</span></p>
                    <p className='char-stat'>Gender: <span className='char-stat-span'>{data.gender}</span></p>
                </CardContent>
            </Card>

            <div className='back-button'>
                <Button variant="contained">
                    <Link to={`/?page=${page}`} className='back-btn-link'>
                        Back!
                    </Link>
                </Button>
            </div>
        </>
    )
}

export default Character