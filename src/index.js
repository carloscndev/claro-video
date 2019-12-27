// Import Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Import Components
import MainLayout from './components/layouts/MainLayout'
import Routes from './routes'
import rootReducer from './redux/reducers/rootReducer'

// Import Styles
import './styles/reset.scss'

export const store = createStore(
  rootReducer
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
