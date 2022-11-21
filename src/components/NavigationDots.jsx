import React from 'react'

import '../styles/components/Navigation Dots/_navigationDots.scss'

export default function NavigationDots({active}) {
  return (
    <div className="app__navigation">
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <li key={item}>
                <a key={item+index} href={`#${item}`} className="app__navigationDot" style={active === item ? {backgroundColor: '#38a2d7' } : {backgroundColor: '#CACACA' }}></a>
            </li>
        ))}
    </div>
  )
}
