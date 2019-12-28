// Import Modules
import React from 'react'

// Import Components
import Logo from '../../icons/Logo'
import ButtonBorder from '../ButtonBorder'
import CloseIcon from '../../icons/CloseIcon'
import HamburguerIcon from '../../icons/HamburguerICon'

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

export const HeaderMobile = ({ mobileVisble, setMenuMobile }) => (
  <div className='header-mobile'>
    <div className='header-menu-mobile'>
      <a href='/' className='logo-wrapper'>
        <Logo />
      </a>
      <div
        onClick={() => setMenuMobile(!mobileVisble)}
        className='hamburger-wrapper'
      >
        <HamburguerIcon />
      </div>
    </div>
    <div className={`
      ${'menu-mobile'}
      ${mobileVisble ? 'visible' : ''}
    `}
    >
      <div
        className='background'
        onClick={() => setMenuMobile(!mobileVisble)}
      />
      <div className='menu-content'>
        <div className='first-section'>
          <a href='/' className='logo-wrapper'>
            <Logo />
          </a>
          <div
            className='close-wrapper'
            onClick={() => setMenuMobile(!mobileVisble)}
          >
            <CloseIcon />
          </div>
        </div>
        <div className='second-section'>
          <Menu items={HEADERMENU} />
        </div>
      </div>
    </div>
  </div>
)

const Header = ({ mobileVisble, setMenuMobile }) => (
  <header>
    <div className='container'>
      <HeaderDesktop />
      <HeaderMobile
        mobileVisble={mobileVisble}
        setMenuMobile={setMenuMobile}
      />
    </div>
  </header>
)

export default Header
