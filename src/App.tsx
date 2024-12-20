import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Register from './pages/Register';
import FAQ from './pages/FAQ';
import Boutique from './pages/Boutique';
import NotrePlateforme from './pages/Notreplatfrome';
import Login from './pages/Login';
import Noscreateur from './pages/Noscreateur';
import Createur from './pages/Createur';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/plateforme" element={<NotrePlateforme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<Noscreateur />} />
        <Route path="/createur/:id" element={<Createur />} />
      </Routes>
    </Router>
  );
}

export default App;