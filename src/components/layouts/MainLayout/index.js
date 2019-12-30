// Import Modules
import React from 'react'

// Import Components
import Header from '../../presentational/Header'
import Footer from '../../presentational/Footer'
import LoadingSpinner from '../../presentational/LoadingSpinner'

// Import Styles
import './styles.scss'

const MainLayout = ({
  children,
  mainLayout,
  setMenuMobile
}) => {
  return (
    <div className={`
      ${'main-layout'}
      ${mainLayout.isMenuMobileVisible ? 'hiden' : ''}
      ${mainLayout.isLoading ? 'hiden' : ''}
    `}
    >
      <Header
        mobileVisble={mainLayout.isMenuMobileVisible}
        setMenuMobile={setMenuMobile}
      />
      <main>
        {mainLayout.isLoading && <LoadingSpinner />}
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
