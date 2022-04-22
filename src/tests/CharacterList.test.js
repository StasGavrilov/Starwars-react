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
    it('should render multiple character items', async () => {
        render(<MockCharactersList />);
        const characterDivElements = await screen.findAllByTestId(/character-item/i);
        expect(characterDivElements.length).toBe(10);
    });
})