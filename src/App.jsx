import React from 'react';
import { Navbar, Information } from './components/index';
import { Home } from './container/index';
import './app.scss';

const App = () => {

  return (
    <>
      <Navbar />
      <main>
        {/* <Home /> */}
        <Information />
      </main>
    </>
  )
}

export default App