import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import Home from './pages/Home';
 

const Routess = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} >
            </Route>
            <Route path="/catalog" element={<Catalog />}>
            </Route>
            <Route path="/admin" element={<Admin />}>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Routess;