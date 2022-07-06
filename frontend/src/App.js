import React from 'react'
import Picture from './Components/Picture/index.js';
import About from './Components/About/index.js';
import Contacts from './Components/Contacts/index.js';
import './index.css'

function App() {
  return (
    <>
      <div className="top-info">
        <Picture />
        <About />
      </div>
      <div className="other-stuff">
        <Contacts />
      </div>
    </>
  );
}

export default App;