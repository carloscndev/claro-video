// Import Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// Import Components
import MainLayout from './components/containers/MainLayout'
import Routes from './routes'
import rootReducer from './redux/reducers/rootReducer'

// Import Styles
import './styles/reset.scss'

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export const App = () => (
  <Provider store={store}>
    <Router>
      <MainLayout>
        <Routes />
      </MainLayout>
    </Router>
  </Provider>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
