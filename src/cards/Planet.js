import { Card, CardContent } from '@mui/material/'

const Planet = ({ data, page }) => {
    return (
        <Card className="card">
            <CardContent>
                <p className='char-info'>Planet Info</p>
                <p className='char-stat'>Name: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Population: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Gravity: <span className='char-stat-span'></span></p>
                <p className='char-stat'>Created: <span className='char-stat-span'></span></p>
            </CardContent>
        </Card>
    )
}

export default Planet;