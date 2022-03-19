import React from 'react'
import ReactDOM from 'react-dom'
import PrimeReact from 'primereact/api'

import './index.css'

import { AppContextProvider } from './context/AppContext'
import App from './App'

PrimeReact.ripple = true

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
