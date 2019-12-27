// Import Modules
import React from 'react'

// Import Components
import Logo from '../../icons/Logo'
import ButtonBorder from '../ButtonBorder'
import CloseIcon from '../../icons/CloseIcon'

// Import Constants
import { HEADERMENU } from '../../../constants/HeaderMenu'

// Import Styles
import './styles.scss'

export const Menu = ({ items }) => (
  <nav className='menu'>
    {
      items.map((item, i) => <a key={i.toString()} href={item.href}>{item.content}</a>)
    }
  </nav>
)

export const HeaderDesktop = () => (
  <div className='header-desktop'>
    <div className='first-section'>
      <a href='/' className='logo-wrapper'>
        <Logo />
      </a>
      <Menu items={HEADERMENU} />
    </div>
    <div className='second-section'>
      <div className='input-search'>
        <input placeholder='Buscar' />
      </div>
      <div className='buttons-session'>
        <ButtonBorder>Ingresar</ButtonBorder>
        <ButtonBorder>Regístrate</ButtonBorder>
      </div>
    </div>
  </div>
)

export const HeaderMobile = ({ mobileVisble }) => (
  <div className='header-mobile'>
    <div className={`
      ${'menu-mobile'}
      ${mobileVisble ? 'visible' : ''}
    `}>
      <div className='background' />
      <div className='menu-content'>
        <div className='first-section'>
          <a href='/' className='logo-wrapper'>
            <Logo />
          </a>
          <div className='close-wrapper'><CloseIcon /></div>
        </div>
        <div className='second-section'>
          <Menu items={HEADERMENU} />
        </div>
      </div>
    </div>
  </div>
)

const Header = ({ mobileVisble }) => (
  <header>
    <div className='container'>
      <HeaderDesktop />
      <HeaderMobile mobileVisble={mobileVisble} />
    </div>
  </header>
)

export default Header
