import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CharacterList from './pages/CharacterList'
import Character from './pages/Character'
import app from './css/app.css'

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