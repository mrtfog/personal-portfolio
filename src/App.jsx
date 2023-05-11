import React from 'react';
import { Navbar } from './components/index';
import { Home,Portfolio } from './container/index';
import './app.scss';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <Portfolio />

      </main>
    </>
  )
}

export default App