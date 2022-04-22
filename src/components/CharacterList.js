import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { List, ListItem, ListItemButton, ListItemText, Pagination, PaginationItem } from '@mui/material/'
import Loading from './Loading'

const data_base = 'https://swapi.dev/api/people/'

const CharacterList = () => {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)
    const [pageQty, setPageQty] = useState(0)

    useEffect(() => {
        fetch(data_base + `?page=${page}`)
            .then(response => response.json())
            .then(data => {
                setCharacters(data.results)
                const pageNum = Math.ceil(data.count / 10)
                setPageQty(pageNum)
            })
    }, [page])

    return (
        <>
            <h1 className='title'>Starwars</h1>

            {characters.length === 0 ? <Loading />
                : <List>
                    <ListItem disablePadding>
                        <ListItemText primary={characters.map((char, index) => {
                            return (
                                <div key={index} data-testid={`character-item-${index}`}>
                                    <Link to={'/character'} state={{ data: char, page: page }} className='char-item-list'>
                                        <ListItemButton sx={{ justifyContent: 'center' }}>
                                            {char.name}
                                        </ListItemButton>
                                    </Link>
                                </div>
                            )
                        })} />
                    </ListItem>
                </List>
            }

            {!!pageQty && (<Pagination
                className='page-nav'
                count={pageQty}
                page={page}
                onChange={(_, num) => setPage(num)}
                showFirstButton
                showLastButton
                renderItem={item => (
                    <PaginationItem component={Link} to={`/?page=${item.page}`} {...item} />
                )}
            />
            )}
        </>
    )
}

export default CharacterList