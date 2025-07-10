import React from 'react';
import Header from './components/Header';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <About />
      </div>
    </div>
  );
}

export default App;
