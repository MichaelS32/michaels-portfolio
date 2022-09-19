import React from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Home from './components/Home';
import Layout from './components/Layout';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import 'bootstrap'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='home' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='portfolio' element={<Portfolio />} />
          {/* <Route path='about' element={<Resume />} /> */}

        </Route>

      </Routes>
    </>
  );
}

export default App;
