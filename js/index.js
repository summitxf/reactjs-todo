import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Root from './containers/Root'
import todoApp from './reducers'
import configureStore from './store/configureStore';

const store = configureStore();

let rootElement = document.getElementById('root')
render(
    <Root store={store} />,
    rootElement
)
