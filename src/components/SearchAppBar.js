import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material/'

const SearchAppBar = ({ setCharacters, setIsError }) => {
    const [searchValue, setSearchValue] = useState('')

    const handleSearch = (event) => {
        setSearchValue(event.target.value)
        fetch(`https://swapi.dev/api/people/?search=${searchValue}`)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results)
                setIsError(false)

                if (data.results.length === 0) {
                    setIsError(true)
                }
            })
    }

    return (
        <div className='search-bar'>
            <SearchIcon />
            <TextField onChange={handleSearch} value={searchValue} id="input-with-sx"
                label="Search" variant="standard" className='search-text-field' />
        </div>
    );
}

export default SearchAppBar