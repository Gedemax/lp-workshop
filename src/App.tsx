import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Inscricao from './pages/Inscricao';
import Obrigado from './pages/Obrigado';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Rota principal redireciona para /inscricao */}
          <Route path="/" element={<Navigate to="/inscricao" replace />} />
          
          {/* Página de inscrição */}
          <Route path="/inscricao" element={<Inscricao />} />
          
          {/* Página de obrigado */}
          <Route path="/obrigado" element={<Obrigado />} />
          
          {/* Rota catch-all para páginas não encontradas */}
          <Route path="*" element={<Navigate to="/inscricao" replace />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;