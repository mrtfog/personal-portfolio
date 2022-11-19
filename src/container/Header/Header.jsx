import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'

import s from '../../styles/components/Header/_header.module.scss'

const scaleVariants = {
  whileInView : {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

export default function Header() {
  return (
    <div className={`${s.app__header} ${s.app__flex}`} id='home'>
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1]}} transition={{ duration: 0.5 }} className={s.app__headerInfo}>
        <div className={s.app__headerBadge}>
          <div className={`${s.badgeCmp} ${s.app__flex}`}>
            <div>
              <p className={s.pText}>Hello 👋, I am</p>
              <h1 className={s.headText}>Martín Fogliacco</h1>
            </div>
          </div>

          <div className={`${s.tagCmp} ${s.app__flex}`}>
            <p className={s.pText}>Full Stack Developer</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className={s.app__headerCircles}>
        {[images.react, images.redux, images.sass, images.node, images.psql, images.git].map((circle, index) => (
          <div className={`${s.circleCmp} ${s.app__flex}`} key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
        
      </motion.div>
    </div>
  )
}
