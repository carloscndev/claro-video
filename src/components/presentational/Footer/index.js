// Import Modules
import React from 'react'

// Import Components
import TwitterIcon from '../../icons/TwitterIcon'
import FacebookIcon from '../../icons/FacebookIcon'
import YoutubeIcon from '../../icons/YoutubeIcon'
import GoogleIcon from '../../icons/GoogleIcon'

// Import styles
import './styles.scss'

// Import const
import { FOOTERLINKS } from '../../../constants/FooterLinks'
import { FOOTERLEGALLINKS } from '../../../constants/FooterLegalLinks'

export const FooterLinks = ({ items }) => (
  <div className='footer-links'>
    {
      items.map((item, i) => <a key={i.toString()} href={item.href}>{item.content}</a>)
    }
  </div>
)

const Footer = () => (
  <footer>
    <div className='container'>
      <div className='first-section'>
        <div className='contact'>
          <div className='phone-info'>Contáctanos llamando sin costo al <strong>800 252 9999</strong></div>
          <a href='/#'>Chat Ayuda en Línea</a>
        </div>
        <FooterLinks items={FOOTERLINKS} />
      </div>
      <div className='second-section'>
        <div className='social'>
          <a href='/#'><TwitterIcon /></a>
          <a href='/#'><FacebookIcon /></a>
          <a href='/#'><YoutubeIcon /></a>
          <a href='/#'><GoogleIcon /></a>
        </div>
        <FooterLinks items={FOOTERLEGALLINKS} />
      </div>
    </div>
  </footer>
)

export default Footer
