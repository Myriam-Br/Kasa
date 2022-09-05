import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Info from './pages/Info';
import LogementSelect from './pages/Logement'
import Error from './pages/Erreur'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Info />} />
        <Route path="/logement" element={<LogementSelect/>} />
        <Route path="/error" element={<Error/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>,   
  </React.StrictMode>
);


