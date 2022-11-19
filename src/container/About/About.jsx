import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'

import s from '../../styles/components/About/_about.module.scss'

const abouts = [
  {
    title: 'Front-End Development', 
    description: 'I am a good and passionate Front-End developer. That is the most exciting part of programming.',
    imgUrl:images.about01
  },
  {
    title: 'Back-End Development', 
    description: 'I have knowledge about Back-End Development. Is not my strength, but I am working on it.',
    imgUrl: images.about02
  },
  {
    title: 'Server Development', 
    description: 'I am  also able to develop servers with SQL technology. Currently, i am learning NoSQL to improve my skills.',
    imgUrl: images.about03
  },
  {
    title: 'UX/UI Oriented', 
    description: 'I ever try to make webpages thinking in the user experience, and with an incredible user interface.',
    imgUrl:images.about04
  },
]

export default function About() {
  return (
    <>
    <div className={s.app__aboutContainer} id='about'>
      <h2 className={s.headText}> I Know That a <span>Good Programmer</span> <br/> means <span>Good Business</span> </h2>
    </div>

    <div className={s.app__profiles}>
      {abouts.map((item, index) => {
        return <motion.div whileInView={{ opacity: 1 }} whileHover={{ scale: 1.1 }} transition={{ duration: 0.5, type: 'tween'}} className={s.app__profileItem} key={item.title + index}>
          <img src={item.imgUrl} alt={item.title} />
          <h2 className={s.boldText} style={{marginTop: 20}}> {item.title} </h2>
          <h3 className={s.pText} style={{marginTop: 10}}> {item.description} </h3>
        </motion.div>
      })}
    </div>
    </>
  )
}
