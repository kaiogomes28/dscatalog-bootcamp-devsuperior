import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './core/components/Navbar';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import ProductDetails from './pages/Catalog/components/ProductDetails';
import Home from './pages/Home';
 

const Routess = () => (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} >
            </Route>
            <Route path="/products" element={<Catalog />}>
            </Route>
            <Route path="/products/:productId" element={<ProductDetails />}>
            </Route>
            <Route path="/admin" element={<Admin />}>
            </Route>
        </Routes>
    </BrowserRouter>
);

export default Routess;