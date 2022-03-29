import { BrowserRouter, Routes, Route } from 'react-router-dom'

import CharacterList from './components/CharacterList'
import Character from './components/Character'
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