import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';

import Home from './components/Home';
import Profile from './components/Profile';
import Exams from './components/Exams';
import Navbar from './components/Navbar';


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div>
  <BrowserRouter>
   <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/exams" element={<Exams />}></Route>
    </Routes>
  </BrowserRouter>
  </div>
);
