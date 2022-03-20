import { Routes, Route } from "react-router-dom";

import Main from './pages/Main'
import Characters from './pages/Characters'
import Vehicles from './pages/Vehicles'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/new-meetup" element={<Characters />} />
      <Route path="/favorites" element={<Vehicles />} />
    </Routes>
  )
}

export default App
