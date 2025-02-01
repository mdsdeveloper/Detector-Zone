import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Login from './publico/componentes/login/Login.jsx';
import Registro from './publico/componentes/registro/Registro.jsx';
import HomePublico from './publico/componentes/home/HomePublico.jsx';
import HomePrivado from './privado/componentes/home/HomePrivado.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/home" element={<HomePrivado />} />
        {/* Redirigir la raíz a login */}
        <Route path="/" element={<HomePublico />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
