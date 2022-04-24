import { Card, CardContent } from '@mui/material/'

const Starships = ({ data }) => {
    return (
        <Card className="card">
            <CardContent>
                <p className='char-info'>Starship</p>
                <p className='char-stat'>Name: <span className='char-stat-span'>{data.name}</span></p>
                <p className='char-stat'>Model: <span className='char-stat-span'>{data.model}</span></p>
                <p className='char-stat'>Created: <span className='char-stat-span'>{data.created}</span></p>
                <p className='char-stat'>Price-in-credits: <span className='char-stat-span'>{data.cost_in_credits}</span></p>
                <p className='char-stat'>Max speed: <span className='char-stat-span'>{data.max_atmosphering_speed}</span></p>
                <p className='char-stat'>Crew: <span className='char-stat-span'>{data.crew}</span></p>
                <p className='char-stat'>Passengers: <span className='char-stat-span'>{data.passengers}</span></p>
                <p className='char-stat'>Class: <span className='char-stat-span'>{data.starship_class}</span></p>
            </CardContent>
        </Card>
    )
}

export default Starships;