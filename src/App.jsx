import React from 'react';
import { Navbar } from './components/index';
import { Home } from './container/index';
import './app.scss'

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Home />

      </main>
    </>
  )
}

export default App