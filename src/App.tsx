import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './main/routes';
import styles from './App.module.css'

export const App = () => {
    return (
        <div className={styles.appWrapper}>
            <Suspense fallback={<div>Loading...</div>}>
                <BrowserRouter>
                    <Routes />
                </BrowserRouter>
            </Suspense>
        </div>
    );
}