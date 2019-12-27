// Import Modules
import React from 'react'

// Import Components
import Header from '../presentational/Header'
import Footer from '../presentational/Footer'

// Import Styles
import './styles.scss'

const MainLayout = ({ children }) => (
  <div className='main-layout'>
    <Header />
    <main>
      {children}
    </main>
    <Footer />
  </div>
)

export default MainLayout
