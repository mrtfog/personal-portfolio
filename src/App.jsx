import React, { useState } from 'react';
import { Element, scroller, animateScroll as scroll } from 'react-scroll';
import { Navbar, Information } from './components/index';
import { Home, Contact } from './container/index';
import './app.scss';

const App = () => {

  const [scrollXSection, setScrollXSection] = useState({ from: '', to: '', isSameSection: false });

  return (
    <>
      <Navbar setScrollXSection={setScrollXSection} />
      <main>
        <Home />
        <Information />
        <Contact />
      </main>
    </>
  )
}

export default App