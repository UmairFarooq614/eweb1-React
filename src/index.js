import { AppStateProvider } from './store' 
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './teleporthq/style.css'
import WEB from './teleporthq/pages/w-e-b'

const App = () => {
  return (
    <Router>
      <AppStateProvider>
        <Route component={WEB} exact path="/w-e-b" />
      </AppStateProvider>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
