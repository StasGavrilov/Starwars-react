import { Card, CardContent, Typography } from '@mui/material/'

const Planet = ({ data }) => {
    return (
        <Card className="card">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Home World
                </Typography>
                {/* <p className='char-info'>Home World</p> */}
                <p className='char-stat'>Name: <span className='char-stat-span'>{data.name}</span></p>
                <p className='char-stat'>Created: <span className='char-stat-span'>{data.created}</span></p>
                <p className='char-stat'>Population: <span className='char-stat-span'>{data.population}</span></p>
                <p className='char-stat'>Gravity: <span className='char-stat-span'>{data.gravity}</span></p>
                <p className='char-stat'>Terrain: <span className='char-stat-span'>{data.terrain}</span></p>
                <p className='char-stat'>Climate: <span className='char-stat-span'>{data.climate}</span></p>
            </CardContent>
        </Card>
    )
}

export default Planet;