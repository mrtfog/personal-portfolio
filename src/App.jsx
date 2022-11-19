import React from 'react'
import s from './_app.module.scss'

import { About, Footer, Header, Skills, Work } from './container'
import { Navbar } from './components'

export default function App() {
  return (
    <div className={s.app}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Footer />

    </div>
  )
}
