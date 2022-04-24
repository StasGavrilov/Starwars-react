import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material/'
import CharInfo from "../cards/CharInfo"
import Planet from "../cards/Planet"
import Starships from "../cards/Starships"
import Vehicles from "../cards/Vehicles"

const Character = () => {
    const location = useLocation()
    const { data } = location.state
    const { page } = location.state

    return (
        <>
            <h1 className='char-name'>{data.name}</h1>

            <div className="character-container">
                <CharInfo data={data} page={page} />
                <Planet data={data} page={page} />
                <Starships data={data} page={page} />
                <Vehicles data={data} page={page} />
            </div>

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