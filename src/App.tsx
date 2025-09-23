import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Inscricao from './pages/Inscricao';
import Obrigado from './pages/Obrigado';

function App() {
  return (
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
  );
}

export default App;