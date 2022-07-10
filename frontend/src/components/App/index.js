import React from 'react'
import Picture from '../Picture/index.js';
import About from '../About/index.js';
import Contacts from '../Contacts/index.js';
import './index.css'

function App() {
  return (
    <div className="app">
      <div className="top-info">
        <Picture />
        <About />
      </div>
      <div className="other-stuff">
        <Contacts />
      </div>
    </div>
  );
}

export default App;