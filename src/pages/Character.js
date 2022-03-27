import React, { useState } from "react"
import { Link, useLocation } from 'react-router-dom'

// Button styling:
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import character from '../css/character.css'

const Character = () => {
    const location = useLocation()
    const { data } = location.state
    const linkStyling = {
        textDecoration: "none",
        color: 'White',
        fontWeight: '600'
    }

    return (
        <div>
            <div>
                <h1>{data.name}</h1>
            </div>

            <div className='back-button'>
                <Stack direction="row" spacing={2}>
                    <Button variant="contained">
                        <Link to={'/'} style={linkStyling}>
                            Back!
                        </Link>
                    </Button>
                </Stack>
            </div>
        </div>
    )
}

export default Character