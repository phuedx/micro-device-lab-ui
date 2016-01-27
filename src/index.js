import React from 'react'
import injectTapEventPlugin from 'react-tap-event-plugin'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { refresh } from './actions'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './components'

injectTapEventPlugin()

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore)
const store = createStoreWithMiddleware(reducer)

store.dispatch(refresh())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
