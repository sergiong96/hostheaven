import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Contact from '../../pages/Contact/Contact';
import Register from '../../pages/Register/Register';
import AboutUs from '../../pages/AboutUs/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/about' element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
