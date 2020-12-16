import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'core-js'
import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import 'antd/dist/antd.css'
import thunkMiddleware from 'redux-thunk'

import { Provider } from 'react-intl-redux'
import graxleApp from './redux/reducers/reducers'
import Routes from './routes/Routes'
import './tailwind.generated.css'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(graxleApp, composeEnhancers(applyMiddleware(thunkMiddleware)))

const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  rootElement
)
