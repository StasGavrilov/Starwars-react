import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CharacterList from '../components/CharacterList';

const MockCharacter = () => {
    return (
        <BrowserRouter>
            <CharacterList />
        </BrowserRouter>
    )
}

describe('Character', () => {
    it('test 1', async () => {
        render(<MockCharacter />);
        // const h1Element = await screen.findAllByTestId(/character-item/i);
        // expect().toBeInTheDocument();
    });
})