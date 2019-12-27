// Import Modules
import React from 'react'

// Import Styles
import './styles.scss'

const MainLayout = ({ children }) => (
  <div className='main-layout'>
    <main>
      {children}
    </main>
  </div>
)

export default MainLayout
