import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'

import Routes from './routes'


const App = () => {
  return (
        <Router>
          <Routes />
        </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))