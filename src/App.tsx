import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './main/routes';

export const App = () => {
    return (

        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Suspense>
    );
}