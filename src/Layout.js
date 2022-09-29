import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import './Layout.css';

const Layout = () => {
    return (
        <div id="body">
            <Nav />
            <Outlet />
        </div>
    );
};

export default Layout;
