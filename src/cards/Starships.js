import { Card, CardContent } from '@mui/material/'

const Starships = ({ data, page }) => {
    return (
        <Card className="card">
            <CardContent>
                <p className='char-info'>Starships Info</p>
                <p className='char-stat'>Name: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Model: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Price: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Max speed: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Crew: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Passengers: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Created: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Class: <span className='char-stat-span'></span></p>
            </CardContent>
        </Card>
    )
}

export default Starships;