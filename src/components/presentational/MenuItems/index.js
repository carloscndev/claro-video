// Import Modules
import React from 'react'

// Import Constants
import { HEADERMENU } from '../../../constants/HeaderMenu'

const MenuItems = () => (
  <nav className='menu'>
    {
      HEADERMENU.map((item, i) => <a key={i.toString()} href={item.href}>{item.content}</a>)
    }
  </nav>
)

export default MenuItems
