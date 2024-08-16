// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './Componentes/page_menu';
import Create from './Componentes/page_create';
import Login from './Componentes/page_login';
import Game from './Componentes/page_game';
import OptionCharacters from './Componentes/PageCharacters';
import GeneralAdmin from './Componentes/PageAdmin'; // Importa el nuevo componente

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/create" element={<Create />} />
        <Route path="/imageCharacters" element={<OptionCharacters />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game/*" element={<Game />} />
        <Route path="/administration/*" element={<GeneralAdmin />} /> {/* Agrega esta ruta */}
      </Routes>
    </Router>
  );
}

export default App;
