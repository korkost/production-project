import { Route, Routes, Link, } from 'react-router-dom';
import { Suspense, useContext, useState } from 'react';
import './styles/index.scss';
import { AboutPaageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPaageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';

const App = () => {
    const { theme, toggleTheme } = useTheme();
   
    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                   <Route path={'/about'} element={<AboutPaageAsync />} />
                   <Route path={'/'} element={<MainPaageAsync />}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;