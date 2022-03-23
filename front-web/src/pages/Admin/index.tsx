import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './styles.scss';

const Admin = () => (
    <div className="admin-container">
        <Navbar />
        <div className="admin-content">
            <Routes>
                <Route path="/admin/products" element={<Admin />}>
                </Route>
                <Route path="/admin/categories" element={<Admin />}>
                </Route>
                <Route path="/admin/users" element={<Admin />}>
                </Route>
            </Routes>
        </div>
    </div>
);

export default Admin;