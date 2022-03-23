import React from 'react';
import { Routes, Route } from 'react-router-dom';

const Products = () => {
    return (
        <div>
            <Routes>
                <Route path="/admin/products">
                    <h1>Exibir a listagem de produtos</h1>
                </Route>
                <Route path="/admin/create">
                    <h1>Criar novo produto</h1>
                </Route>
                <Route path="/admin/:productId">
                    <h1>Editar novo prouto</h1>
                </Route>
            </Routes>
        </div>
    )
}

export default Products;