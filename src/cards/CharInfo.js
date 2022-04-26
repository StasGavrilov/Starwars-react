import { Card, CardContent, Typography } from '@mui/material/'

const CharInfo = ({ data }) => {
    return (
        <Card className="card">
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    Character Description
                </Typography>
                <p className='char-stat'>Height: <span className='char-stat-span'>{data.height}</span></p>
                <p className='char-stat'>Mass: <span className='char-stat-span'>{data.mass}</span></p>
                <p className='char-stat'>Hair: <span className='char-stat-span'>{data.hair_color}</span></p>
                <p className='char-stat'>Skin: <span className='char-stat-span'>{data.skin_color}</span></p>
                <p className='char-stat'>Birth: <span className='char-stat-span'>{data.birth_year}</span></p>
                <p className='char-stat'>Gender: <span className='char-stat-span'>{data.gender}</span></p>
            </CardContent>
        </Card>
    )
}

export default CharInfo;