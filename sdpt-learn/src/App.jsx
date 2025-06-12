
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/try" element={<h2>Halo 2</h2>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
