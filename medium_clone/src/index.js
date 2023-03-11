import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import CurrentUserChecker from 'components/currentUserChecker'

import Routes from 'routes'
import TopBar from 'components/topBar'
import {CurrentUserProvider} from 'context/currentUser'

const App = () => {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <Router>
          <TopBar/>
          <Routes/>
        </Router>
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

