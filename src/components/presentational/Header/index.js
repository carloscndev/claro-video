// Import Modules
import React from 'react'

// Import Components
import Logo from '../../icons/Logo'
import ButtonBorder from '../ButtonBorder'

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

const Header = () => (
  <header>
    <div className='container'>
      <div className='first-section'>
        <div className='logo-wrapper'>
          <Logo />
        </div>
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
  </header>
)

export default Header
