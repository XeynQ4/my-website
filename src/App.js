import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import SerpinskiTriangle from './pages/SerpinskiTriangle';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="serpinski-triangle"
                        element={<SerpinskiTriangle />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
