import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import s from '../../styles/components/Navbar/_navbar.module.scss'

import { images } from '../../constants'

export default function Navbar() {

    const [toggle, setToggle] = useState(false)


  return (
    <nav className={s.app__navbar}>
        <div className={s.app__navbarLogo}>
            <img src={images.logoLight} alt="LOGO" />
        </div>

        <ul className={s.app__navbarLinks}>
            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={`link-${item}`} className={`${s.app__flex} ${s.pText}`}>
                    <div></div>
                    <a href={`#${item}`}>{item}</a>
                </li>
            ))}
        </ul>

        <div className={s.app__navbarMenu}>
                <HiMenuAlt4 onClick={() => setToggle(true)}/>

                {
                    toggle && (
                        <motion.div
                        whileInView={{ x : [300, 0] }}
                        transition={{ duration: 0.85, ease: 'easeOut' }}
                        >
                            <HiX onClick={() => setToggle(false)}/>
                            <ul>
                            {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                                </li>
                            ))}
                            </ul>
                        </motion.div>
                    )
                }
        </div>
    </nav>
  )
}
