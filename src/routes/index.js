// Import Modules
import React, { lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

// Import Components
const Catalog = lazy(() => import('../components/containers/Catalog'))
const MovieDetail = lazy(() => import('../components/containers/MovieDetial'))
const NotFound = lazy(() => import('../components/pages/NotFound'))

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route path='/' exact strict render={() => <Catalog />} />
      <Route path='/movie/:id' exact strict render={() => <MovieDetail />} />
      <Route path='*' exact strict component={() => <NotFound />} />
    </Switch>
  </Suspense>
)

export default Routes
