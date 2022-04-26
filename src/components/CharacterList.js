import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemButton, Pagination, PaginationItem } from '@mui/material/'
import Loading from './Loading'
import SearchAppBar from './SearchAppBar'
import Error from './Error'

const data_base = 'https://swapi.dev/api/people/'

const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [isError, setIsError] = useState(false)
    const [page, setPage] = useState(1)
    const [pageQty, setPageQty] = useState(0)

    useEffect(() => {
        fetch(data_base + `?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
                const pageCount = Math.ceil(data.count / 10)
                setPageQty(pageCount)
            })
    }, [page])

    return (
        <>
            <h1 className='title' data-testid={'character-list-title'}>Starwars</h1>

            <SearchAppBar setCharacters={setCharacters} setIsError={setIsError} />

            {isError ? <Error />
                : characters.length === 0 ? <Loading />
                    : <>
                        <div className='list-container'>
                            <List>
                                {characters.map((char, index) => (
                                    <ListItem disablePadding key={index} sx={{ justifyContent: 'center' }}>
                                        <div data-testid={`character-item-${index}`}>
                                            <Link to={'/character'} state={{ data: char, page: page }} className='char-item-list'>
                                                <ListItemButton>
                                                    {char.name}
                                                </ListItemButton>
                                            </Link>
                                        </div>
                                    </ListItem>
                                ))}
                            </List>
                        </div>
                    </>
            }

            {pageQty > 0 && !isError ? <Pagination
                data-testid={'page-list'}
                className='page-nav'
                count={pageQty}
                page={page}
                onChange={(_, num) => setPage(num)}
                showFirstButton
                showLastButton
                renderItem={item => (
                    <PaginationItem component={Link} to={`/?page=${item.page}`} {...item} />
                )}
            /> : null
            }
        </>
    )
}

export default CharacterList