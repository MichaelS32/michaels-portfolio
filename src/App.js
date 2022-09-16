import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import 'bootstrap'

function App() {
  return (
    <div className="App">
      <main>
        <Nav></Nav>
        <About></About>
        <Portfolio></Portfolio>
      </main>
    </div>
  );
}

export default App;
