// Import Modules
import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

// Import Components
const MainLayout = lazy(() => import('../components/layouts/MainLayout'))
const Catalog = lazy(() => import('../components/pages/Catalog'))
const MovieDetail = lazy(() => import('../components/pages/MovieDetail'))
const NotFound = lazy(() => import('../components/pages/NotFound'))

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <MainLayout>
      <Switch>
        <Route path='/' exact strict render={() => <Catalog />} />
        <Route path='/movie' exact strict render={() => <MovieDetail />} />
        <Route path='*' exact strict component={() => <NotFound />} />
      </Switch>
    </MainLayout>
  </Suspense>
)

export default Routes
