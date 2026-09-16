import React from 'react';
import App from './Pages/Tema/Tema.jsx';
import { BrowserRouter, Routes, Route } 
from 'react-router-dom';
import Mudar from './Pages/MudarComponente/Change.jsx';

export default function AddRoutes() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/mudar' element={<Mudar />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    )
}