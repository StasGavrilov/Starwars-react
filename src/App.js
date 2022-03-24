import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

import CharacterList from './pages/CharacterList'
import Character from './pages/Character'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CharacterList />} />
        <Route path='/character' element={<Character />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App