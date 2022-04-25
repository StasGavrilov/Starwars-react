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

    const checkData = (entity, entityName) => {
        if (data[entityName].length === 0) return false
        return Object.keys(entity).length === 0
    }

    const checkingData = checkData(planet, 'homeworld', starship, 'starships', vehicle, 'vehicles')

    return (
        <>
            <h1 className='char-name' data-testid='character-list-title'>{data.name}</h1>

            {checkingData ? <Loading />
                : <div className="character-container">
                    <CharInfo data={data} />
                    <Planet data={planet} />
                    <Starship data={starship} />
                    <Vehicle data={vehicle} />

                </div>
            }

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