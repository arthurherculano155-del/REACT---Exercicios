import React from 'react';
import App from './Pages/Tema/Tema.jsx';
import { BrowserRouter, Routes, Route } 
from 'react-router-dom';
import Mudar from './Pages/MudarComponente/Change.jsx';
import PostarLicao from './Pages/Todo-List/List.jsx';
import Filmes from './Pages/ChamandoBD/getFilme.jsx';

export default function AddRoutes() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/mudar' element={<Mudar />} />
                    <Route path='/list' element={<PostarLicao />} />
                    <Route path='/listar' element={<Filmes />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}