import React from 'react'
import './_app.scss'

import { About, Footer, Header, Skills, Work } from './container'
import { Navbar } from './components'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />

    </div>
  )
}
