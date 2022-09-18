import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact'
import 'bootstrap'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <main>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
      </main>
    </div>
  );
}

export default App;
