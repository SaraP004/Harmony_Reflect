import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from './Componentes/page_menu';
import Create from './Componentes/page_create';
import Login from './Componentes/page_login';
import Game from './Componentes/page_game';
import OptionCharacters from './Componentes/PageCharacters';
import PageParentalC from './Componentes/PageParentalC';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/create" element={<Create />} />
        <Route path="/imageCharacters" element={<OptionCharacters />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game/*" element={<Game />} />
        <Route path="/pageParentalC/*" element={<PageParentalC />} />
      </Routes>
    </Router>
  );
}

export default App;
