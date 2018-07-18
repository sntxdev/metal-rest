import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'

import './index.css'
import './index.css'
import App from './App'
import store from './stores/SuperStore'
import SuperStore from './stores/SuperStore'
import AlbumsStore from './stores/AlbumsStore'
import GenresStore from './stores/GenresStore'
const stores = {
  SuperStore,
  AlbumsStore,
  GenresStore,
}

window._____APP_STATE_____ = stores

const Root = () => (
  <Provider store={stores}>
    <App />
  </Provider>
)
ReactDOM.render(<Root />, document.getElementById('root'))
