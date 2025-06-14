
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { NavbarGuest } from './Components/NavbarGuest';

function App() {

  return (
    <>
    <NavbarGuest />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/learn" element={<h2>Laern</h2>} />
          <Route exact path="/about" element={<h2>about</h2>} />
          <Route exact path="/login" element={<h2>login</h2>} />
      
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
