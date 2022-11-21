import React from 'react'
import { motion } from 'framer-motion'

import { images } from '../../constants'
import { AppWrap } from '../../wrapper'

import '../../styles/components/Header/_header.scss'



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

const Header = () => {
  return (
    <div className={`app__header app__flex`}>
      <motion.div whileInView={{ x: [-100, 0], opacity: [0, 1]}} transition={{ duration: 0.5 }} className="app__headerInfo">
        <div className="app__headerBadge">
          <div className={`badgeCmp app__flex`}>
            <div>
              <p className="pText">Hello 👋, I am</p>
              <h1 className="headText">Martín Fogliacco</h1>
            </div>
          </div>

          <div className={`tagCmp app__flex`}>
            <p className="pText">Full Stack Developer</p>
          </div>
        </div>
      </motion.div>
      
      <motion.div variants={scaleVariants} whileInView={scaleVariants.whileInView} className="app__headerCircles">
        {[images.react, images.redux, images.sass, images.node, images.psql, images.git].map((circle, index) => (
          <div className={`circleCmp app__flex`} key={`circle-${index}`}>
            <img src={circle} alt="circle" />
          </div>
        ))}
        
      </motion.div>
    </div>
  )
}

export default AppWrap(Header, 'home')
