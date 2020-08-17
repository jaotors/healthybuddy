import './index.css'

import * as serviceWorker from './serviceWorker'

import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { Grommet } from 'grommet'
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <Grommet plain>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Grommet>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
