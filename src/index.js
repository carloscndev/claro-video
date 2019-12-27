// Import Modules
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

// Import Components
import Routes from './routes'

// Import Styles
import './styles/reset.scss'

export const App = () => (
  <Router>
    <Routes />
  </Router>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
