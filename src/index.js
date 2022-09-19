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

//path ="*" permet de gérer l'erreur no routes found

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Info />} />
        <Route path="/logement/:logementId" element={<LogementSelect/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>,   
  </React.StrictMode>
);


