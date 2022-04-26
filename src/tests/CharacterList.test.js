import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CharacterList from '../components/CharacterList';

const MockCharactersList = () => {
    return (
        <BrowserRouter>
            <CharacterList />
        </BrowserRouter>
    )
}

describe('CharacterList', () => {
    it('should have title', async () => {
        render(<MockCharactersList />)
        const titleElement = screen.getByTestId(/character-list-title/i)
        expect(titleElement.innerHTML).toBe('Starwars')
    })
})