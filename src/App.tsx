import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './main/routes';
import styles from './App.module.css'

export const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <BrowserRouter>
                <div className={styles.appStyles}>
                    <Routes />
                </div>
            </BrowserRouter>
        </Suspense>
    );
}