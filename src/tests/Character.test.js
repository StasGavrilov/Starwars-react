import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Character from '../components/Character';

const MockCharactersList = () => {
    return (
        <BrowserRouter>
            <Character />
        </BrowserRouter>
    )
}

describe('CharacterList', () => {
    it('should have title', async () => {
        render(<MockCharactersList />)
        const titleElement = await screen.findByTestId(/character-list-title/i)
        expect(titleElement).toHaveClass('char-name')
    })
})