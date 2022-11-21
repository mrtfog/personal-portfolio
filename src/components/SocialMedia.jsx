import React from 'react'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'

import '../styles/components/Social Media/_socialMedia.scss'

export default function SocialMedia() {
  return (
    <div className="app__social">
        <div>
            <BsLinkedin />
        </div>
        <div>
            <BsGithub />
        </div>
        <div>
            <SiGmail />
        </div>
    </div>
  )
}
