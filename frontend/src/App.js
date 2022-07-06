import React from 'react'
import Picture from './Components/Picture/index.js';
import About from './Components/About/index.js';
import Contacts from './Components/Contacts/index.js';
import Card from './Components/Card/index.js';
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
      <h2 className='title'> Projects</h2>
      <div className='cards'>
        <Card
            img='https://www.svgrepo.com/show/373409/default-file.svg'
            title='Project Title'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <Card
            img='https://www.svgrepo.com/show/373409/default-file.svg'
            title='Project Title'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <Card
            img='https://www.svgrepo.com/show/373409/default-file.svg'
            title='Project Title'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
        <Card
            img='https://www.svgrepo.com/show/373409/default-file.svg'
            title='Project Title'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        />
      </div>
    </div>
  );
}

export default App;