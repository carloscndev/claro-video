// Import Modules
import React, { useEffect } from 'react'

// Import Components
import Header from '../../presentational/Header'
import Footer from '../../presentational/Footer'
import LoadingSpinner from '../../presentational/LoadingSpinner'

// Import Styles
import './styles.scss'

const MainLayout = ({
  children,
  mainLayout,
  setMenuMobile,
  getUrl,
  filterMovies,
  setInputMovile
}) => {
  useEffect(() => {
    getUrl()
  }, [getUrl])
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
        filterMovies={filterMovies}
        setInputMovile={setInputMovile}
        isInputMovileVisible={mainLayout.isInputMovileVisible}
      />
      <main>
        {mainLayout.isLoading && <LoadingSpinner />}
        {!mainLayout.isLoading && children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
