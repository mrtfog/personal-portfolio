import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { urlFor, client } from '../../client'

import '../../styles/components/About/_about.scss'

export default function About() {

  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type == "abouts"]'

    client.fetch(query)
    .then((data) => setAbouts(data))

  }, [])
  

  return (
    <>
    <div className="app__aboutContainer" id='about'>
      <h2 className="headText"> I Know That a <span>Good Programmer</span> <br/> means <span>Good Business</span> </h2>
    </div>

    <div className="app__profiles">
      {abouts.map((item, index) => {
        return <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween'}} className="app__profileItem" key={item.title + index}>
          <img src={urlFor(item.imgUrl)} alt={item.title} />
          <h2 className="boldText" style={{marginTop: 20}}> {item.title} </h2>
          <h3 className="pText" style={{marginTop: 10}}> {item.description} </h3>
        </motion.div>
      })}
    </div>
    </>
  )
}
