import { Card, CardContent, Typography } from '@mui/material/'

const Vehicles = ({ data }) => {
    if (Object.keys(data).length === 0) return ''

    return (
        <Card className="card">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Vehicle
                </Typography>
                <p className='char-stat'>Name: <span className='char-stat-span'>{data.name}</span></p>
                <p className='char-stat'>Model: <span className='char-stat-span'>{data.model}</span></p>
                <p className='char-stat'>Created: <span className='char-stat-span'>{data.created}</span></p>
                <p className='char-stat'>Price: <span className='char-stat-span'>{data.cost_in_credits}</span></p>
                <p className='char-stat'>Max speed: <span className='char-stat-span'>{data.max_atmosphering_speed}</span></p>
                <p className='char-stat'>Crew: <span className='char-stat-span'>{data.crew}</span></p>
                <p className='char-stat'>Passengers: <span className='char-stat-span'>{data.passengers}</span></p>
                <p className='char-stat'>Class: <span className='char-stat-span'>{data.vehicle_class}</span></p>
            </CardContent>
        </Card>
    )
}

export default Vehicles;