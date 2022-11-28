import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import AppRedux from './AppRedux'
import AppHooks from './AppHooks'
import AppContext from './AppContext'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <StrictMode>
      <div>
          <App />

          <AppRedux />

          <AppHooks />

          <AppContext />
      </div>
  </StrictMode>,
  rootElement
)
