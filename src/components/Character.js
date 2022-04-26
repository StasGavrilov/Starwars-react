import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@mui/material/'
import CharInfo from "../cards/CharInfo"
import Planet from "../cards/Planet"
import Starship from "../cards/Starship"
import Vehicle from "../cards/Vehicle"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Loading from '../components/Loading'

const Character = () => {
    const [starship, setStarship] = useState({})
    const [planet, setPlanet] = useState({})
    const [vehicle, setVehicle] = useState({})
    const location = useLocation()
    const { data } = location.state
    const { page } = location.state

    useEffect(() => {
        if (data.homeworld) {
            fetch(data.homeworld)
                .then(res => res.json())
                .then(data => {
                    setPlanet(data)
                })
        }

        if (data.starships[0]) {
            fetch(data.starships[0])
                .then(res => res.json())
                .then(data => {
                    setStarship(data)
                })
        }

        if (data.vehicles[0]) {
            fetch(data.vehicles[0])
                .then(res => res.json())
                .then(data => {
                    setVehicle(data)
                })
        }
    }, [])

    return (
        <>
            <h1 className='char-name' data-testid='character-list-title'>{data.name}</h1>

            <div className="character-container">
                <CharInfo data={data} />
                <Planet data={data.homeworld.length === 0 ? null : planet} />
                <Starship data={data.starships.length === 0 ? null : starship} />
                <Vehicle data={data.vehicles.length === 0 ? null : vehicle} />
            </div>

            <div className='back-button'>
                <Button variant="contained" endIcon={<KeyboardBackspaceIcon />}>
                    <Link to={`/?page=${page}`} className='back-btn-link'>
                        Back
                    </Link>
                </Button>
            </div>
        </>
    )
}

export default Character